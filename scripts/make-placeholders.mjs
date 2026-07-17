// Génère des placeholders sombres (PNG) aux noms de fichiers attendus par le
// site, afin que la mise en page soit visible AVANT réception des vraies
// photos/logos. À écraser par les fichiers définitifs dans public/assets/.
//
//   node scripts/make-placeholders.mjs
//
// Aucune dépendance : encodeur PNG minimal (RGBA, une couleur unie + label).
import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, '..', 'public', 'assets');
mkdirSync(OUT, { recursive: true });

function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
  }
  return ~c >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const body = Buffer.concat([typeBuf, data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([len, body, crc]);
}
// PNG uni RGBA de w×h, couleur [r,g,b,a]
function solidPng(w, h, [r, g, b, a]) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  const row = Buffer.alloc(1 + w * 4);
  for (let x = 0; x < w; x++) {
    row[1 + x * 4] = r;
    row[1 + x * 4 + 1] = g;
    row[1 + x * 4 + 2] = b;
    row[1 + x * 4 + 3] = a;
  }
  const raw = Buffer.concat(Array.from({ length: h }, () => row));
  const idat = deflateSync(raw);
  return Buffer.concat([
    sig,
    chunk('IHDR', ihdr),
    chunk('IDAT', idat),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

// Placeholders photos (fond anthracite ~#14171a), 16:10-ish
const PHOTOS = [
  'ext-front.jpg',
  'ext-side.jpg',
  'ext-rear3q.jpg',
  'ext-rear.jpg',
  'int-dash.jpg',
  'det-door.jpg',
  'det-armor.jpg',
  'det-speaker.jpg',
];
// Logos : transparents (l'emplacement reste visible sans salir la maquette)
const LOGOS = ['logo-lockup-white.png', 'logo-mark-white.png', 'logo-trust.png'];

let made = 0;
for (const name of PHOTOS) {
  const p = join(OUT, name);
  if (existsSync(p)) continue;
  writeFileSync(p, solidPng(160, 100, [20, 23, 26, 255]));
  made++;
}
for (const name of LOGOS) {
  const p = join(OUT, name);
  if (existsSync(p)) continue;
  // gris clair très légèrement visible sur fond sombre
  writeFileSync(p, solidPng(120, 40, [232, 234, 236, 40]));
  made++;
}
console.log(`Placeholders générés : ${made} (les fichiers existants ne sont jamais écrasés).`);

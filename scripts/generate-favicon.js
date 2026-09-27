import fs from 'fs';

const imgBuffer = fs.readFileSync('public/Ankita-dalvi.jpeg');
const base64 = imgBuffer.toString('base64');

// High resolution circular avatar favicon with an emerald border ring
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <defs>
    <clipPath id="avatarCircle">
      <circle cx="64" cy="64" r="60" />
    </clipPath>
  </defs>
  <!-- Background border ring -->
  <circle cx="64" cy="64" r="63" fill="#10b981" />
  <circle cx="64" cy="64" r="61" fill="#ffffff" />
  <!-- Profile image cropped to circle -->
  <image href="data:image/jpeg;base64,${base64}" x="4" y="4" width="120" height="120" preserveAspectRatio="xMidYMid slice" clip-path="url(#avatarCircle)" />
</svg>`;

fs.writeFileSync('public/favicon.svg', svg);
console.log('favicon.svg successfully generated with profile picture!');

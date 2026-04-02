const fs = require('fs');
const html = fs.readFileSync('d:/Antigravity/lightcelest.html', 'utf8');

const regex = /<div class="c-code">([^<]+)<\/div>[\s\S]*?<h1>([^<]+)<\/h1>[\s\S]*?<h2>([^<]+)<\/h2>/g;
let match;
while ((match = regex.exec(html)) !== null) {
    console.log(`${match[1].trim()} | ${match[2].trim()} | ${match[3].trim()}`);
}

const fs = require('fs');
const { getDirectory } = require('./changeLocation');

function constructDate() {
  const date = new Date();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  const yy = date.getFullYear();
  return `${yy}-${mm}-${dd}`;
}

function getDaily() {
  const dailies = JSON.parse(
    fs.readFileSync(`${__dirname}/templates/daily.json`, 'utf-8')
  );
  return dailies[Math.floor(Math.random() * dailies.length)];
}

function buildTemplate(date, title) {
  const file = fs.readFileSync(`${__dirname}/templates/template.md`, 'utf-8');
  let output = file;
  output = output.replace(/%DATE%/, date);
  output = output.replace(/%TITLE%/, title);
  output = output.replace(/%DAILY%/, getDaily());
  return output;
}

function createNote(title) {
  const date = constructDate();
  const template = buildTemplate(date, title);
  const path = `${getDirectory()}/`;
  const filename = `${date}_${title
    .replace(/[^a-z0-9 ]/gi, '')
    .replace(/ /g, '-')
  }.md`;
  if (fs.existsSync(path + filename)) {
    console.log(`The file '${filename}' already exists`);
    return;
  }
  fs.writeFileSync(path + filename, template, 'utf-8');
}

module.exports = {
  createNote,
};

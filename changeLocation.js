const fs = require('fs');

function setDirectory(location) {
  fs.writeFileSync(`${__dirname}/dir.txt`, location, 'utf-8');
}

function getDirectory() {
  try {
    return fs.readFileSync(`${__dirname}/dir.txt`, 'utf-8');
  } catch (e) {
    const cwd = process.cwd();
    console.log(
      `default dir not found... \nsetting default directory to \n${cwd}`
    );
    console.log(e);
    setDirectory(cwd);
    return cwd;
  }
}

module.exports = {
  getDirectory,
  setDirectory,
};

#!/usr/bin/env node
const yargs = require('yargs');
const { setDirectory } = require('./changeLocation');
const { createNote } = require('./createNote');
const options = yargs.usage('Usage: -t <title>').options({
  t: {
    alias: 'title',
    describe: 'Title of the journal entry',
    type: 'string',
    demandOption: true,
  },
  l: {
    alias: 'location',
    describe: 'sets default directory where you would like to publish to',
    type: 'string',
    demandOption: false,
  },
}).argv;

if (options.location) {
  setDirectory(options.location);
}
createNote(options.title);

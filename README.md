## What is Note maker?
  Note maker is my half assed solution to note taking. I like to use a vim emulator to write my code, but I'm too scared (read: lazy) to learn to use full vim. I've gotten used to using vim commands to navigate through my code editor, and would prefer not to use a typical style of word processor ever again if possible. Here's where my solution comes in. This note maker does exactly as it states. It makes notes based off of a template. This allows me to generate blank templated slates for me to write my journal entries in my code editor of choice. It's hands free and allows me to do whatever i want. I eventually hope to expand this to filter by tags and organize by date.

## How to use? 

go into this file directory and install globally with npm
```
 npm install -g . 
```

go to the directory that you wish to start a notes project and create a note
``` 
noteMaker -t 'A cool title' 
```

It will create a note and set that location as the new default directory, happy note taking!
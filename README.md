# vTokenize

A simple string tokenizer that makes tokens by looping through the given string. It tokenizes based on the details returned by the 'getSliceDetails' function which is passed as a parameter to the 'vTokenize'.

## Installation

```bash
npm install vtokenize
```

## Node usage

```bash
const { vTokenize } = require('vtokenize');

vTokenize(stringToTokenize, maxTokenLength, stringSlice => {

  const map = {
    'str': { token: stringSlice, length: stringSlice.length },
    'ing': { token: stringSlice, length: stringSlice.length },
    'To': { token: stringSlice, length: stringSlice.length },
    'Token': { token: stringSlice, length: stringSlice.length },
    'ize': { token: stringSlice, length: stringSlice.length }
  };

  return map[stringSlice] ? map[stringSlice] : '';

});

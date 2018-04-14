# vTokenize

A simple string tokenizer that makes tokens by looping through the given string. It tokenizes based on the details returned by the 'getSliceDetails' function which is passed as a parameter to the 'vTokenize'.

## Installation

```bash
npm install vtokenize
```

## Node usage

```js
const { vTokenize } = require('vtokenize');

vTokenize(stringToTokenize, maxTokenLength, stringSlice => {

  const map = {
    'str': { token: stringSlice, type: 'someType' },
    'ing': { token: stringSlice, type: 'someType' },
    'To': { token: stringSlice, type: 'someType' },
    'Token': { token: stringSlice, type: 'someType' },
    'ize': { token: stringSlice, type: 'someType' }
  };

  return map[stringSlice] ? map[stringSlice] : { token: stringSlice, type: 'unknown'};

});
```

**Note:** The 'type' key in the returned object and returning an object with `type: 'unknown'` when  `stringSlice` is not found, are compulsory.

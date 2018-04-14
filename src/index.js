const cannotSeek = (seeked, maxSeek, inStr, i) =>

  seeked === maxSeek || i === inStr.length - 1;

const getTokenDetails = (tempCharDetails, foundIndex) =>

  (foundIndex > -1) ? {

    foundIndex,
    token: tempCharDetails[foundIndex]

  } : {

    foundIndex: 0,
    token: tempCharDetails[0]

  };

const isTokenFound = sliceDetails =>

  sliceDetails ? true : false;

export const vTokenize = (str, maxTokenLength, getSliceDetails) => {

  const inStr = str.slice(0, str.length);
  const maxSeek = maxTokenLength;

  const tokens = [];

  let seeked = 0,
    strSlice = '',
    tempSliceDetails = [],
    tokenFound = [];

  for (let i = 0, l = inStr.length; i < l; i += 1) {

    seeked += 1;

    strSlice += inStr[i];

    const sliceDetails = getSliceDetails(strSlice);

    tempSliceDetails.push(sliceDetails);

    tokenFound.push(isTokenFound(sliceDetails));

    if (cannotSeek(seeked, maxSeek, inStr, i)) {

      let foundIndex = tokenFound.lastIndexOf(true);

      const tokenDetails = getTokenDetails(tempSliceDetails, foundIndex);

      foundIndex = tokenDetails.foundIndex;

      tokens.push(tokenDetails.token);

      // resetting the 'i' to pick the next untokenized char.
      i -= (seeked - 1) - foundIndex;

      // reset variables
      seeked = 0;
      strSlice = '';
      tempSliceDetails = [];
      tokenFound = [];

    }

  }

  return tokens;

};

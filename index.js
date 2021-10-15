const getArrayToLowerCase = (obj) => {
  let arr = [];
  for (const item of obj) {
    if (typeof item === 'object' && item !== null) {
  	  arr.push(setAllLowerCaseKeys(item));
    } else {
  	  arr.push(item);
    }
  }
  return arr;
};

const setAllLowerCaseKeys = (obj) => {
  let newObj = {};

  if (obj instanceof Array) {
    newObj = getArrayToLowerCase(obj);
  } else {
    let key, keys = Object.keys(obj);
    let n = keys.length;

    for (let i=0; i<n; i++) {
      key = keys[i];
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        newObj[key.toLowerCase()] = setAllLowerCaseKeys(obj[key]);
      } else if (obj[key] instanceof Array) {
        const itens = getArrayToLowerCase(obj[key]);
        newObj[key.toLowerCase()] = itens;
      } else {
        newObj[key.toLowerCase()] = obj[key];
      }
    }
  }

  return newObj;
};

export const convertAllKeysToLower = (obj) => {
  const newObj = setAllLowerCaseKeys(obj);

  return newObj;
};

const getArrayKeysToLowerCase = (obj) => {
  let arr = [];

  for (const item of obj) {
    if (typeof item === 'object' && item !== null) {
  	  arr.push(setObjectKeysToLowerCase(item));
    } else {
  	  arr.push(item);
    }
  }

  return arr;
};

const setObjectKeysToLowerCase = (obj) => {
  let newObj = {};
  let key, keys = Object.keys(obj);
  let n = keys.length;

  for (let i=0; i<n; i++) {
    key = keys[i];
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      newObj[key.toLowerCase()] = setAllKeysToLowerCase(obj[key]);
    } else if (obj[key] instanceof Array) {
      const itens = getArrayKeysToLowerCase(obj[key]);
      newObj[key.toLowerCase()] = itens;
    } else {
      newObj[key.toLowerCase()] = obj[key];
    }
  }

  return newObj;
};

const setAllKeysToLowerCase = (obj) => {
  let newObj;

  if (obj instanceof Array) {
    newObj = getArrayKeysToLowerCase(obj);
  } else {
    newObj = setObjectKeysToLowerCase(obj);
  }

  return newObj;
};

export const convertAllKeysToLower = (obj) => {
  const newObj = setAllKeysToLowerCase(obj);

  return newObj;
};

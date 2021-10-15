const getItemsFromArray = (obj) => {
  let arrComp = [];
  for (const item of obj) {
    if (typeof item === 'object' && item !== null) {
  	  arrComp.push(mappingKeysObj(item));
    } else {
  	  arrComp.push(item);
    }
  }
  return arrComp;
};

const mappingKeysObj = (obj) => {
  let newObj = {};

  if (obj instanceof Array) {
    newObj = getItemsFromArray(obj);
  } else {
    let key, keys = Object.keys(obj);
    let n = keys.length;

    for (let i=0; i<n; i++) {
      key = keys[i];
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        newObj[key.toLowerCase()] = mappingKeysObj(obj[key]);
      } else if (obj[key] instanceof Array) {
        const itens = getItemsFromArray(obj[key]);
        newObj[key.toLowerCase()] = itens;
      } else {
        newObj[key.toLowerCase()] = obj[key];
      }
    }
  }

  return newObj;
};

export const convertAllKeysToLower = (obj) => {
  const newObj = mappingKeysObj(obj);

  return newObj;
};

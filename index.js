const mappingKeysObj = (obj) => {
  let newObj = {};

  if (obj instanceof Array) {
  	newObj = [];
    for (const item of obj) {
    	newObj.push(mappingKeysObj(item));
    }
  } else {
    let key, keys = Object.keys(obj);
    let n = keys.length;

    for (let i=0; i<n; i++) {
      key = keys[i];
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        newObj[key.toLowerCase()] = callBackKeys(obj[key]);
      } else if (obj[key] instanceof Array) {
        let itens = [];
 
        for (const item of obj[key]) {
          itens.push(mappingKeysObj(item));
        }

        newObj[key.toLowerCase()] = itens;
      } else {
        newObj[key.toLowerCase()] = obj[key];
      }
    }
  }

  return newObj;
};

const callBackKeys = (obj) => {
  let newObj;

  if (obj instanceof Array) {
  	newObj = [];
    for (const item of obj) {
    	newObj.push(mappingKeysObj(item));
    }
  } else {
  	newObj = {};
  	newObj = mappingKeysObj(obj);
  }
  
  return newObj;
};

export const convertAllKeysToLower = (obj) => {
  const newObj = callBackKeys(obj);

  return newObj;
};

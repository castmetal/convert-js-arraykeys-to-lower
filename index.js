const mappingKeysObj = (obj) => {
  let newobj = {};

  if (obj instanceof Array) {
  	newobj = [];
		for (const item of obj) {
    	newobj.push(mappingKeysObj(item));
    }
  } else {
    let key, keys = Object.keys(obj);
    let n = keys.length;
    for (let i=0; i<n; i++) {
      key = keys[i];
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        newobj[key.toLowerCase()] = callBackKeys(obj[key]);
      } else if (obj[key] instanceof Array) {
        let itens = [];
        for (const item of obj[key]) {
          itens.push(mappingKeysObj(item));
        }

         newobj[key.toLowerCase()] = itens;
      } else {
        newobj[key.toLowerCase()] = obj[key];
      }
    }
  }

  return newobj;
};

const callBackKeys = (obj) => {
  let newobj;
  if (obj instanceof Array) {
  	newobj = [];
		for (const item of obj) {
    	newobj.push(mappingKeysObj(item));
    }
  } else {
  	newobj = {};
  	newobj = mappingKeysObj(obj);
  }
  
  return newobj;
};

export const convertAllKeysToLower = (obj) => {
  const newObj = callBackKeys(obj);
  return newObj;
};

const countKeys = (obj) => {
  return Object.keys(obj).length;
};

const createComponentLayout = (obj, metadata) => {
  let comp = {};
  comp.type = obj.Components;
  comp.attributes = {};
  let config = {};
  for (let i = 1; i < countKeys(obj); i++) {
    if (!isEmpty(obj[`value${i}`])) {
      let key = obj[`property${i}`];
      config[key] = obj[`value${i}`];
    }
  }
  config.library = metadata.library
  comp.attributes = config;
  return comp;
};

const captureMetadata = (obj) => {
  let config = {};
  config.name = obj.value

  for (let i = 1; i < countKeys(obj); i++) {
    if (!isEmpty(obj[`value${i}`])) {
      let key = obj[`property${i}`];
      config[key] = obj[`value${i}`];
    }
  }  
  return config;
};

const createMasterLayout = (compArr) => {
  let masterLayout = {};
  let metadata = captureMetadata(compArr[0])
  masterLayout.componentName = metadata.name.replace(/\s/g,'')
  masterLayout.library = metadata.library

  let layoutCompList = [];
  let componentList = compArr.splice(1);
  componentList.forEach((obj) => {
    layoutCompList.push(createComponentLayout(obj, metadata));
  });
  masterLayout.componentList = layoutCompList;
  console.log(masterLayout)
  return masterLayout;
};

const isEmpty = (data) => {
  if (data === "" || data === undefined || data === null) {
    return true;
  }
  return false;
};

module.exports = { createMasterLayout };

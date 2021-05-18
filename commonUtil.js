const countKeys = (obj) => {
  return Object.keys(obj).length;
};

const createComponentLayout = (obj) => {
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
  comp.attributes = config;
  return comp;
};

const captureMetaData = (obj) => {
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
  let metaData = captureMetaData(compArr[0])
  masterLayout.componentName = metaData.name.replace(/\s/g,'')
  masterLayout.library = metaData.library

  let layoutCompList = [];
  let componentList = compArr.splice(1);
  componentList.forEach((obj) => {
    layoutCompList.push(createComponentLayout(obj));
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

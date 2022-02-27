let widgetComponentMap = {
  "InputText": "InputText",
  "DropdownButton": "SelectInputBox",
  "RaisedButton": "ButtonComponent",
  "RadioListTile": "RadioInputButton",
  "Text": "Text",
  "TextField": "InputText",
  "TextContainer": "TextContainer",
  "Image": "ImageComponent"
};

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
  config.library = metadata.library;
  comp.attributes = config;
  return comp;
};

const captureMetadata = (obj) => {
  let config = {};
  config.name = obj.value;

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
  let metadata = captureMetadata(compArr[0]);
  masterLayout.componentName = metadata.name.replace(/\s/g, '');
  masterLayout.library = metadata.library;
  masterLayout.layout = metadata.layout;

  let layoutCompList = [];
  let componentList = compArr.splice(1);
  componentList.forEach((obj) => {
    layoutCompList.push(createComponentLayout(obj, metadata));
  });
  masterLayout.componentList = layoutCompList;
  console.log(masterLayout);
  return masterLayout;
};

const isEmpty = (data) => {
  if (data === "" || data === undefined || data === null) {
    return true;
  }
  return false;
};

/**
 * Converts components attributes into key value pair
 * @param {object} payload - master payload
 */
function updatePayloadAttributes(payload) {
  return new Promise((resolve) => {
    payload.data.forEach((eachPageObj) => {
      eachPageObj.widgets.forEach((eachWidgetObj) => {
        // converting array of widget configuration objects to single object
        let configObj = {};
        eachWidgetObj.configuration.forEach((eachConfigObj) => {
          configObj[eachConfigObj.Property] = eachConfigObj.Value;
        });
        eachWidgetObj.configuration = configObj;
        // release memory
        configObj = null;

        // converting array of children configuration objects to single object
        if (eachWidgetObj.children.length !== 0) {
          eachWidgetObj.children.forEach((eachChildObj) => {
            let childConfigObj = {};
            eachChildObj.configuration.forEach((eachChildConfigObj) => {
              childConfigObj[eachChildConfigObj.Property] =
                eachChildConfigObj.Value;
            });
            eachChildObj.configuration = childConfigObj;
            // release memory
            childConfigObj = null;
          });
        }
      });
    });
    // console.log(JSON.stringify(payload));
    resolve(payload);
  });
}

const createPage = (pageData) => {
  let page = {};

  page.pageName = pageData.widgets.filter(widget => widget.configuration?.id == "displayName")[0]?.configuration.textValue.split(' ').join('') ?? pageData.page;
  page.displayName = pageData.widgets.filter(widget => widget.configuration?.id == "displayName")[0]?.configuration.textValue ?? pageData.page;
  page.heading = pageData.widgets.filter(widget => widget.configuration?.id == "heading")[0]?.configuration.textValue ?? '';
  page.subHeading = pageData.widgets.filter(widget => widget.configuration?.id == "subHeading")[0]?.configuration.textValue ?? '';

  page.componentList = [];
  pageData.widgets.forEach(widget => {
    let component = {};
    component.type = widgetComponentMap[widget.widget] ?? '';
    component.attributes = {};
    component.attributes.label = widget.configuration?.label ?? widget.configuration?.textValue ?? widget.configuration?.parameterName ?? widget.configuration?.text ?? '';
    component.attributes.id = widget.configuration?.id ?? widget.configuration.parameterName?.toLowerCase().replaceAll(' ', '-') ?? '';
    component.attributes.name = widget.configuration?.id ?? widget.configuration.parameterName?.toLowerCase().replaceAll(' ', '-') ?? '';
    component.attributes.type = widget.configuration?.dataType ?? (component.type === 'RadioInputButton' ? 'radio' : '');

    if (component.type === 'SelectInputBox' || component.type === 'RadioInputButton') {
      component.attributes.options = (component.type === 'RadioInputButton' && pageData.widgets.filter(wid => wid.widget === 'RadioListTile').map(radioWidget => radioWidget.configuration?.parameter)?.toString()) || (widget.children.length > 0 && widget.children.map(child => child.configuration?.text)?.toString()) || '';
    }

    if (component.type === 'ImageComponent') {
      component.attributes.imgUrl = widget.configuration?.url;
      component.attributes.imgAlt = widget.configuration?.alt;
    }

    if (component.type === 'ButtonComponent') {
      component.attributes.path = `/${widget.configuration?.onPressed}`;
    }

    page.componentList.push(component);
  });

  // remove duplicate objects
  page.componentList = page.componentList.filter(
    (component, componentIndex, componentListArray) =>
      componentIndex ===
      componentListArray.findIndex((comp) => comp.attributes?.id === component.attributes?.id)
  );

  return page;
};

const createMasterJson = async (payload) => {
  payload = await updatePayloadAttributes(payload);
  let masterJson = {};
  masterJson.appName = payload.appName ?? 'GetQuote';
  masterJson.pages = [];
  payload.data.forEach(pageData => {
    let page = createPage(pageData);
    masterJson.pages.push(page);
  });
  return masterJson;
};

module.exports = { createMasterLayout, createMasterJson };

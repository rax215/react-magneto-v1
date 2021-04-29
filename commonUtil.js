const countKeys = obj => {
    return Object.keys(obj).length
}

const createComponentLayout = obj => {
    let comp = {};
    comp.type = obj.Components;
    comp.attributes = {};
    let config = {};
    for(let i = 1; i < countKeys(obj); i++) {
        if(!isEmpty(obj[`value${i}`])){
            let key = obj[`property${i}`]
            config[key] = obj[`value${i}`]
        }
    }
    comp.attributes = config;
    return comp;
}

const createMasterLayout = (compArr) => {
    let masterLayout = {}
    masterLayout.componentName = compArr[0].value
    masterLayout.layout = compArr[1].value
    let layoutCompList = []
    let componentList = compArr.splice(2)
    componentList.forEach(obj => {
        layoutCompList.push(createComponentLayout(obj))
    });
    masterLayout.componentList = layoutCompList
    return masterLayout
}

const isEmpty = data => {
    if(data == '' || data == undefined || data == null) {
        return true
    }
    return false
}

module.exports = {createMasterLayout}
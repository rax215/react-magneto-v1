const ComponentLibrary = require('./componentLibrary')
const ComponentGenerator = require('./componentGenerator')

const generateComponent = (masterLayout,componentData) => {
    const res = ComponentGenerator.generateComponent(masterLayout,componentData)
    return res
}

const generateJSX = async(masterLayout) => {

    return new Promise ((resolve, reject) => {       

        let componentData = []; 
        masterLayout.componentList.forEach(component => {
        if(component.type === 'TextInput') {
            componentData.push({"compName" : "TextField","jsx" : ComponentLibrary.textInputComponent(component.attributes)})
        }
        // else if(component.type === 'RadioButton') {
        //     componentData.push({"compName" : "RadioButton","jsx" :  ComponentLibrary.radioButtonComponent(component.attributes)})
        // }
        else if(component.type === 'DropDown') {
            componentData.push({"compName" : "DropDown","jsx" : ComponentLibrary.dropDownComponent(component.attributes)})
        }
        })

       const jsxFile = generateComponent(masterLayout,componentData)
       resolve(jsxFile)
    })
}

module.exports = {generateJSX}
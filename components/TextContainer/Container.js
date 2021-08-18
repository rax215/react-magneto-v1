const getTextContainer = (attributes) => {
  let component = ''
    if(attributes.library === 'materialUI') {
  component = `<div> 
      <h1>${attributes.label}</h1>  
      </div> 
        `;
      } else if(attributes.library === 'primeReact') {
        component = `<div>
        <h1>${attributes.label}</h1>
        </div>`  
      }
 return `${component}`
 }
module.exports = { getTextContainer };

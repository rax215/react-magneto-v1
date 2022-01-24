const getTextContainer = (attributes) => {
  let component = ''
    if(attributes.library === 'materialUI') {
  component = `<div> 
      <h2>${attributes.label}</h2>  
      </div> 
        `;
      } else if(attributes.library === 'primeReact') {
        component = `<div>
        <h2>${attributes.label}</h2>
        </div>`  
      }
 return `${component}`
 }
module.exports = { getTextContainer };

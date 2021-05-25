const getFormLebel = (attributes) => {
  const mandatory = attributes.mandatory ? attributes.mandatory : false;
  return `   <FormLabel className="formlabel" required="${mandatory}">${attributes.label}</FormLabel>
    `;
};

module.exports = { getFormLebel };

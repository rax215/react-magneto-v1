const getFormLebel = (attributes) => {
  return `   <FormLabel className="formlabel" required="${attributes.mandatory}">${attributes.label}</FormLabel>
    `;
};

module.exports = { getFormLebel };

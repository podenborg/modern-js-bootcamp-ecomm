const layout = require('../helpers');

module.exports = ({ products }) => {
  const renderedProducts = products.map(product => {
    return `
      <li>${product.title} - ${product.price}</li>
    `;
  }).join('');

  return `
    <ul>
      ${renderedProducts}
    </ul>
  `;
};
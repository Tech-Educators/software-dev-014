// Pure:
// function priceAfterTax(productPrice) {
//  return (productPrice * 0.20) + productPrice;
// }

// priceAfterTax(5) //this will always give me the same result

// Impure:
// let tax = 20;
// function calculateTax(productPrice) {
//  return (productPrice * (tax/100)) + productPrice;
// }

// calculateTax(57) //this will give me different results if the value of tax changes

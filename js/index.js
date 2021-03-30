// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

 const price = Number(product.querySelector('.price span').textContent);
 const quantity = Number(product.querySelector('.quantity input').value);
 const subTotal = price * quantity;
 product.querySelector('.subtotal span').innerText = subTotal;
 return subTotal;
}

function calculateAll(product) {
  
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  let sum = 0;

  const myProducts = document.getElementsByClassName("product");
  for (let i = 0; i < myProducts.length; i++) {
    sum = sum + updateSubtotal(myProducts[i]);
  };

  // ITERATION 3

  document.querySelector('#total-value span').innerText = sum;
  
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

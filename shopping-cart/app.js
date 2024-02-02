document.addEventListener('DOMContentLoaded', () => {
    const products = [
      { id: "1", name: "Product 1", price: 10.00 },
      { id: "2", name: "Product 2", price: 20.00 }
      // Add more products as needed
    ];
  
    const cart = [];
  
    function renderProducts() {
      const productList = document.getElementById('productList');
      products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        const productName = document.createElement('h2');
        productName.textContent = product.name;
        
        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price}`;
        
        const addButton = document.createElement('button');
        addButton.textContent = 'Add to Cart';
        addButton.addEventListener('click', () => addToCart(product));
        
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(addButton);
        
        productList.appendChild(productDiv);
      });
    }
  
    function addToCart(product) {
      const existingProduct = cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      renderCart();
    }
  
    function renderCart() {
      const cartItemsElement = document.getElementById('cartItems');
      cartItemsElement.innerHTML = '';
      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItemsElement.appendChild(li);
      });
      calculateTotal();
    }
  
    function calculateTotal() {
      const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      document.getElementById('cartTotal').textContent = total.toFixed(2);
    }
  
    renderProducts();
  });
  
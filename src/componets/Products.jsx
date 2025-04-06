import React from "react"; 

function Products({name, price}) {
  return (
    <div>
      <h3>Our Products</h3>
     <p>Product Name: {name}</p>
        <p>Product Price: {price}</p>
        <button>Add to Cart</button>
        <button>Remove from Cart</button>
        <button>Buy Now</button>
    </div>
  );
}

export default Products;
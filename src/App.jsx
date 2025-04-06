import React from "react";
import greetings from "./components/greetings";

function App() {
  return (
    <div>
      <h1>Welcome to our store!</h1>
      <Greetings name="John Doe" />
      <div className="product-card">
<h3>Product Name: Awesome Widget</h3>
<p>Product Price: $19.99</p>
<button>Add to Cart</button>
<button>Remove from Cart</button>
<button>Buy Now</button>
</div>
      <p>We hope you find what you're looking for.</p>
    </div>
  );
}
export default App;
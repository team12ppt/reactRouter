import Header from "./Header";

import Products from "./Product";
import { useState } from "react";
import CartList from "./CarList";
function App() {
  const [product] = useState([
    {
      url: 'https://p2-ofp.static.pub//fes/cms/2023/07/17/cb33s6cv4scvgl4k2mxwpjhnmqfjgg628756.png',
      name: 'lenovo ideapad Slim 3',
      price: 57000
    },
    {
      url: 'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe365f37f/images/Fastrack/Catalog/3287NM01_1.jpg?sw=800&sh=800',

      name: 'fastrack w98',
      price: 1500
    }
  ])
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const addToCart = (data) => {
setCart([...cart, { ...data, quantity: 1 }])
}
const handleShow = (value) => {
  setShowCart(value)
}
return (
  <div >
    <Header count={cart.length} handleShow={handleShow} />
    {
      showCart ?
        <CartList cart={cart} /> :
        <Products product={product} addToCart={addToCart} />
    }
  </div>
)
}
export default App;

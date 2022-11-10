import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
    const [cart, setCart] = useState({items:{}, price:0})
    function onclick(index) {
        let item = bakeryData[index]
        let items = cart.items
        let price = cart.price

        if (item.name in items){
            items[item.name] += 1
        } else {
            items[item.name] = 1
        }
        console.log(items)

        price += item.price
        setCart({items: items, price: price})
    }
  return (
    <div className="App">
      <h1 className="header">Ziyuan's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      <div className="main">
          <div className="menu">
              {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
                  <BakeryItem index={index} image={item.image} name={item.name} description={item.description} onclick={onclick} price={item.price}>
                  </BakeryItem>
              ))}
          </div>
          <div className="Cart">
              <h2>Cart</h2>
              <ul>
                  {Object.keys(cart.items).map((key) => (
                      <li>{cart.items[key]}x {key}</li>
                  ))}
              </ul>
              <p>Total: ${cart.price.toFixed(2)}</p>
          </div>
      </div>
    </div>
  );
}

export default App;

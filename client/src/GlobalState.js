import { useState, createContext, useContext } from "react"

// create the context object for delivering your state across your app.
const GlobalContext = createContext(null)

// custom component to provide the state to your app
export const GlobalState = props => {
  // declare the GlobalState
  const [basketItems, setBasketItems] = useState([])

  // create a function that'll make it easy to update state property
  const onAddBasket = product => {
    const exist = basketItems.find((x) => x.id === product.id);
    if (exist) {
      setBasketItems(
        basketItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setBasketItems([...basketItems, { ...product, qty: 1 }]);
    }
  };

  const onRemoveBasket = product => {
    const exist = basketItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setBasketItems(basketItems.filter((x) => x.id !== product.id));
    } else {
      setBasketItems(
        setBasketItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };



  return (
    <GlobalContext.Provider value={[globalState, updateGlobalState]}>{props.children}</GlobalContext.Provider>
  )
}

// custom hook for retrieving the provided state
export const useGlobalState = () => useContext(GlobalContext)
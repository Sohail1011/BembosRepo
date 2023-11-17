import { useState } from "react"
import { ProductContext } from "./ProductContext"

const initialState = {
  products: []
}

export const ProductProvider = ({children}) => {
  const [productState, setState] = useState(initialState);

  return (
    <ProductContext.Provider value={{productState, setState}}>{children}</ProductContext.Provider>
  )
}

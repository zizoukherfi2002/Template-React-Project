import { useState } from 'react'

import './App.css'
import ProductsPage from './features/products/pages/productsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
     <ProductsPage /> 
  )
}

export default App

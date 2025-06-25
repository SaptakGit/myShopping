import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './coponents/Layout'
import Home from './coponents/home/Home'
import Product from './coponents/product/ProductList'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout/>,
      children:[
        { path: '/', element: <Home/> },
        { path: '/products', element: <Product/>}
      ]
    }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App

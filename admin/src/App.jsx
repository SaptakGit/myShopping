import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './component/Login'
import Navbar from './component/Navbar'
import Body from './component/Body'
import Dashboard from './component/Dashboard'
import Category from './component/category/Category'
import Product from './component/product/Product'

function App() {
  
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Login/>
    },
    {
      path: '/',
      element: <><Navbar/><Body/></>,
      children: [
        { path: '/dashboard', element: <Dashboard/>},
        { path: '/category', element: <Category/>},
        { path: '/product', element: <Product/>}
      ] 
    }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}


export default App

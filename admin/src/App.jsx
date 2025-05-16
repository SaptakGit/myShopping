import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CheckAuth from './middlewares/CheckAuth'
import Login from './component/Login'
import Navbar from './component/Navbar'
import Layout from './component/Layout'
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
      element: <Layout/>,
      children: [
        /*{ path: '/dashboard', element: <CheckAuth childern={<Dashboard/>}><Dashboard/></CheckAuth>},
        { path: '/category', element:<CheckAuth childern={<Category/>}><Category/></CheckAuth>},
        { path: '/product', element:<CheckAuth childern={<Product/>}><Product/></CheckAuth>}*/
         { path: '/dashboard', element: <Dashboard/>},
        { path: '/category', element:<Category/>},
        { path: '/product', element:<Product/>}
      ] 
    }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}


export default App

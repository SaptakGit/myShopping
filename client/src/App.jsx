import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './coponents/Layout'
import Home from './coponents/home/Home'
import Product from './coponents/product/ProductList'
import Productdetail from './coponents/product/ProductDetail'
import { Provider } from 'react-redux'
import appStore from './store/appStore'
import CheckAuth from './middlewares/CheckAuth'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout/>,
      children:[
        { path: '/', element: <CheckAuth><Home/></CheckAuth> },
        { path: '/products', element: <CheckAuth><Product/></CheckAuth>},
        { path: '/productdetails', element: <CheckAuth><Productdetail/></CheckAuth>}
      ]
    }
  ]) 

  return (
    <Provider store={appStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  )
}

export default App

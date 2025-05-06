import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './component/Login'
import Navbar from './component/Navbar'
import Body from './component/Body'
import Dashboard from './component/Dashboard'
import Category from './component/Category'

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
        { path: '/category', element: <Category/>}
      ] 
    }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}


export default App

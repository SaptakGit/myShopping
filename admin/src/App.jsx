import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './component/Login'
import Navbar from './component/Navbar'
import Body from './component/Body'
import Dashboard from './component/Dashboard'

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
        { path: '/dashboard', element: <Dashboard/>}
      ] 
    }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}


export default App

import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MeyinLayout from './layout/MeyinLayout'
import Hoome from './pages/Hoome'
import Abaut from './pages/Abaut'
import Contact from './pages/Contact'
import ToliqMalumod from './pages/ToliqMalumod'
function App() {
let router =createBrowserRouter([
  {
    path:"/",
    element:<MeyinLayout/>,
    children:[
      {
        path:"/",
        element:<Hoome/>
      },
      {
        path:"/abaut",
        element:<Abaut/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/toliq/:id",
        element:<ToliqMalumod/>
      }
    ]
  }
])
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App

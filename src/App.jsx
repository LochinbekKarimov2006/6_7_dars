import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MeyinLayout from './layout/MeyinLayout'
import Hoome from './pages/Hoome'
import Abaut from './pages/Abaut'
import Contact from './pages/Contact'
import ToliqMalumod from './pages/ToliqMalumod'
import Mesj from './pages/Mesj'
import Account from './pages/Account'
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
      },
      {
      path:"/mesj",
      element:<Mesj/>
      },
      {
        path:"/account",
        element:<Account/>
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

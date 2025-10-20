import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router'
import './index.css'
import Home from './Pages/Home'
import Book from './Pages/Book'
import Edit from './Pages/Edit'
import About from './Pages/About'

const router = createBrowserRouter([
  {path:'/', element:<Home/>},
  {path:'/book', element:<Book/>},
  {path:'/skcedit', element:<Edit/>},
  {path:'/about', element:<About/>},
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)

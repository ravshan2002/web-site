import { createBrowserRouter,createRoutesFromElements,RouterProvider, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import RootLayout from './layout/RootLayout'
import AboutLayout from './layout/AboutLayout'
import Mazgi from './pages/Mazgi'
import Support from './pages/Support'

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<AboutLayout/>}>
        <Route path='mazgi' element={<Mazgi/>}/>
        <Route path='support' element={<Support/>}/>
      </Route>
      <Route path='/contact' element={ <Contact/>}/>
      <Route path='*' element={ <PageNotFound/>}/>
    </Route>

  )
)

function App() {

  return (
    <div>
      <RouterProvider router={router}/>

    </div>
  )
}

export default App

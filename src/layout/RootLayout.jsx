import { NavLink,Outlet } from "react-router-dom"

function RootLayout() {
  return (
    <div>
        <nav className='navbar'>
        <h1>Logo</h1>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>

      <Outlet/>
    </div>
  )
}

export default RootLayout
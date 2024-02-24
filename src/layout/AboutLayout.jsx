import { NavLink, Outlet } from "react-router-dom"

function AboutLayout() {
  return (
    <div>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nihil delectus laborum iusto quo quas sit amet, recusandae perspiciatis enim asperiores totam quod adipisci maiores natus numquam similique sed error perferendis. Ipsum dicta ratione, nobis enim dignissimos molestias doloribus quidem, maiores natus, neque illo repellat explicabo reiciendis aspernatur laborum officiis!</p>
        
        <ul>
            <li>
                <NavLink to="support">Support</NavLink>
            </li>
            <li>
                <NavLink to='mazgi'>Mazgi</NavLink>
            </li>
        </ul>

        <Outlet/>

    </div>
  )
}

export default AboutLayout
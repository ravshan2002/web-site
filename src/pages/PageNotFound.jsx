import { NavLink } from "react-router-dom"

function PageNotFound() {
  return (
    <div>
        <h1>Sen Notogri sahifaga kirding</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae qui in eius doloribus quae rerum labore, aspernatur ullam officia, provident numquam cum impedit aut tempore quia! Optio, nam ipsa saepe impedit commodi ullam aliquid aperiam unde magni assumenda autem necessitatibus et, nihil ipsam beatae nobis sed voluptates iste non voluptatem.</p>
        <NavLink to="/" className="home_link">Home</NavLink>
    </div>
  )
}

export default PageNotFound
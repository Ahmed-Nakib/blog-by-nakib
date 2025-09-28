import { Link } from "react-router-dom"

const MainMenu = () => {
  return (
   <ul className="flex gap-2">
    <li>
      <Link to={"/"}>Home</Link>
    </li>
    <li>
      <Link to={"/"}>About</Link>
    </li>
    <li>
      <Link to={"/"}>Blogs</Link>
    </li>
    <li>
      <Link to={"/"}>Contact</Link>
    </li>
   </ul>
  )
}

export default MainMenu

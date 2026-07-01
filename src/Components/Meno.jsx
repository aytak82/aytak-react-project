import './Meno.css'
import MenoItem from './MenoItem'
import Logo from './Logo'

export default function Meno(){
    return(
    <nav className="navbar">
        <Logo/>
      <ul className="nav-links">
        <MenoItem/>
      </ul>

    </nav>
    )
}
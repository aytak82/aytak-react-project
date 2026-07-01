import './Meno.css'
import MenoItem from './MenoItem'
import Logo from './Logo'
import { SearchIcon } from './Icon'
export default function Meno(){
    return(
    <nav className="navbar">
        <Logo/>
      <ul className="nav-links">
        <MenoItem/>
      </ul>
      <div className="nav-actions">

      <button className="search-btn">

      <SearchIcon/>

      </button>

      </div>
    </nav>
    )
}
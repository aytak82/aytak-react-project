import img1 from '../Img/aytak-logo2.png'
import './Logo.css'
export default function Logo(){
    return(
        <div className="logo">

        <img
        src={img1}
        alt="Aytak Logo"
        />

        </div>
    )
}
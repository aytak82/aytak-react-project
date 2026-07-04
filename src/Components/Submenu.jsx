import './Meno.css'

export default function SubMenu({ submenu }) {

    return (

        <ul className="submenu">

            {submenu.map((item) => (

                <li key={item.id}>
                    <a href="#">{item.title}</a>
                </li>

            ))}

        </ul>

    );

}
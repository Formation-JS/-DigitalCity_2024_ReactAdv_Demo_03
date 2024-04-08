import { Link, NavLink } from "react-router-dom";
import style from './Header.module.css';

const Header = () => {

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' className={({isActive}) => isActive ? style.active : style.link}>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <Link to='/product' className={style.link}>
                            Produit
                        </Link>
                    </li>
                    <li>
                        <Link to='/about' className={style.link}>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
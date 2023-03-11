import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { FaShoppingCart, FaTimes, FaUserCircle } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [displayName, setDisplayName] = useState();
    const navigate = useNavigate();


    const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setDisplayName(user.displayName);
            } else {
                setDisplayName('');
            }
        });
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const hideMenu = () => {
        setShowMenu(false);
    };

    const logoutUser = () => {
        signOut(auth).then(() => {
            toast.success("Logout successfully.");
            navigate('/')
        }).catch((error) => {
            toast.error(error.message);
        });
    }

    const logo = (<div className={styles.logo}>
        <Link to='/'>
            <h2>e<span>Shop</span>.</h2>
        </Link>
    </div>);


    const cart = (<span className={styles.cart}>
        <Link to='/cart'>
            Cart <FaShoppingCart size={20} />
            <p>0</p>
        </Link>
    </span>);




    return (
        <header>
            <div className={styles.header}>
                {logo}
                <nav className={showMenu ? `${styles['show-nav']}` : `${styles['hide-nav']}`}>

                    <div className={showMenu ? `${styles['nav-wrapper']} ${styles['show-nav-wrapper']}` : `${styles['nav-wrapper']}`} onClick={hideMenu} >
                    </div>

                    <ul onClick={hideMenu}>
                        <li className={styles['logo-mobile']}>{logo}
                            <FaTimes size={22} color='#fff' onClick={hideMenu} />
                        </li>
                        <li><NavLink to='/' className={activeLink} >Home</NavLink></li>
                        <li><NavLink to='/contact' className={activeLink} >Contact Us</NavLink></li>
                    </ul>
                    <div onClick={hideMenu} className={styles['header-right']}>
                        <span className={styles.links}>
                            <NavLink to='/login' className={activeLink} >Login</NavLink>
                            <a href="#">
                                <FaUserCircle size={18} />
                                {displayName}
                            </a>
                            <NavLink to='/register' className={activeLink} >Register</NavLink>
                            <NavLink to='/order-history' className={activeLink} >My Orders</NavLink>
                            <NavLink to='/' onClick={logoutUser}>Logout</NavLink>
                        </span>
                        {cart}

                    </div>
                </nav>
                <div className={styles['menu-icon']}>
                    {cart}
                    <HiOutlineMenuAlt3 onClick={toggleMenu} size={28} />
                </div>
            </div>
        </header>
    )
}

export default Header;

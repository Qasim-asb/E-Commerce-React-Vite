import styles from './Header.module.css'
import { Link } from 'react-router'

const NavSecondary = () => {
  return (
    <nav className={styles.navSecondary}>
      <ul className={`${styles.navList} ${styles.container}`}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/shop'>Shop</Link></li>
        <li><Link to='/cart'>Cart</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default NavSecondary

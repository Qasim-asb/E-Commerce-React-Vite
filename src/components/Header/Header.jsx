import styles from './Header.module.css'
import NavPrimary from './NavPrimary'
import NavSecondary from './NavSecondary'

const Header = () => {
  return (
    <header className={styles.header}>
      <NavPrimary />
      <NavSecondary />
    </header>
  )
}

export default Header

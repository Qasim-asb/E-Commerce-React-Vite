import styles from './App.module.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router'
import Shop from './pages/Shop/Shop'
import Cart from './pages/Cart/Cart'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
        <main className={styles.container}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

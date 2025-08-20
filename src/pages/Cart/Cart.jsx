import styles from './Cart.module.css'
import CartCard from '../../components/CartCard/CartCard'
import { useSelector } from 'react-redux'
import ec from '../../assets/All.png'

const Cart = () => {
  const items = useSelector(state => state.cart)

  const totalPrice = items.reduce((a, b) => a + b.price, 0)

  return (
    <section className={styles.cart}>
      {items.length < 1 ?
        <div className={styles.emptyCart}>
          <img src={ec} alt="Empty Cart" />
          <span>Empty Cart</span>
        </div> :
        <>
          {items.map(item => (
            <CartCard key={item.id} image={item.image} name={item.name} price={item.price} id={item.id} />
          ))}
          <div className={styles.priceSection}>
            <span>Total Products : {items.length}</span>
            <span>Total Price : {totalPrice}</span>
          </div>
        </>
      }
    </section>
  )
}

export default Cart

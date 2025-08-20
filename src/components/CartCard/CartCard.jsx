import styles from './CartCard.module.css'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../../redux/cartSlice';

const CartCard = ({ image, name, price, id }) => {
  const dispatch = useDispatch()

  return (
    <div className={styles.cartCard}>
      <div className={styles.leftCard}>
        <img src={image} alt={name} />
        <div className={styles.name_price}>
          <span>{name}</span>
          <span>Rs {price}/-</span>
        </div>
      </div>

      <div className={styles.rightCard}>
        <button onClick={() => dispatch(RemoveItem(id))}>Remove <RiDeleteBin6Line /></button>
      </div>
    </div>
  )
}

export default CartCard

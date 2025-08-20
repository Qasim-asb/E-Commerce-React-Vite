import { useDispatch } from 'react-redux'
import Button from '../Button/Button'
import styles from './Product.module.css'
import { AddItem } from '../../redux/cartSlice'

const Product = ({ name, image, price, id }) => {
  const dispatch = useDispatch()

  return (
    <div className={styles.product}>
      <img src={image} alt={name} />
      <div className={styles.productDetails}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>Rs {price}/-</span>
        <Button onClick={() => dispatch(AddItem({ name: name, image: image, price: price, id: id }))}>Add to Cart</Button>
      </div>
    </div>
  )
}

export default Product

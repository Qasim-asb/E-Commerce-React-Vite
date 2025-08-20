import React, { useState } from 'react'
import styles from './Shop.module.css'
import { category } from '../../category'
import Product from '../../components/Product/Product'
import { dummydata } from '../../dummyData'
import { FaShopify } from 'react-icons/fa'
import CategorySelector from '../../components/CategorySelector/CategorySelector'

const Shop = () => {
  const [cate, setCate] = useState(dummydata)

  function filterProducts(name) {
    if (name === 'All') {
      setCate(dummydata)
      return
    }

    const updateData = dummydata.filter(item => item.category === name)
    setCate(updateData)
  }

  return (
    <section className={styles.shop}>
      <CategorySelector categories={category} onSelectCategory={filterProducts} />

      <div className={styles.heading}>
        <h2>Shop</h2>
        <FaShopify />
      </div>

      <div className={styles.productSection}>
        {cate.map(item => (
          <Product key={item.id} name={item.name} image={item.image} price={item.price} id={item.id} />
        ))}
      </div>
    </section>
  )
}

export default Shop

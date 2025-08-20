import React, { useState } from 'react'
import styles from './Home.module.css'
import bg from '../../assets/bg0.gif'
import { category } from '../../category'
import { dummydata } from '../../dummyData'
import Product from '../../components/Product/Product'
import CategorySelector from '../../components/CategorySelector/CategorySelector'

function Home() {
  const [cate, setCate] = useState(dummydata)

  function filterProducts(name) {
    const updateData = dummydata.filter(item => item.category === name)
    setCate(updateData)
  }

  return (
    <section className={styles.home}>
      <div className={styles.heroBg}>
        <img src={bg} alt="Shopping background" />
      </div>

      <CategorySelector categories={category.slice(0, 5)} onSelectCategory={filterProducts} />

      <h2>Trending Products</h2>
      <div className={styles.productSection}>
        {cate.slice(0, 7).map(item => (
          <Product key={item.id} name={item.name} image={item.image} price={item.price} id={item.id} />
        ))}
      </div>
    </section>
  )
}

export default Home

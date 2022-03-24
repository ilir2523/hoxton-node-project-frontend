import Product from "../components/Product"
import '../styles/product.css'
import { useEffect } from "react"

function Products({ products, setProducts }) {

    useEffect(() => {
        fetch('http://localhost:4001/items')
          .then(resp => resp.json())
          .then(productsFromServer => setProducts(productsFromServer))
      }, [])

    console.log(products)

    return (
        <section className="products-container__main-wrapper">
            <div className="div_home__image">
                <img className="home__image" src="../../assets/ImageBanner.jpg" alt="" />
            </div>
            <ul className="products-container__list">
                {products.map(product =>
                    // @ts-ignore
                    <Product product={product} key={product.id} />
                )}
            </ul>
        </section>
    )
}

export default Products
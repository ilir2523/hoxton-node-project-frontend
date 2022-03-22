import Product from "../components/Product"
import '../styles/product.css'


function Products({ products }) {


    console.log(products)

    return (
        <section className="products-container__main-wrapper">
            <div className="div_home__image">
                <img className="home__image" src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" alt="" />
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
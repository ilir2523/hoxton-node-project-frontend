import Product from "../components/Product"
import "../styles/categories.css"

function Categories({ products, filterProductsByCategory }) {

    return (

        <section className="categories-container main-wrapper">
            <section className="filter_section">
                <ul className="filter_list">
                    <li onClick={() => filterProductsByCategory('')}>All Products</li>
                    <li onClick={() => filterProductsByCategory('Tech')}>Tech</li>
                    <li onClick={() => filterProductsByCategory('House Hold')}>House Hold</li>
                    <li onClick={() => filterProductsByCategory('Clothes')}>Clothes</li>
                    <li onClick={() => filterProductsByCategory('Games')}>Games</li>
                </ul>
            </section>

            <section className="products-container main-wrapper">
                <ul className="products-container__list">
                    {products.map(product =>
                        // @ts-ignore
                        <Product product={product} key={product.id} />
                    )}
                </ul>
            </section>
        </section>

    )
}

export default Categories
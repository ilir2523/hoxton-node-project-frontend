import Product from "../components/Product"
import "../styles/categories.css"

function Categories({ products }) {
    console.log(products)

    return (

        <section className="categories-container main-wrapper">
            <section className="filter_section">
                <ul className="filter_list">
                    <li>All Products</li>
                    <li>Tech</li>
                    <li>House Hold</li>
                    <li>Clothes</li>
                </ul>
            </section>
            {/* <section className="categories-container__list">
                 <ul>
                {categories.map(category =>
                    <Category category={category} key={category.id} />
                )}
                  </ul> 
            </section> */}

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
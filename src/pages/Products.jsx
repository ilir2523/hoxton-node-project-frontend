import Product from "../components/Product"
import '../styles/product.css'


function Products({ products }) {


    console.log(products)

    return (
        <section className="products-container main-wrapper">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
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
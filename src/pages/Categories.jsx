import { useEffect, useState } from "react"
// import Category from "../components/Category"
import "../styles/categories.css"

function Categories() {
    // const [categories, setCategories] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:3000/categories')
    //         .then(resp => resp.json())
    //         .then(categoriesFromServer => setCategories(categoriesFromServer))
    // }, [])

    return (

        <section className="categories-container main-wrapper">
            <section className="filter_section">
                <ul className="filter_list">
                    <ul>All Products</ul>
                    <ul>Tech</ul>
                    <ul>House Hold</ul>
                    <ul>Clothes</ul>
                </ul>
            </section>
            <section className="categories-container__list">
                {/* <ul>
                {categories.map(category =>
                    <Category category={category} key={category.id} />
                )}
                  </ul> */}
            </section>

        </section>
    )
}

export default Categories
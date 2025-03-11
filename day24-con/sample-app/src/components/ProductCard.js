// import "./ProductCard.css"
// function ProductCard({title, price, image}) {
//     return (
//         <div className = "product-card">
//             <img src = {image} alt= {title} className = "product-image"/>
//             <h2 className = "product-title">{title}</h2>
//             <p className = "product-price">${price}</p>
//             <button className = "add-to-cart">Add To cart</button>
//         </div>
//     )
// }

// export default ProductCard


import "./ProductCard.css"
function ProductCard({title, price, image}) {
    return (
        <div className = "product-card">
            <img src = {image} alt= {title} className = "product-image"/>
            <h2 className = "product-title">{title}</h2>
            <p className = "product-price">${price}</p>
            <button className = "add-to-cart">Add To cart</button>
        </div>
    )
}

export default ProductCard



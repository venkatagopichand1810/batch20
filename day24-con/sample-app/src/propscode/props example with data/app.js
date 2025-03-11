import ProductCard from "./components/ProductCard"
import products from "./data/Products.json";

function App() {
    return (
        <div style = {{display: "flex", justifyContent: "center", marginTop: '20px'}}>
            { products.map((product) => (
                <ProductCard
                    title = {product.title}
                    price = {product.price}
                    image = {product.image}
            />
            ))

            }
        </div>
    )

}

export default App
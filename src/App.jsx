import { useState } from "react"
import res from "../data/products.json"
import Product from './Product';

function App() {
    const [data, setData] = useState(res.products)
    const [error, setError] = useState(false)
    /*
    *   @param {event} e
    */
    const handleChange = (e) => {
        if (e.target.value == "") {
            setError(false)
            setData(res.products)
            return
        }
        let products = data.filter((p) => p.title.includes(e.target.value))
        if (products.length == 0) {
            setData([])
            setError(true)
        } else {
            setData([...products])
            setError(false)
        }
    }
    return (
        <>
            <div className="container">
                <input type="text" name="id" placeholder="Search"
                    className="search"
                    onChange={handleChange}
                />
                {error && <div className="warning">No product found</div>}
            </div>
            <div className='cards-container'>
                {
                    data.map((item) => <Product data={item} />)
                }
            </div>
        </>
    )
}

export default App

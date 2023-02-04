import { useState } from "react"
import fetchedData from "./data"
import Product from './Product';

function App() {
    const [data, setData] = useState(fetchedData.products)
    const [error, setError] = useState(false)
    /*
    *   @param {event} e
    */
    const handleChange = (e) => {
        setError(false)
        if (e.target.value == "") {
            setData(fetchedData.products)
            return
        }
        let products = data.filter((p) => p.title.includes(e.target.value))
        if (products.length == 0) {
            setData([])
            setError(true)
            return
        }
        setData([...products])
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

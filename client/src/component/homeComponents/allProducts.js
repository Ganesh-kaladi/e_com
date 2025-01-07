import { useEffect, useState } from "react"
import axios from 'axios'
import { Cartbtn } from "./cartBtn"
export const Allproductscomponent = () => {
    const [productData, setProductData] = useState()
    useEffect(() => {
        const GetAllProduct = async () => {
            try {
                const allP = await axios.get('http://localhost:6006/product/all-product')
                setProductData(allP.data)
            }
            catch (err) {
                console.log('getAllProducts err', err)
            }
        }
        GetAllProduct()
    }, [])

    return (
        <section className="mt-5">
            <div className="container-fluid">
                <div className="row g-4">
                    {
                        productData?.length > 0 && productData.map((p) => {
                            return (
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="border mx-auto pt-2 px-2" style={{ width: "95%" }}>
                                        <h4 className="mb-2">{p.title}</h4>
                                        <div className="container-fluid mb-2">
                                            <figure>
                                                <div className="text-center" >
                                                    <img src={p.photo[0].url} className="text-center" alt="..." style={{ width: "95%", height: "300px" }} />
                                                </div>
                                                <figcaption className="text-center">
                                                    <small className="mb-2 lh-1">{p.description}</small>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="container border-bottom">
                                            <span className="mb-2 fw-bolder">Price: ₹ {p.price}/-</span>
                                            <span className="mb-2 fw-medium ms-5 me-auto">Rating: {p.rating}</span>
                                        </div>
                                        <Cartbtn p={p} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
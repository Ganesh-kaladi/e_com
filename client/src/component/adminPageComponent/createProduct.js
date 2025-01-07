import axios from "axios"
import { useState } from "react"

export const Createproduct = () => {
    const [formDataProduct, setFormDataProduct] = useState({
        title: '', description: '', price: '', more_about: '', category: '', rating: ''
    })
    const [photo, setPhot] = useState()
    const handleFormData = (e) => {
        setFormDataProduct({
            ...formDataProduct,
            [e.target.name]: e.target.value
        })
    }
    const handleFile = (e) => {
        setPhot(e.target.files[0])
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        createProduct()
    }
    const createProduct = async () => {
        const formData = new FormData()
        formData.append("title", formDataProduct.title);
        formData.append("description", formDataProduct.description);
        formData.append("price", formDataProduct.price);
        formData.append("more_about", formDataProduct.more_about);
        formData.append("category", formDataProduct.category);
        formData.append("rating", formDataProduct.rating);
        formData.append("photo", photo);

        const Token = localStorage.getItem('token')
        console.log(formData)
        try {
            const result = await axios.post('http://localhost:6006/product/create', formData, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                    "Content-Type": "multipart/form-data",
                },
            })
            console.log(result.data)
            await alert(result.data.message)
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <main>
            <section className="mx-3">
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-4 offset-md-4 mb-4">
                                <label className="form-label mb-1" htmlFor="title">Title</label>
                                <input type="text" className="form-control mb-1" required name="title" id="title"
                                    onChange={handleFormData} />
                            </div>
                            <div className="col-md-4 offset-md-4 mb-4">
                                <label className="form-label mb-1" htmlFor="description">description</label>
                                <input type="text" className="form-control mb-1" required name="description" id="description"
                                    onChange={handleFormData} />
                            </div>
                            <div className="col-md-4 offset-md-4 mb-4">
                                <label className="form-label mb-1" htmlFor="price">price</label>
                                <input type="text" className="form-control mb-1" required name="price" id="price"
                                    onChange={handleFormData} />
                            </div>
                            <div className="col-md-4 offset-md-4 mb-4">
                                <label className="form-label mb-1" htmlFor="photo">photo</label>
                                <input type="file" className="form-control mb-1" required name="photo" id="photo"
                                    onChange={handleFile} />
                            </div>
                            <div className="col-md-4 offset-md-4 mb-4">
                                <label className="form-label mb-1" htmlFor="more_about">more_about</label>
                                <input type="text" className="form-control mb-1" required name="more_about" id="more_about"
                                    onChange={handleFormData} />
                            </div>
                            <div className="col-md-4 offset-md-4 mb-4">
                                <label className="form-label mb-1" htmlFor="category">category</label>
                                <input type="text" className="form-control mb-1" required name="category" id="category"
                                    onChange={handleFormData} />
                            </div>
                            <div className="col-md-4 offset-md-4 mb-4">
                                <label className="form-label mb-1" htmlFor="rating">rating</label>
                                <input type="text" className="form-control mb-1" required name="rating" id="rating"
                                    onChange={handleFormData} />
                            </div>
                            <div className="col-md-4 offset-md-4 mb-4">
                                <button>Create Product</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}
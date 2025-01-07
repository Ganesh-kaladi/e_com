import { NavLink } from "react-router-dom"

export const Footercomponent = () => {
    return (
        <footer className="bg-dark py-5" data-bs-theme="dark">
            <div className="container">
                <div className="row ">
                    <div className="col-md-3">
                        <div className="container text-center">
                            <h4 className="mb-2 text-primary">About Us</h4>
                            <p className="text-white">We are dedicated to providing the best products and services to our customers. Shop with confidence and enjoy exclusive deals.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="container text-center">
                            <h4 className="mb-2 text-primary">Customer Service</h4>
                            <div className="d-flex flex-column align-items-center ">
                                <NavLink to='/contact' className='mb-2 text-decoration-none text-white' >
                                    <span>Contact Us</span>
                                </NavLink>
                                <NavLink to='/contact' className='mb-2 text-decoration-none text-white' >
                                    <span>FAQ</span>
                                </NavLink>
                                <NavLink to='/contact' className='mb-2 text-decoration-none text-white'>
                                    <span>Shipping & Returns</span>
                                </NavLink>
                                <NavLink to='/contact' className='mb-2 text-decoration-none text-white' >
                                    <span >Privacy Policy</span>
                                </NavLink>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="container text-center">
                            <h4 className="mb-2 text-primary">Quick Links</h4>
                            <div className="d-flex flex-column align-items-center">
                                <NavLink to='/contact' className='mb-2 text-decoration-none text-white' >
                                    <span>Home</span>
                                </NavLink>
                                <NavLink to='/contact' className='mb-2 text-decoration-none text-white' >
                                    <span>Shop</span>
                                </NavLink>
                                <NavLink to='/contact' className='mb-2 text-decoration-none text-white'>
                                    <span>Offers</span>
                                </NavLink>
                                <NavLink to='/contact' className='mb-2 text-decoration-none text-white' >
                                    <span >Blog</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <h4 className="mb-4 text-primary">Follow Us</h4>
                        <div className="d-flex justify-content-center">
                            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="mx-1 text-white" >
                                <i className="fab fa-facebook fs-1"></i>
                            </a>
                            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="mx-1 text-white">
                                <i className="fab fa-twitter fs-1"></i>
                            </a>
                            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="mx-1 text-white">
                                <i className="fab fa-youtube fs-1"></i>
                            </a>
                            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="mx-1 text-white">
                                <i className="fab fa-instagram fs-1"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* form */}
                {/* <div className="row mb-6">
                    <div className="col-md-6 offset-md-3 text-center">
                        <h4 className="mb-4 text-primary">Contact Us</h4>
                        <p className="mb-2 text-white">Email: support@example.com</p>
                        <p className="mb-2 text-white">Phone: 1234512345</p>
                        <div>
                            <form>
                                <div className="row">
                                    <div className="col-md-4 mb-2">
                                        <lable htmlFor='name' className='form-label text-white'>Name :</lable>
                                    </div>
                                    <div className="col-md-8 mb-2">
                                        <input type="text" className="form-control" id="name" name="name" />
                                    </div>
                                    <div className="col-md-4 mb-2">
                                        <lable htmlFor='email' className='form-label text-white'>Email :</lable>
                                    </div>
                                    <div className="col-md-8 mb-2">
                                        <input type="email" className="form-control" id="email" name="email" />
                                    </div>
                                    <div className="col-md-4 offset-md-4 mb-2">
                                        <button className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> */}
            </div >
        </footer >
    )
}
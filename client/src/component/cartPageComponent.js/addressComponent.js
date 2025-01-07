export const Addresscomponent = () => {
    return (
        <section>
            <div className="container bg-light rounde-1">
                <h4 className="text-center">Shipping Address</h4>
                <form>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <label className="form-label mb-2">Name :</label>
                            <input type='text' className='form-control mb-2' name='username' placeholder='name' required />
                        </div>
                        <div className="col-md-6 mb-4">
                            <label className="form-label mb-2">Name :</label>
                            <input type='text' className='form-control mb-2' name='address' placeholder='address' required />
                        </div>
                        <div className="col-md-6 mb-4">
                            <label className="form-label mb-2">Name :</label>
                            <input type='text' className='form-control mb-2' name='city' placeholder='city' required />
                        </div>
                        <div className="col-md-6 mb-4">
                            <label className="form-label mb-2">Name :</label>
                            <input type='text' className='form-control mb-2' name='state' placeholder='state' required />
                        </div>
                        <div className="col-md-6 mb-4">
                            <label className="form-label mb-2">Name :</label>
                            <input type='tel' className='form-control mb-2' name='pinCode' placeholder='pinCode' required />
                        </div>
                        <div className="col-md-6 mb-4">
                            <label className="form-label mb-2">Name :</label>
                            <input type='tel' className='form-control mb-2' name='mobile' placeholder='Mobile Number' required />
                        </div>
                        <div className="col-md-6 mb-4">
                            <button className="btn btn-primary mb-2">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
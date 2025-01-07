import pg_1 from '../../assets/adin/pg-1.jpg'
export const Admindashboard = () => {
    return (
        <main>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div id="image-container">
                                <div className='text-center'>
                                    <i class="fas fa-shopping-cart fa-2x"></i>
                                    <span className='ms-2 h1 text-secondary' >products</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="image-container">
                                <img src={pg_1} alt='...' style={{ height: '180px', width: '300px' }} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="image-container">
                                <img src={pg_1} alt='...' style={{ height: '180px', width: '300px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
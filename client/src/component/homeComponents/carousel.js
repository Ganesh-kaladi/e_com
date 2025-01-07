import caro_1 from '../../assets/carousel/caro-1.jpg';
import caro_2 from '../../assets/carousel/caro-2.jpg';
import caro_3 from '../../assets/carousel/caro-3.jpg';
export const Carousel = () => {
    return (
        <section className="pt-5">
            <div className="container-fluid ">
                <div id="carouselExample"  className="carousel slide ">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={caro_1} class="d-block w-100 " style={{ height: '400px', objectFit: 'cover' }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={caro_2} class="d-block w-100" style={{ height: '400px', objectFit: 'cover' }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={caro_3} class="d-block w-100" style={{ height: '400px', objectFit: 'cover' }} alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
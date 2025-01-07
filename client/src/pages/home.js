import { Allproductscomponent } from '../component/homeComponents/allProducts'
import { Carousel } from '../component/homeComponents/carousel'
import { Paginationcomponent } from '../component/homeComponents/pagination'

export const Homepage = ()=>{
    return(
        <section>
            <Carousel />
            <Allproductscomponent />
            <Paginationcomponent />
        </section>
    )
}
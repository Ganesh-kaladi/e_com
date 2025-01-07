import axios from 'axios'

export const GetAllProduct = async ()=>{
    try{
        const allP = await axios.get('http://localhost:6006/product/all-product')
        return allP
    }
    catch(err){
        console.log('getAllProducts err',err)
    }
}
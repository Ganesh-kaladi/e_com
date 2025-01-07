import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState,useEffect } from "react"
import { useUser } from '../context/userContext'
export const Logincomponent = () => {

    const {isLoggedIn,setIsLoggedIn} = useUser()

    const navigate = useNavigate()
    const [is, setIs] = useState(false)
    const [formData, setFormData] = useState({
        email:'',
        password:'',
    })

    useEffect(()=>{
        if(localStorage.getItem('token')){
            return setIsLoggedIn(true)
        }
    },[is, setIsLoggedIn])

    useEffect(()=>{
        if(isLoggedIn){
            navigate('/')
        }
    },[isLoggedIn,navigate])
    const handleInputChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
    }
    const handleLoginSubmit = async (e)=>{
        e.preventDefault()
        await handleLogin()
    }
    const handleLogin = async ()=>{
           await axios.post('http://localhost:6006/user/login',formData).then(res=>{
            localStorage.setItem('token', res.data.accessToken)
            setIs(true)
           }).catch(err=>{
            console.log(err)
           })
    }
    return (
        <section className="pt-6  bg-light" style={{ height: '90vh' }}>
            <div className="container-fluid">
                <div className="">
                    <form onSubmit={handleLoginSubmit}>
                        <div className="container shadow  rounded pt-4 pb-2 px-3 bg-white" id="login-box">
                            <h4 className="mb-4 text-center">Login</h4>
                            <div className="mb-2">
                                <div className="mb-3">
                                    <label className="form-label mb-2" htmlFor="email">Email :</label>
                                    <input type="email" className="form-control mb-2" id="email" name="email" required 
                                    onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label mb-2" htmlFor="password">Password :</label>
                                    <input type="password" className="form-control mb-2" id="password" name="password" required
                                    onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </div>
                            <hr />
                            <div className="text-center mb-2">
                                <span style={{ color: 'red' }}>*</span><small>if user not registered, register now...</small>
                                <button className="btn btn-outline-secondary ms-2">register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";
export const Navcomponet = () => {
    const { isLoggedIn, setIsLoggedIn } = useUser()
    const navigate = useNavigate()
    const handleLoginPageClick = () => {
        navigate('/login')
    }
    //log out
    const handleLogOutPageClick = ()=>{
        setIsLoggedIn(false)
        localStorage.removeItem('token')
    }
    return (
        <nav className="navbar navbar-expand-lg bg-dark top-fixed" style={{ height: '80px' }} data-bs-theme="dark">
            <div className='container '>
                <NavLink to='/' className="navbar-brand text-white">
                    <h4>e-commerce</h4>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon" ></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item" >
                            <NavLink to='/' className="nav-link active">Home</NavLink>
                        </li>
                        <li className="nav-item" >
                            <NavLink to='/details' className="nav-link active">Details</NavLink>
                        </li>
                        <li className="nav-item" >
                            <NavLink to='/about' className="nav-link active">About</NavLink>
                        </li>
                        <li className="nav-item" >
                            <NavLink to='/cart' className="nav-link active">cart</NavLink>
                        </li>
                        { !isLoggedIn ?
                        (<li className="nav-item" >
                            <NavLink to='/login' className='nav-link'>
                                <i class="bi bi-box-arrow-in-right text-secondary" onClick={handleLoginPageClick}>login</i>
                            </NavLink>
                        </li>):
                        (<li className="nav-item" >
                            <NavLink to='/' className='nav-link'>
                                <i class="bi bi-box-arrow-in-right text-secondary" onClick={handleLogOutPageClick}>Log Out</i>
                            </NavLink>
                        </li>)}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
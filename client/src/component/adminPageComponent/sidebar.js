import userIcon from '../../assets/adin/user_icon.png'
import { NavLink } from 'react-router-dom'
export const Sidebarcomponent = () => {
    return (
        <aside className='border-end pe-4 mb-2' >
            <div className='container-fluid'>
                <div className='text-center border-bottom px-4'>
                    <img src={userIcon} alt='...' style={{ width: '50px', height: '50px' }} className='mb-2' />
                    <h4 className='h4' >admin name</h4>
                    <h5>admin email</h5>
                </div>
                <div className='text-center mt-4'>
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <NavLink class="nav-link " to='/dashboard'>
                                <button className='btn mb-4'>Dash Board</button>
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to='/admin/home'>
                                <button className='btn mb-4'>Home</button>
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to='/admin/all_product'>
                                <button className='btn mb-4'>All products</button>
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to='/admi/addproduct'>
                                <button className='btn mb-4'>Add Product</button>
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to='/admin/orders'>
                                <button className='btn mb-4'>Orders</button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}
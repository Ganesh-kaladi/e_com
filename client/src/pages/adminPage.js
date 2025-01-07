import { Admindashboard } from "../component/adminPageComponent/adminDashboard"
import { Sidebarcomponent } from "../component/adminPageComponent/sidebar"

export const AdminPage = () => {
    return (
        <div style={{ height: '90vh' }} className="row mt-4">
            <div className='col-md-2'>
                <Sidebarcomponent />
            </div>
            <div className='col-md-10'>
                <Admindashboard />
            </div>
        </div>
    )
}
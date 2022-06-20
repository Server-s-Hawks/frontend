import React from 'react'
import StickyHeadTable from './table';
import Button from '@mui/material/Button';
//import Sidebar from '../../components/sidebar/sidebar';

const navigateToCreateUser = (e) => {
    window.location = '/profile/addUser'
} 

function AdminDashboard() {
    return (
        <div>
            <div class="container-fluid">
                <div className='row'>
                    
                    <div className='col m-3'>
                        <h4 className="topic">
                            <b>All Users</b>
                        </h4>
                        <Button className='float-end me-3' variant="contained" color="success" onClick={e => navigateToCreateUser(e)}> Create New User </Button><br /><br />
                        <StickyHeadTable />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
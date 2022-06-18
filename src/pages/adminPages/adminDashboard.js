import React, { useEffect, useState } from 'react'
import StickyHeadTable from '../../components/table/table'
import Button from '@mui/material/Button';
import Sidebar from '../../components/sidebar/sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    //go to create form
    const navigateToCreateUser = (e) => {
        navigate("/admin/create", {
            state: {
                user_ID: data.length + 1,
            },
        });
    }

    //get data from database
    useEffect(() => {
        async function fetchData() {
            await axios
                .get("/user/")
                .then((response) => {
                    console.log("data", response.data.data);
                    setData(response.data.data);
                })
                .catch((error) => {
                    console.log(error.message);
                    alert(error.message);
                });
        }
        fetchData();

    }, [])

    return (
        <div>
            <div className="container-fluid">
                <div className='row'>
                    <Sidebar />
                    <div className='col m-3'>
                        <h4 className="topic">
                            <b>All Users</b>
                        </h4>
                        <Button className='float-end me-3' variant="contained" color="success" onClick={e => navigateToCreateUser(e)}> Create New User </Button><br /><br />
                        <StickyHeadTable data={data}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdminDashboard

import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className="d-flex flex-column pt-4 bg-dark text-light min-vh-100" style={{ width: "270px" }}>
            {/* <img src="" alt="" width="32" height="32" className="rounded-circle me-2"> */}
            <span className="fs-4 ps-3">Name</span>
            <span className="fs-6 ps-3">Admin</span>
            <ul className="nav flex-column mt-5">
                <li className='py-3 ms-3'>
                    <Link to=""><span className="fs-6" style={{ color: "white", textDecoration: "none" }}>Dashboard</span></Link>
                </li>
                <li className='py-3 ms-3'>
                    <Link to=""><span className="fs-6" style={{ color: "white", textDecoration: "none" }}>Users</span></Link>
                </li>
                <li className='py-3 ms-3'>
                    <Link to=""><span className="fs-6" style={{ color: "white", textDecoration: "none" }}>Projects</span></Link>
                </li>
                <li className='py-3 ms-3'>
                    <Link to=""><span className="fs-6" style={{ color: "white", textDecoration: "none" }}>Teams</span></Link>
                </li>

            </ul>

        </div>
    )
}

export default Sidebar
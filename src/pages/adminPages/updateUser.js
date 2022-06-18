import React, { useState } from "react";
import "../../styles/styles.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { required, validateNic } from "../../validations/validation";
import Sidebar from "../../components/sidebar/sidebar";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function UpdateUser() {
    const location = useLocation();
    console.log("data1", location.state.data);
    //initiate initial states
    const [name, setName] = useState(location.state.data.name);
    const [houseNo, setHouseNo] = useState(location.state.data.address_no);
    const [street, setStreet] = useState(location.state.data.address_street);
    const [city, setCity] = useState(location.state.data.address_city);
    const [email, setEmail] = useState(location.state.data.email);
    const [dob, setDOB] = useState(location.state.data.dob.slice(0, 10));
    const [nic, setNIC] = useState(location.state.data.nic);

    const [isValid, setIsValid] = useState(false);
    const [dirty, setDirty] = useState([false, false, false, false, false, false, false]);


    //handle submit for form
    const handleSubmit = (evt) => {
        evt.preventDefault();
        let user = {
            name: name,
            address_no: houseNo,
            address_street: street,
            address_city: city,
            dob: dob,
            nic: nic,
        };
        console.log("DATA TO SEND", user);
        axios
            .patch("/user/" + location.state.data.user_ID, user)
            .then((response) => {

                alert(response.data.message);
                if (response.data.error === false)
                    window.location = '/admin/'
            })
            .catch((error) => {
                console.log(error.message);
                alert(error.message);
            });

    };

    return (
        <div class="container-fluid">
            <div className='row'>
                <Sidebar />
                <div className='col m-3'>
                    <div className="col-4">
                        <br />
                        <h4 className="topic">
                            <b>Update User</b>
                        </h4>
                        <br />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <div className="col-6">
                                <Box
                                    component="form"
                                    sx={{
                                        "& > :not(style)": { m: 1, width: "25ch" },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <label htmlFor="name" className="form-label sub-topic">
                                        Name
                                    </label>
                                    <TextField
                                        id="outlined-basic"
                                        label="Enter name"
                                        variant="outlined"
                                        value={name}
                                        onFocus={() => dirty[0] = true}
                                        error={dirty[0] && !required(name)}
                                        helperText={dirty[0] && !required(name) ? "This field is required." : ""}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Box>
                            </div>
                            <div className="col-6">
                                <Box
                                    component="form"
                                    sx={{
                                        "& > :not(style)": { m: 1, width: "25ch" },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <label htmlFor="email" className="form-label sub-topic">
                                        Email Address
                                    </label>
                                    <TextField
                                        id="outlined-basic"
                                        label="Enter email address"
                                        variant="outlined"
                                        value={email}
                                        helperText={"Email cannot be updated."}
                                        read-only
                                    />
                                </Box>
                            </div>
                        </div>
                        <h6>Address</h6>
                        <div className="row mb-3">
                            <div className="ms-4 col-2">
                                <Box
                                    sx={{
                                        "& > :not(style)": { m: 1, width: "20ch" },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <label htmlFor="houseNo" className="form-label sub-topic">
                                        House Number
                                    </label>
                                    <TextField
                                        label="Enter house number"
                                        variant="outlined"
                                        value={houseNo}
                                        error={dirty[2] && !required(houseNo)}
                                        onFocus={() => dirty[2] = true}
                                        helperText={dirty[2] && !required(houseNo) ? "This field is required." : ""}
                                        onChange={(e) => setHouseNo(e.target.value)}
                                    />
                                </Box>
                            </div>
                            <div className="col-4 ms-5">
                                <Box
                                    sx={{
                                        "& > :not(style)": { m: 1, width: "40ch" },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <label htmlFor="street" className="form-label sub-topic">
                                        Street
                                    </label>
                                    <TextField
                                        label="Enter street"
                                        variant="outlined"
                                        value={street}
                                        error={dirty[3] && !required(street)}
                                        onFocus={() => dirty[3] = true}
                                        helperText={dirty[3] && !required(street) ? "This field is required." : ""}
                                        onChange={(e) => setStreet(e.target.value)}
                                    />
                                </Box>
                            </div>
                            <div className="col-3">
                                <Box
                                    sx={{
                                        "& > :not(style)": { m: 1, width: "40ch" },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <label htmlFor="city" className="form-label sub-topic">
                                        City
                                    </label>
                                    <TextField
                                        label="Enter city"
                                        variant="outlined"
                                        value={city}
                                        error={dirty[4] && !required(city)}
                                        onFocus={() => dirty[4] = true}
                                        helperText={dirty[4] && !required(city) ? "This field is required." : ""}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                </Box>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-6">
                                <Box
                                    component="form"
                                    sx={{
                                        "& > :not(style)": { m: 1, width: "25ch" },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <label htmlFor="dob" className="form-label sub-topic">
                                        Date of Birth
                                    </label>
                                    <TextField
                                        id="outlined-basic"
                                        label="Enter date of birth"
                                        variant="outlined"
                                        value={dob}
                                        type="date"
                                        onFocus={() => dirty[5] = true}
                                        error={dirty[5] && !required(dob)}
                                        helperText={dirty[5] && !required(dob) ? "This field is required." : ""}
                                        onChange={(e) => setDOB(e.target.value)}
                                    />
                                </Box>
                            </div>
                            <div className="col-6">
                                <Box
                                    component="form"
                                    sx={{
                                        "& > :not(style)": { m: 1, width: "25ch" },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <label htmlFor="nic" className="form-label sub-topic">
                                        NIC number
                                    </label>
                                    <TextField
                                        id="outlined-basic"
                                        label="Enter NIC number"
                                        variant="outlined"
                                        value={nic}
                                        error={(dirty[6] && !required(nic)) || (dirty[6] && !validateNic(nic))}
                                        onFocus={() => dirty[6] = true}
                                        helperText={dirty[6] && !required(nic) ? "This field is required." : dirty[6] && !validateNic(nic) ? "NIC should contain 10 digits" : ""}
                                        onChange={(e) => setNIC(e.target.value)}
                                    />
                                </Box>
                            </div>
                        </div>

                        <div>
                            <Button
                                variant="contained"
                                type="submit"
                                color="warning"
                            >
                                Update User
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
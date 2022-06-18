import React, { useState } from "react";
import "../../styles/styles.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { validateEmail, required, passwordMatch, validateNic } from "../../validations/validation";
import Sidebar from "../../components/sidebar/sidebar";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function AddNewUser() {
    //initiate initial states
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [houseNo, setHouseNo] = useState("");
    const [street, setStreet] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDOB] = useState("");
    const [nic, setNIC] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [isValid, setIsValid] = useState(false);
    const [dirty, setDirty] = useState([false, false, false, false, false, false, false, false, false]);
    const location = useLocation();

    //handle email value change
    const handleEmailChange = (event) => {
        const val = event.target.value;
        const isEmail = validateEmail(val);
        setIsValid(isEmail);

        setEmail(val);
    };


    //handle submit for form
    const handleSubmit = (evt) => {
        evt.preventDefault();
        let user = {
            user_ID: location.state.user_ID,
            name: name,
            address_no: houseNo,
            address_street: street,
            address_city: city,
            dob: dob,
            nic: nic,
            email: email,
            password: password,
        };
        if (confirmPassword.localeCompare(password)) {
            console.log("Mismatch");
            alert("Passwords don't match.");
        } else {
            console.log("DATA TO SEND", user);
            axios
                .post("/user/create", user)
                .then((response) => {
                    alert(response.data.message);
                    if (response.data.error === false)
                        window.location = '/admin/'
                })
                .catch((error) => {
                    console.log(error.message);
                    alert(error.message);
                });
        }

    };

    return (
        <div className="container-fluid">
            <div className='row'>
                <Sidebar />
                <div className='col m-3'>
                    <div className="col-4">
                        <br />
                        <h4 className="topic">
                            <b>Add New User</b>
                        </h4>
                        <br />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <div className="col-6">
                                <Box
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
                                        label="Enter email address"
                                        variant="outlined"
                                        value={email}
                                        onChange={(e) => handleEmailChange(e)}
                                        error={dirty[1] && (!required(email) || isValid === false)}
                                        onFocus={() => dirty[1] = true}
                                        helperText={dirty[1] && !required(email) ? "This field is required." : dirty[1] && !isValid ? "Enter valid email" : ""}
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
                                        label="Enter NIC number"
                                        variant="outlined"
                                        value={nic}
                                        error={dirty[6] && !required(nic) || dirty[6] && !validateNic(nic)}
                                        onFocus={() => dirty[6] = true}

                                        helperText={dirty[6] && !required(nic) ? "This field is required." : dirty[6] && !validateNic(nic) ? "NIC should contain 10 digits" : ""}
                                        onChange={(e) => setNIC(e.target.value)}
                                    />
                                </Box>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-6">
                                <Box
                                    sx={{
                                        "& > :not(style)": { m: 1, width: "25ch" },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <label htmlFor="password" className="form-label sub-topic">
                                        Password
                                    </label>
                                    <TextField
                                        label="Enter password"
                                        variant="outlined"
                                        type="password"
                                        value={password}
                                        error={dirty[7] && !required(password)}
                                        onFocus={() => dirty[7] = true}
                                        helperText={dirty[7] && !required(password) ? "This field is required." : ""}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Box>
                            </div>
                            <div className="col-6">
                                <Box
                                    sx={{
                                        "& > :not(style)": { m: 1, width: "25ch" },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <label htmlFor="confirmPassword" className="form-label sub-topic">
                                        Confirm Password
                                    </label>
                                    <TextField
                                        label="Re-enter password"
                                        variant="outlined"
                                        type="password"
                                        value={confirmPassword}
                                        error={dirty[8] && !passwordMatch(password, confirmPassword)}
                                        onFocus={() => dirty[8] = true}
                                        helperText={dirty[8] && !passwordMatch(password, confirmPassword) ? "Confirm password should match given password." : ""}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </Box>
                            </div>
                        </div>
                        <div>
                            <Button
                                variant="contained"
                                type="submit"
                                color="success"
                            >
                                Add User
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
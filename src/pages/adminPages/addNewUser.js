import React, { useState } from "react";
import "../../styles/styles.css";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { validateEmail, required, passwordMatch } from "../../validations/validation";
import Sidebar from "../../components/sidebar/sidebar";
import axios from "axios";

export default function AddNewUser() {
    //initiate initial states
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDOB] = useState("");
    const [nic, setNIC] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [isValid, setIsValid] = useState(false);
    const [dirty, setDirty] = useState([false, false, false, false, false, false, false, false]);

    const handleEmailChange = (event) => {
        const val = event.target.value;
        const isEmail = validateEmail(val);
        setIsValid(isEmail);

        setEmail(val);
    };


    //handle submit
    const handleSubmit = (evt) => {
        evt.preventDefault();
        let user = {
            name: name,
            address: address,
            dob: dob,
            nic: nic,
            email: email,
            mobileNumber: mobileNumber,
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
                    alert("User Data successfully inserted");
                    setName("");
                    setAddress("");
                    setEmail("");
                    setDOB("");
                    setNIC("");
                    setMobileNumber("");
                    setPassword("");
                    setConfirmPassword("");
                })
                .catch((error) => {
                    console.log(error.message);
                    alert(error.message);
                });
        }
        // window.location = '/admin/'
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
                                    <label htmlFor="address" className="form-label sub-topic">
                                        Address
                                    </label>
                                    <TextField
                                        label="Enter address"
                                        variant="outlined"
                                        value={address}
                                        error={dirty[1] && !required(address)}
                                        onFocus={() => dirty[1] = true}
                                        helperText={dirty[1] && !required(address) ? "This field is required." : ""}
                                        onChange={(e) => setAddress(e.target.value)}
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
                                    <label htmlFor="email" className="form-label sub-topic">
                                        Email Address
                                    </label>
                                    <TextField
                                        label="Enter email address"
                                        variant="outlined"
                                        value={email}
                                        onChange={(e) => handleEmailChange(e)}
                                        error={dirty[2] && (!required(email) || isValid === false)}
                                        onFocus={() => dirty[2] = true}
                                        helperText={dirty[2] && !required(email) ? "This field is required." : dirty[2] && !isValid ? "Enter valid email" : ""}
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
                                    <label htmlFor="mobileNo" className="form-label sub-topic">
                                        Mobile Number
                                    </label>
                                    <TextField
                                        label="Enter mobile number"
                                        variant="outlined"
                                        value={mobileNumber}
                                        error={dirty[3] && !required(mobileNumber)}
                                        onFocus={() => dirty[3] = true}
                                        helperText={dirty[3] && !required(mobileNumber) ? "This field is required." : ""}
                                        onChange={(e) => setMobileNumber(e.target.value)}
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
                                        onFocus={() => dirty[4] = true}
                                        error={dirty[4] && !required(dob)}
                                        helperText={dirty[4] && !required(dob) ? "This field is required." : ""}
                                        onChange={(e) => setDOB(e.target.value)}
                                    />
                                    {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            variant="outlined"
                                            onFocus={() => dirty[4] = true}
                                            error={dirty[4] && !required(dob)}
                                            helperText={dirty[4] && !required(dob) ? "This field is required." : ""}
                                            label="Enter date of birth"
                                            value={dob}
                                            onChange={(newValue) => {
                                                setDOB(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider> */}
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
                                        error={dirty[5] && !required(nic)}
                                        onFocus={() => dirty[5] = true}
                                        helperText={dirty[5] && !required(nic) ? "This field is required." : ""}
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
                                        error={dirty[6] && !required(password)}
                                        onFocus={() => dirty[6] = true}
                                        helperText={dirty[6] && !required(password) ? "This field is required." : ""}
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
                                        error={dirty[7] && !passwordMatch(password, confirmPassword)}
                                        onFocus={() => dirty[7] = true}
                                        helperText={dirty[7] && !passwordMatch(password, confirmPassword) ? "Confirm password should match given password." : ""}
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
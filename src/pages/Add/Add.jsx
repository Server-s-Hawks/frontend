import  React,{useState} from "react";
import "./Add.css";
//import Axios from "axios";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
// import { Container } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


function Add (){

    const[user_ID, setUser_Id] = useState("");
    
    // const[salary,setSalary]=useState("");
    // const[deduction, setDeduction] = useState("");
    // const[allowances, setAllowances] = useState("");
   
    
    // const select = () =>{
        
    //      Axios.post('http://localhost:5000/client' ,
    //      {
            
    //          name:name,
    //          salary:salary,
    //          deduction:deduction,
    //          allowances:allowances,
           
             
    //         }).then(() => {
    //             console.log("success");
    //         });
    // };
        
        return(
        
        <div className="App"  >

            
                <h1>{user_ID}</h1>

                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Employee ID</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="user_id"
                    onChange={e=> setUser_Id(e.target.value)}
                    >
                    <MenuItem value="" >
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="U001">U001</MenuItem>
                    <MenuItem value="U002">U002</MenuItem>
                    <MenuItem value="U003">U003</MenuItem>
                    </Select>
                   
                </FormControl>

           
            <div>
                <h1>Basic Salary</h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="Basic" label="Basic Salary" variant="outlined" />
                
                </Box>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" color="success">ADD</Button>
                    
             </Stack>
            </div>

            <div>
                <h1>Allowances</h1>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
                        <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        //value={age}
                        label="Age"
                        //onChange={handleChange}
            >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Transport</MenuItem>
                        <MenuItem value={20}>Travel</MenuItem>
                        <MenuItem value={30}>Entertainment</MenuItem>
                        <MenuItem value={30}>Housing</MenuItem>
                        <MenuItem value={30}>Medical</MenuItem>
                        </Select>
                        
                    </FormControl>
               
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="Basic" label="Value" variant="outlined" />
                
                </Box>
                <div className="button" >
                 <Stack direction="row" spacing={0} >
                    <Button variant="contained" color="success">ADD</Button>
                    
                 </Stack>
                </div>
           
                
                        

            </div>

            <div>
                <h1>Deductions</h1>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
                        <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        //value={age}
                        label="Age"
                        //onChange={handleChange}
            >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Tax</MenuItem>
                        <MenuItem value={20}>Loans</MenuItem>
                        <MenuItem value={30}>Advance</MenuItem>
                        <MenuItem value={30}>EPF</MenuItem>
                        </Select>
                 
                    </FormControl>
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="Basic" label="Value" variant="outlined" />
                
                </Box>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" color="success">ADD</Button>
                    
             </Stack>
                
                

            </div>

            </div>
            
    )
}
 export default Add;
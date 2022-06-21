import  React,{useState} from "react";
import "./Add.css";
import Axios from "axios";
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
    const[allowances_type,setAllowance_type]=useState("");
    const[Basic, setBasic_salary] = useState("");
    const[deduction_type, setDeduction_type] = useState("");
    const[allowance_value, setAllowance] = useState("");
    const[deduction_value, setDeduction] = useState("");
    //const[isDisable, setisDisable] = useState("");
   


    
    const select = () =>{
        Axios.post('http://localhost:5000/client' ,
        {
        
            user_ID:user_ID,
             Basic:Basic,
           
           
             
             }).then(() => {
                console.log("success");
                alert("Successfully added");
             });

           

     
     };

     const update = () =>{
       
        
        
        Axios.post('http://localhost:5000/update' ,
        {
        
            update_user_ID:user_ID,
             update_Basic:Basic,
           
           
             
             }).then(() => {
                console.log("success");
                alert("Successfully updated");
             });
     };

     const allowance = () =>{
        
        
        if(allowances_type==="Transport"){
        Axios.post('http://localhost:5000/allowance' ,
        {
                  allowance_transport:allowance_value,
                  user_ID_allowances:user_ID,
             }).then(() => {
                console.log("success");
                alert("Successfully added ");
                
             });
            };
            if(allowances_type === "Travel"){
                Axios.post('http://localhost:5000/allowance' ,
                {
                          allowance_travel:allowance_value,
                          user_ID_allowances:user_ID,
                     }).then(() => {
                        console.log("success");
                        alert("Successfully added ");
                        
                     });
                    };
            if(allowances_type === "Entertainment"){
                    Axios.post('http://localhost:5000/allowance' ,
                        {
                                  allowance_entertainment:allowance_value,
                                  user_ID_allowances:user_ID,
                             }).then(() => {
                                console.log("success");
                                alert("Successfully added ");
                                
                             });
                            };

             if(allowances_type === "Housing"){
                    Axios.post('http://localhost:5000/allowance' ,
                         {
                            allowance_housing:allowance_value,
                            user_ID_allowances:user_ID,
                            }).then(() => {
                                console.log("success");
                                alert("Successfully added ");
                                            
                            });
                         };
                         
             if(allowances_type === "Medical"){
                     Axios.post('http://localhost:5000/allowance' ,
                        {
                            allowance_medical:allowance_value,
                            user_ID_allowances:user_ID,
                            }).then(() => {
                               console.log("success");
                               alert("Successfully added ");
                                                    
                            });
                         };                         


     };


     const deduction= () =>{

      
    
        if(deduction_type==="Tax"){
        Axios.post('http://localhost:5000/deduction' ,
        {
                  deduction_Tax:deduction_value,
                  user_ID_deduction:user_ID,
             }).then(() => {
                console.log("success");
                alert("Successfully added ");
                
             });
            };

        if(deduction_type==="Loans"){
            Axios.post('http://localhost:5000/deduction' ,
                {
                  deduction_Loans:deduction_value,
                  user_ID_deduction:user_ID,
             }).then(() => {
                console.log("success");
                alert("Successfully added ");
                        
             });
            };

        if(deduction_type==="Advance"){
            Axios.post('http://localhost:5000/deduction' ,
                 {
                  deduction_Advance:deduction_value,
                  user_ID_deduction:user_ID,
             }).then(() => {
                console.log("success");
                alert("Successfully added ");
                            
              });
            };

         if(deduction_type==="EPF"){
            Axios.post('http://localhost:5000/deduction' ,
                {
                 deduction_EPF:deduction_value,
                 user_ID_deduction:user_ID,
             }).then(() => {
                console.log("success");
                alert("Successfully added ");
                                
              });
             };
            

     };
        
        
        return(
        
            
        <div className="App"  >
            

            
                <div className="form">
                <FormControl sx={{ m: 1, minWidth: 500 }}>
                    <InputLabel id="demo-simple-select-helper-label">Employee ID</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="user_id"
                    onChange={e=> setUser_Id(e.target.value)  }
                    >
                    <MenuItem value="" >
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value=""></MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                    <MenuItem value="7">7</MenuItem>
                    <MenuItem value="8">8</MenuItem>
                    </Select>
              
                </FormControl>
                </div>
                <div className="button">
                
           </div>
            <div>
                <h1>Basic Salary</h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '60ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="Basic" label="Basic Salary" variant="outlined"  onChange={e=> setBasic_salary(e.target.value)}    />
                
                </Box>
                <div className="button">
                    
                    <Button variant="contained" color="success" onClick={select} >ADD</Button>
                    <Button variant="contained" color="success"  onClick={update} >Update</Button> 
                    
             </div>
            </div>

            <div>
                <h1>Allowances</h1>
                    <FormControl sx={{ m: 1, minWidth: '60ch'}}>
                    <InputLabel id="demo-simple-select-helper-label" >Type</InputLabel>
                        <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        //value={age}
                        label="Allowance" 
                        onChange={e=> setAllowance_type(e.target.value)}
            >
                        <MenuItem value="" >
                            <em>None</em>
                           
                        </MenuItem>
                        <MenuItem value="Transport">Transport</MenuItem>
                        <MenuItem value="Travel">Travel</MenuItem>
                        <MenuItem value="Entertainment">Entertainment</MenuItem>
                        <MenuItem value="Housing">Housing</MenuItem>
                        <MenuItem value="Medical">Medical</MenuItem>
                        </Select>
                        
                    </FormControl>
               
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '60ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="Basic" label="Value" variant="outlined"  onChange={e=> setAllowance(e.target.value)}  />
                
                </Box>
                <div className="button" >
                 <Stack direction="row" spacing={0} >
                    <Button variant="contained" color="success" onClick={allowance} >ADD</Button>
                 </Stack>
                </div>
           
                
                        

            </div>

            <div>
                <h1>Deductions</h1>
                    <FormControl sx={{ m: 1, minWidth: '60ch' }}>
                    <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
                        <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Type" 
                        onChange={e=> setDeduction_type(e.target.value)}
            >
                        <MenuItem value="" disabled>
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="Tax">Tax</MenuItem>
                        <MenuItem value="Loans">Loans</MenuItem>
                        <MenuItem value="Advance">Advance</MenuItem>
                        <MenuItem value="EPF">EPF</MenuItem>
                        </Select>
                 
                    </FormControl>
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '60ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="Basic" label="Value" variant="outlined"  onChange={e=> setDeduction(e.target.value)} />
                
                </Box>
            <div className="button">
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" color="success"  onClick={deduction}>ADD</Button>
                    
                </Stack>
             </div> 
                

            </div>

            </div>
            
    )
}
 export default Add;
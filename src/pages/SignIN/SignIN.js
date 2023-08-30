import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {

  // const [post, setPost] =useState("");
  
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // console.log({
  //   //   email: data.get('email'),
  //   //   password: data.get('password'),
  //   // });
  //   const memail=data.get('email');
  //   //console.log(memail);
  //   const loadData =async () => {
  //     const response =await axios.get(`http://localhost:5000/api/getpassword/${memail}`);
  //     setPost(response.data);
  //     console.log(post);
  //     console.log(memail);
       
  //   };
      
  //   loadData();
   

  // };

  const [uemail,setUemail]=useState('');
  const [upassword,setUpassword]=useState('');


  const [upassword1,setUpassword1]=useState('');


  function submitTodoItem() {
    if (uemail !== '' && upassword !==''){
      axios.post('http://localhost:5000/api/insert',{
        uemailitem:uemail,
        upassworditem:upassword
      }).then((response) =>{
        if(response.data.status===true){
          const password1=response.data.pword;
           
          alert(password1);
          setUpassword1(response.data.pword);
          console.log(upassword1);
          
          alert(password1);
          
        }
        
      })
        
    }
    
  }


  return (

    <diV>
      <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required={"true"}
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={(e)=> setUemail(e.target.value)}
            autoFocus
             
          />
  
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(e)=> setUpassword(e.target.value)}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            onClick={submitTodoItem}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  </ThemeProvider>

  <div>
    
    <h1>{uemail}</h1>
    <h2>{upassword}</h2>
    <h3>{upassword1}</h3>
  </div>
  </diV>
    


  );
}
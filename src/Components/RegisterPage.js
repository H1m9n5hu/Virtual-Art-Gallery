// import React from 'react';

// const RegisterPage = () => {
//     return (
//         <>
//             <h1>Register Page</h1>
//         </>
//     )
// }

// export default RegisterPage;

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    password: '',

  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const headers = {
    'Content-Type': 'application/json',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.warn(data);
      const response = await axios.post('http://192.168.68.24:8000/api/register', data,{headers});
      console.log(response.data);

      if (response.status === 'ok') {
        console.warn('data send');
      }
      setData({
        firstname: '',
        lastname: '',
        email: '',
        contact: '',
        password: '',
      });

      if (data.password) {
        toast.success('Registered Successfully');
        navigate('/login');
      }
    } catch (error) {
      console.log('Registration failed. Please try again.', error);
    }
  };


  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        {' '}
        {new Date().getFullYear()}
        {'.'}
        <p color="inherit" href="" sx={{ fontsize: '2rem' }}>
          Virtual Art Gallery
        </p>
      </Typography>
    );
  }


  const defaultTheme = createTheme();



  return (
    <>
      <ToastContainer />
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{height:'100vh'}}>
          <CssBaseline />
          <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={5} square >
          <Box
            sx={{
              my:8,
              mx:4,
              // marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width:'81%'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>

            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="firstname"
                    required
                    type='text'
                    fullWidth
                    id="firstname"
                    label="First Name"
                    autoFocus
                    value={data.firstname}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    type='text'
                    fullWidth
                    id="lastname"
                    label="Last Name"
                    name="lastname"
                    value={data.lastname}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type='email'
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={data.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                  value={data.password}
                  onChange={handleChange}
                  />
                </Grid>

              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
export default Register;
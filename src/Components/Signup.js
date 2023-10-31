
import React, { useState } from 'react';
import { Container, Paper, Grid, Typography, TextField, Button, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios'; // Import Axios

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('YOUR_SIGNUP_API_ENDPOINT', formData);

      if (response.status === 201) {
        // Successful sign-up, you can redirect or update the UI accordingly
        console.log('Sign-up successful');
      } else {
        // Handle sign-up failure, show an error message, etc.
        console.error('Sign-up failed');
      }
    } catch (error) {
      // Handle API request errors here
      console.error('API request error:', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3}>
        <Grid container justifyContent="center">
          <LockOutlinedIcon />
        </Grid>
        <Typography component="h1" variant="h5" align="center">
          Sign Up
        </Typography>
        <form onSubmit={handleSignUp}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="given-name"
            autoFocus
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign In
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Signup;

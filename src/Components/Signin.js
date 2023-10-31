
import React, { useState } from 'react';
import { Container, Paper, Grid, Typography, TextField, Button, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios'; // Import Axios

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('YOUR_SIGNIN_API_ENDPOINT', formData);

      if (response.status === 200) {
        // Successful sign-in, you can redirect or update the UI accordingly
        console.log('Sign-in successful');
      } else {
        // Handle sign-in failure, show an error message, etc.
        console.error('Sign-in failed');
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
          Sign In
        </Typography>
        <form onSubmit={handleSignIn}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
            autoComplete="current-password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default SignIn;

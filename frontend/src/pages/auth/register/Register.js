import { styled } from '@mui/system';
import React from 'react';
import Container from '@mui/material/Container';
import Logo from '@/components/Logo';
import { Box, Card, CardMedia, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import RegisterForm from '@/section/auth/register/RegisterForm';
import { axiosInstance as axios } from '@/utils/axios';
import { useSnackbar } from 'notistack';

const RootStyle = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
}));

const HeaderStyles = styled('header')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(7, 5, 0),
  zIndex: 100,
}));

const SectionStyles = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  margin: theme.spacing(2, 0, 2, 2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

const ContentStyles = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  paddingTop: theme.spacing(12),
  display: 'flex',
  alignItems: 'center',
  flex: 1,
}));
const Register = () => {
  const { enqueueSnackbar } = useSnackbar();
  const handleRegister = async (data) => {
    try {
      await axios.post('/api/auth/register', data);

      enqueueSnackbar('Register Success');
    } catch (error) {
      enqueueSnackbar(error.response.data.message, { variant: 'error' });
      return error.response;
    }
  };
  return (
    <RootStyle>
      <HeaderStyles>
        <Logo />
        <Typography variant="body2">
          Your already an account ?
          <Link component={RouterLink} variant="subtitle2" to="/auth/Login">
            Login
          </Link>
        </Typography>
      </HeaderStyles>
      <SectionStyles>
        <Typography variant="h2" sx={{ mt: 10, mb: 5, px: 5 }}>
          Welcome to my App
        </Typography>
        <CardMedia
          component="img"
          src="https://minimals.cc/assets/illustrations/illustration_login.png"
        />
      </SectionStyles>
      <ContentStyles>
        <Container maxWidth="xs">
          <Stack spacing={2} sx={{ mb: 4 }}>
            <Typography variant="h3">Sign up to App</Typography>
            <Typography
              variant="body1"
              sx={{ color: (theme) => theme.palette.grey[500] }}
            >
              Enter your details below.
            </Typography>
          </Stack>
          <RegisterForm handleRegister={handleRegister} />
        </Container>
      </ContentStyles>
    </RootStyle>
  );
};

export default Register;

import React, { useState } from 'react';
// Components
import RHFTextField from '@/components/hook-form/RHFTextField';
import Iconify from '@/components/Iconify';
import { RHFCheckbox } from '@/components/hook-form/RHFCheckbox';
// React Hook Form and YUP
import * as Yup from 'yup';
import { FormProvider } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// Material UI
import { Button, IconButton, InputAdornment, Link, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
// PropTypes
import PropTypes from 'prop-types';

const RegisterForm = ({ handleRegister }) => {
  const [showPassword, setShowPassword] = useState(false);
  const schema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string()
      .email('Must be a valid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });
  const defaultValues = {
    firstName: 'Hoai',
    lastName: 'Nhon',
    email: 'admin@example.com',
    password: 'admin',
    remember: true,
  };
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });
  const { handleSubmit } = methods;
  const onSubmit = async (data) => {
    await handleRegister(data);
  };
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <Stack spacing={2} direction="row" justifyContent="space-between">
              <RHFTextField name="lastName" label="Last name" />
              <RHFTextField name="firstName" label="First name" />
            </Stack>
            <RHFTextField
              name="email"
              label="Email address"
              autoComplete="none"
            />

            <RHFTextField
              name="password"
              label="Password"
              autoComplete="none"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      <Iconify
                        icon={
                          showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'
                        }
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <RHFCheckbox name="remember" label="Remember me" />
              <Link component={RouterLink} to="/" variant="subtitle2">
                Forgot Password
              </Link>
            </Stack>
            <Button variant="contained" type="submit" size="large">
              Register
            </Button>
          </Stack>
        </form>
      </FormProvider>
    </>
  );
};
RegisterForm.propTypes = {
  handleRegister: PropTypes.func.isRequired,
};

export default RegisterForm;

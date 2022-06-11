import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import RHFTextField from '@/components/hook-form/RHFTextField';
import { FormProvider } from 'react-hook-form';
import { Button, IconButton, InputAdornment, Link, Stack } from '@mui/material';
import Iconify from '@/components/Iconify';
import { RHFCheckbox } from '@/components/hook-form/RHFCheckbox';
import { Link as RouterLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const LoginForm = ({ handleLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Must be a valid email')
      .required('Email is required'),
    password: yup.string().required('Password is required'),
  });
  const defaultValues = {
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
    await handleLogin(data);
  };
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
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
              Login
            </Button>
          </Stack>
        </form>
      </FormProvider>
    </>
  );
};

LoginForm.prototypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import UpLoadAvatar from '../upload/UpLoadAvatar';

const RHFUpload = ({ name, ...other }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const checkError = error;
        return (
          <UpLoadAvatar
            error={checkError}
            accept="image/*"
            file={field.value}
            {...other}
          />
        );
      }}
    />
  );
};

export default RHFUpload;

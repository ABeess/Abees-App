import RHFUpload from '@/components/hook-form/RHFUpload';
import UpLoadAvatar from '@/components/upload/UpLoadAvatar';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import RHFTextField from '@/components/hook-form/RHFTextField';

const CreateSchema = Yup.object().shape({
  avatar: Yup.string().required('Avatar is required'),
});

const defaultValues = {
  avatar: null,
};

const UserCreate = () => {
  const methods = useForm({
    resolver: yupResolver(CreateSchema),
    defaultValues,
  });

  const { setValue, handleSubmit } = methods;

  const onSubmit = async (data) => {
    console.log('onSubmit ~ data', data);
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setValue(
          'avatar',
          Object.assign(file, { preview: URL.createObjectURL(file) })
        );
      }
    },
    [setValue]
  );
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <RHFUpload name="avatar" onDrop={onDrop} />
        </form>
      </FormProvider>
    </>
  );
};

export default UserCreate;

import { Avatar, Stack, styled, Typography } from '@mui/material';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Iconify from '../Iconify';

// -----------------------------------------
const DropZoneStyle = styled('div')({
  zIndex: 0,
  width: '100%',
  height: '100%',
  outline: 'none',
  display: 'flex',
  overflow: 'hidden',
  borderRadius: '50%',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  '& > *': { width: '100%', height: '100%' },
  '&:hover': {
    cursor: 'pointer',
    '& .placeholder': {
      zIndex: 9,
    },
  },
});

const PlaceholderStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.neutral,
  transition: theme.transitions.create('opacity', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': { opacity: 0.72 },
}));

const UpLoadAvatar = ({ file, onDrop, ...other }) => {
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDrop: onDrop,
    ...other,
  });

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        width: 144,
        height: 144,
        border: '1px dashed #e0e0e0',
        borderRadius: '100%',
      }}
    >
      <DropZoneStyle {...getRootProps()} sx={{ width: 126, height: 126 }}>
        <input {...getInputProps()} />
        <Avatar src={file ? file.preview : ''} sx={{ width: 1, height: 1 }} />
        <PlaceholderStyle
          className="placeholder"
          sx={{
            ...(file && {
              opacity: 0,
              color: 'common.white',
              bgcolor: 'grey.900',
              '&:hover': { opacity: 0.72 },
            }),
          }}
        >
          <Iconify
            icon={'ic:round-add-a-photo'}
            sx={{ width: 24, height: 24, mb: 1 }}
          />
          <Typography variant="caption">Upload photo</Typography>
        </PlaceholderStyle>
      </DropZoneStyle>
    </Stack>
  );
};

export default UpLoadAvatar;

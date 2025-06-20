import React from 'react';
import { Typography, Box } from "@mui/material";

type Props = {
    title: string;
    bg: string;
};

const Title: React.FC<Props> = (props) => {
  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            aspectRatio: '3 / 1',
            backgroundImage: `url(${props.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1,
            }}
          />
          <Typography
            variant="h2"
            component="h1"
            sx={{
              zIndex: 2,
              color: '#fff',
              textAlign: 'center',
            }}
            fontFamily={"serif"}
            fontWeight={500}
          >
            {props.title}
          </Typography>
        </Box>
      </Box>
  );
};

export default Title;
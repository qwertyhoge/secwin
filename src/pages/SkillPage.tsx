import React, { Component } from 'react';
import {Typography,  Container, Card, CardContent, CardMedia} from '@mui/material';

type Props = {
    title: string;
    thumbnail: string;
    children?: React.ReactNode;
};

const SkillPage: React.FC<Props> = (props) => {
  return (
    <div>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 10
        }}
      >
        <Card
          sx={{
            width: {
              xs: '100%',
              md: "40vw",
            },
            display: 'flex',
            justifyContent: 'center',
            flexFlow: 'column',
            alignItems: 'center' 
          }}
        >
          <CardMedia
            component="img"
            image={props.thumbnail}
            sx={{
              height: 200,
              objectFit: 'contain'
            }}
          />
          <CardContent>
            <Typography variant='h4' align='center'>
              {props.title}
            </Typography>
          </CardContent>
        </Card>

      </Container>
      <Container
        sx={{
          marginTop: 10
        }}
      >
        {props.children}
      </Container>
    </div>
  );
};

export default SkillPage;
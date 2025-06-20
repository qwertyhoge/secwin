import React from 'react';
import Card from '@mui/material/Card';
import { CardContent, CardMedia, Typography} from "@mui/material";

type Props = {
    image: string;
    caption: string;
    cardWidth: string;
    imageHeight: string;
};

const ImageCardWithCaption: React.FC<Props> = (props) => {
  return (
    <Card
      sx={{
        width: props.cardWidth,
      }}
    >
      <CardMedia
        sx={{
            height: props.imageHeight,
            textAlign: 'center'
        }}
      >
        <img src={props.image} style={{height: '100%'}}/>
      </CardMedia>
      <CardContent>
        <Typography align='center'>
          {props.caption}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ImageCardWithCaption;
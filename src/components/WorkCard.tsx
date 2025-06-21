import React from 'react';
import Card from '@mui/material/Card';
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Typography} from "@mui/material";

type Props = {
    title: string;
    thumbnail: string;
    targetUrl: string;
    cardLean: number;
    cardLeanHover: number;
    noteLean: number;
};

const MotionCard = motion(Card);

const WorkCard: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const mainControls = useAnimation();
  const labelControls = useAnimation();

  const handleClick = async () => {
    const vel: number = 600;
    const rad: number = (props.cardLeanHover - props.noteLean) * Math.PI / 180;
    await labelControls.start({
      x: vel * Math.cos(rad),
      y: vel * - 1 * Math.sin(rad),
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "backIn"
      },
    });

    await mainControls.start({
      x: 1000,
      opacity: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: "easeIn"
      },
    });

    navigate(props.targetUrl);
  };

  return (
    <MotionCard
      variant='elevation'
      initial={{ rotate: props.cardLean, scale: 1 }}
      whileHover={{scale: 1.05, rotate: props.cardLeanHover}}
      animate={mainControls}
      onClick={handleClick}
      sx={{
        position: 'relative',
        overflow: 'visible',
        width: {
          xs: '80vw',
          sm: '60vw',
          md: '30vw'
        },
        height: '150px',
        transform: 'rotate(2deg)',
        padding: '15px 20px',
        display: 'flex',
        justifyContent: 'right',
        cursor: "pointer"
      }}
    >
      <MotionCard
        variant="elevation"
        initial={{x: "-50%", rotate: props.noteLean}}
        animate={labelControls}
        sx={{
            position: 'absolute',
            width: '80%',
            top: '5%',
            left: '50%',
            padding: '5px 20px',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#fafeb3',
            textAlign: 'center'
        }}
      >
        <Typography variant='h5'>
            {props.title}
        </Typography>
      </MotionCard>
        <img
          src={props.thumbnail}
          style={{
            minHeight: "100%",
            maxWidth: "inherit",
            objectFit: "contain"
        }}/>
    </MotionCard>
  );
};

export default WorkCard;
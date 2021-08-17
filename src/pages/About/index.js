import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';

import { NavMenu } from '../../components';
import explosionImg from '../../assets/images/explosion.jpg';
import './styles.css';

export default function About() {
  return (
    <div>
      <NavMenu />

      <Container>
        <Grid
          spacing={1}
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid xs="8" item>
            <img width="100%" src={explosionImg} alt="Explosion" style={{ transform: 'rotate(7deg)' }} />
          </Grid>

          <Grid
            xs="3"
            item
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            style={{ zIndex: 10 }}
          >
            <div className="about-plus">+Design</div>
            <div className="about-plus">+Creativity</div>
            <div className="about-plus">+Programming</div>
            <div className="about-plus">+Mechatronics</div>
            <Box className="about-name">João Melga's</Box>
            <Box className="about-subtitle">portfolio</Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

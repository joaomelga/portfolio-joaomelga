import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import { Telegram, LinkedIn } from '@material-ui/icons';

import { NavMenu } from '../../components';
import explosionImg from '../../assets/images/explosion.jpg';
import './styles.css';

export default function About() {
  return (
    <div style={{ position: 'relative' }}>
      <NavMenu />

      <Container>
        <Grid
          spacing={1}
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          style={{ height: '90vh', paddingTop: 60 }}
        >
          <Grid xs="12" sm="8" md="8" item>
            <img width="100%" src={explosionImg} alt="Explosion" style={{ transform: 'rotate(0deg)' }} />
          </Grid>

          <Grid
            xs="12"
            sm="4"
            md="3"
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ zIndex: 10 }}
          >
            <Grid
              item
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              style={{
                zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
              }}
            >
              <div className="about-plus">+Design</div>
              <div className="about-plus">+Creativity</div>
              <div className="about-plus">+Programming</div>
              <div className="about-plus">+Mechatronics</div>
              <div className="about-name">João Melga's</div>
              <div className="about-subtitle">portfolio</div>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid xs="12" sm="8" md="7" className="contact-container shadow-bordered">
            <Box>
              <div className="about-title">Want to get in touch?</div>
              <div className="about-subtitle">leave me a message</div>

              <div className="contact-data">
                <span>joaolucasfm@gmail.com</span>

                <Grid style={{ paddingTop: 10 }}>
                  <a href="https://www.linkedin.com/in/joao-melga/" target="_blank" rel="noreferrer">
                    <LinkedIn color="inherit" style={{ color: '#555' }} />
                  </a>

                  <a href="https://t.me/joaomelga" target="_blank" rel="noreferrer">
                    <Telegram color="inherit" style={{ color: '#555' }} />
                  </a>
                </Grid>
              </div>
            </Box>
          </Grid>
        </Grid>

      </Container>
    </div>
  );
}

import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';

import './styles.css';

export default function NavMenu() {
  const history = useHistory();
  const location = useLocation();

  return (
    <Container style={{ marginTop: 30 }}>
      <Grid
        spacing={5}
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Grid
          className={`nav-menu-item ${location.pathname === '/' ? 'nav-menu-item-selected' : ''}`}
          xs="1"
          item
          onClick={() => history.push('/')}
        >
          About
        </Grid>
        <Grid
          className={`nav-menu-item ${location.pathname === '/contact' ? 'nav-menu-item-selected' : ''}`}
          xs="1"
          item
          onClick={() => history.push('/contact')}
        >
          Contact
        </Grid>
        <Grid
          className={`nav-menu-item ${location.pathname === '/projects' ? 'nav-menu-item-selected' : ''}`}
          xs="1"
          item
          onClick={() => history.push('/projects')}
        >
          Projects
        </Grid>
      </Grid>
    </Container>
  );
}

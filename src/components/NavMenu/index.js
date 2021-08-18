import React, { useState, useEffect } from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';

import './styles.css';

export default function NavMenu() {
  const history = useHistory();
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      style={{
        width: '100%',
        paddingTop: 30,
        paddingBottom: 30,
        position: 'fixed',
        zIndex: 100,
        backgroundColor: '#FFF',
        boxShadow: scrollPosition ? '0 0 4px #999' : '0 0 0 #FFF',
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        xs="12"
      >
        <Grid
          direction="row"
          alignItems="center"
          justifyContent="center"
          container
          item
          xs="12"
          sm="6"
          lg="4"
        >
          <Grid
            className={`nav-menu-item ${location.pathname === '/' ? 'nav-menu-item-selected blue-font' : ''}`}
            xs="4"
            item
            onClick={() => history.push('/')}
          >
            About
          </Grid>

          <Grid
            className={`nav-menu-item ${location.pathname === '/works' ? 'nav-menu-item-selected yellow-font' : ''}`}
            xs="4"
            item
            onClick={() => history.push('/works')}
          >
            Works
          </Grid>

          <Grid
            className={`nav-menu-item ${location.pathname === '/hobbies' ? 'nav-menu-item-selected pink-font' : ''}`}
            xs="4"
            item
            onClick={() => history.push('/hobbies')}
          >
            Hobbies
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

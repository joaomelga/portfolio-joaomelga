import React, { useState } from 'react';
import {
  Box, Container, Grid, Hidden,
} from '@material-ui/core';
import { FilterList, Close, ChevronRight } from '@material-ui/icons';

import { NavMenu } from '../../components';
import cuttedHeadImg from '../../assets/images/cutted-head.jpg';
import hobbies from './hobbies.json';
import './styles.css';

const useHobbies = () => {
  const [filtersDialogOpened, setFiltersDialogOpened] = useState(false);
  const [filterIsActive, setFilterIsActive] = useState(false);
  const [selectedField, setSelectedField] = useState();

  const handleFiltersDialogToggle = () => {
    setFiltersDialogOpened(!filtersDialogOpened);
  };

  const handleFilterSelection = (field) => {
    setFilterIsActive(true);
    setFiltersDialogOpened(false);
    setSelectedField(field);
  };

  const handleFilterCleaning = () => {
    setFilterIsActive(false);
  };

  return {
    localStates: {
      filtersDialogOpened,
      filterIsActive,
      selectedField,
    },
    eventsHandlers: {
      handleFiltersDialogToggle,
      handleFilterSelection,
      handleFilterCleaning,
    },
  };
};

export default function Hobbies() {
  const { localStates, eventsHandlers } = useHobbies();

  return (
    <div className="hobbies-page-container">
      <NavMenu />

      <Container fixed>
        <Grid
          spacing={1}
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          style={{ paddingTop: 60 }}
        >
          <Grid md="7" item>
            <Hidden smDown>
              <img width="90%" src={cuttedHeadImg} alt="Cutted Head" />
            </Hidden>
          </Grid>

          <Grid
            xs="12"
            md="5"
            item
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            style={{ zIndex: 10, marginTop: 40 }}
          >
            <Box>
              <div className="filters-container">
                <button
                  type="button"
                  className="shadow-bordered filters-button"
                  onClick={eventsHandlers.handleFiltersDialogToggle}
                >
                  <FilterList color="#000" />
                  <span>Filters</span>
                </button>

                { localStates.filterIsActive && (
                  <Box className="filters-breadcrumb">
                    <ChevronRight fontSize="inherit" style={{ marginRight: 0, color: '#999', fontSize: 18 }} />

                    <span>
                      {localStates.selectedField}
                    </span>

                    <Close
                      style={{ marginLeft: 5, color: '#333', cursor: 'pointer' }}
                      onClick={eventsHandlers.handleFilterCleaning}
                      fontSize="small"
                    />
                  </Box>
                )}

                <Box
                  boxShadow={4}
                  className={`filters-dialog ${localStates.filtersDialogOpened ? 'filters-dialog-opened' : ''}`}
                >
                  <div className="filters-list">
                    <h3>Hobbies</h3>
                    {
                      hobbies.fields.map((field) => (
                        <button
                          type="button"
                          className="filter-option"
                          onClick={() => eventsHandlers.handleFilterSelection(field)}
                        >
                          <span>
                            {field}
                          </span>
                        </button>
                      ))
                    }
                  </div>
                </Box>
              </div>
            </Box>

            {
              localStates.filterIsActive
                ? (
                  <Grid
                    container
                    spacing={4}
                    className="hobbies-list-container"
                  >
                    {
                      hobbies.data.filter((hobby) => hobby.fields?.includes(localStates.selectedField))
                        .map((hobby) => (
                          <Grid xs="12" container item alignItems="flex-start">
                            <Grid xs="4" sm="3" item>
                              <div className="shadow-bordered hobby-card-img-container">
                                <img
                                  width="100%"
                                  src={`${process.env.PUBLIC_URL}/assets/images/${hobby.img}`}
                                  alt={hobby.title}
                                />
                              </div>
                            </Grid>

                            <Grid xs="8" sm="9" item>
                              <div className="hobby-card-text">
                                <h1>{hobby.title}</h1>
                                <span>{hobby.date}</span>
                                <span>{hobby.location}</span>
                                <p>{hobby.subtitle}</p>
                              </div>
                            </Grid>
                          </Grid>
                        ))
                    }
                  </Grid>
                )
                : (
                  <Grid
                    container
                    spacing={5}
                    className="hobbies-list-container"
                  >
                    {
                      hobbies.fields.map((field) => (
                        <Grid
                          xs="6"
                          sm="4"
                          md="4"
                          container
                          item
                          onClick={() => eventsHandlers.handleFilterSelection(field)}
                        >
                          <div className="field-button shadow-bordered squared-box">
                            <span>
                              {field}
                            </span>
                          </div>
                        </Grid>
                      ))
                    }
                  </Grid>
                )
            }
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

import React, { useState } from 'react';
import {
  Box, Container, Grid, Hidden,
} from '@material-ui/core';
import { FilterList, Close, ChevronRight } from '@material-ui/icons';

import { NavMenu } from '../../components';
import cuttedHeadImg from '../../assets/images/cutted-head.jpg';
import works from './works.json';
import './styles.css';

const useWorks = () => {
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

export default function Works() {
  const { localStates, eventsHandlers } = useWorks();

  return (
    <div className="works-page-container">
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
                    <h3>Works</h3>
                    {
                      works.fields.map((field) => (
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
                    className="works-list-container"
                  >
                    {
                      works.data.filter((work) => work.fields?.includes(localStates.selectedField))
                        .map((work) => (
                          <Grid
                            xs="12"
                            container
                            item
                            alignItems="flex-start"
                            onClick={() => work.link && window.open(work.link, '_blank').focus()}
                            style={{ cursor: 'pointer' }}
                          >
                            <Grid xs="3" sm="3" item>
                              <div className="shadow-bordered work-card-img-container">
                                <img
                                  width="100%"
                                  height="100%"
                                  src={`${process.env.PUBLIC_URL}/assets/images/${work.img}`}
                                  alt={work.title}
                                />
                              </div>
                            </Grid>

                            <Grid xs="9" sm="9" item>
                              <div className="work-card-text">
                                <h1>{work.title}</h1>
                                <span>{work.date}</span>
                                <span>{work.location}</span>
                                <p>{work.subtitle}</p>
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
                    className="works-list-container"
                  >
                    {
                      works.fields.map((field) => (
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

import React, { useState } from 'react';
import {
  Box, Container, Grid, Hidden,
} from '@material-ui/core';
import { FilterList, Close, ChevronRight } from '@material-ui/icons';

import { NavMenu } from '../../components';
import cuttedHeadImg from '../../assets/images/cutted-head.jpg';
import projects from './projects.json';
import './styles.css';

const useProjects = () => {
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

export default function Projects() {
  const { localStates, eventsHandlers } = useProjects();

  return (
    <div className="projects-page-container">
      <Container fixed>
        <NavMenu />
      </Container>

      <Container fixed>
        <Grid
          spacing={1}
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
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
                      projects.fields.work.map((field) => (
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

                    <h3>Fun</h3>
                    {
                      projects.fields.fun.map((field) => (
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
                    className="projects-list-container"
                  >
                    {
                      projects.data.filter((project) => project.fields?.includes(localStates.selectedField))
                        .map((project) => (
                          <Grid xs="12" container item alignItems="center">
                            <Grid xs="4" sm="3" item>
                              <div className="shadow-bordered project-card-img-container">
                                <img
                                  width="100%"
                                  src={`${process.env.PUBLIC_URL}/assets/images/${project.img}`}
                                  alt={project.title}
                                />
                              </div>
                            </Grid>

                            <Grid xs="8" sm="9" item>
                              <div className="project-card-text">
                                <h1>{project.title}</h1>
                                <span>{project.date}</span>
                                <p>{project.subtitle}</p>
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
                    className="projects-list-container"
                  >
                    {
                      projects.fields.work.map((field) => (
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

                    {
                      projects.fields.fun.map((field) => (
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

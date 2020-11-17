import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  const lastUpdateString = new Date(lastUpdate).toDateString();

  const covidData = [
    {
      label: 'Infected',
      body: 'Number of active cases of COVID-19',
      data: confirmed.value,
      style: styles.infected,
    },
    {
      label: 'Recovered',
      body: 'Number of recoveries from COVID-19',
      data: recovered.value,
      style: styles.recovered,
    },
    {
      label: 'Deaths',
      body: 'Number of deaths caused by COVID-19',
      data: deaths.value,
      style: styles.deaths,
    },
  ];

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {covidData.map((item, index) => {
          return (
            <Grid
              item
              component={Card}
              xs={12}
              md={3}
              className={cx(styles.card, item.style)}
              key={index}
            >
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {item.label}
                </Typography>
                <Typography variant="h5">
                  <CountUp
                    start={0}
                    end={item.data}
                    duration={2.5}
                    separator=","
                  />
                </Typography>
                <Typography color="textSecondary">
                  {lastUpdateString}
                </Typography>
                <Typography variant="body2">{item.body}</Typography>
              </CardContent>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Cards;

import axios from 'axios';
import config from '../config';

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(config.api);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(config.daily);
    const formatedData = data.map(
      ({ positive, recovered, death, dateChecked: date }) => ({
        confirmed: positive,
        recovered,
        deaths: death,
        date,
      })
    );

    return formatedData;
  } catch (error) {}
};

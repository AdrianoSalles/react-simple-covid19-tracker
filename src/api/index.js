import axios from 'axios';
import config from '../config';

export const fetchData = async (country) => {
  let url = country ? `${config.api}/countries/${country}` : config.api;

  const {
    data: { confirmed, recovered, deaths, lastUpdate },
  } = await axios.get(url);

  if (!confirmed) {
    return [];
  }

  return { confirmed, recovered, deaths, lastUpdate };
};

export const fetchDailyData = async () => {
  const { data } = await axios.get(config.daily);

  if (!data) {
    return [];
  }

  const formatedData = data.map(
    ({ positive, recovered, death, dateChecked: date }) => ({
      confirmed: positive,
      recovered,
      deaths: death,
      date,
    })
  );

  return formatedData;
};

export const fetchCountries = async () => {
  const {
    data: { countries },
  } = await axios.get(`${config.api}/countries`);

  if (!countries) {
    return [];
  }

  return countries.map((country) => country.name);
};

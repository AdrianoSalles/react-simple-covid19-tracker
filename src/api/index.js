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

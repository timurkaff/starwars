import axios from 'axios';
import { ApiParams } from '@/interfaces/ApiParams'

const BASE_URL = 'https://swapi.dev/api';
const ITEMS_PER_PAGE = 9;


export const getPlanets = async (page = 1, search = '') => {
  const { data } = await axios.get(`${BASE_URL}/planets`, {
    params: {
      page,
      search,
    },
  });
  return { ...data, results: data.results.slice(0, ITEMS_PER_PAGE) };
};

export const getPlanet = async ({ id }: ApiParams) => {
  const { data } = await axios.get(`${BASE_URL}/planets/${id}`);
  return data;
};

export const getPeople = async ({ page = 1, search = '' }: ApiParams) => {
  const { data } = await axios.get(`${BASE_URL}/people`, {
    params: {
      page,
      search,
    },
  });
  return { ...data, results: data.results.slice(0, ITEMS_PER_PAGE) };
};

export const getPerson = async ({ id }: ApiParams) => {
  const { data } = await axios.get(`${BASE_URL}/people/${id}`);
  return data;
}; 
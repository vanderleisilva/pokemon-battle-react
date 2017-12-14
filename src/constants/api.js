import axios from 'axios';

export const baseURL = 'https://pokemon-battle-lumen.herokuapp.com/';

export const request = axios.create({ baseURL });


import axios from 'axios';
import wrapper from 'axios-cache-plugin';

let http = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

let httpProxy = wrapper(http, {
  maxCacheSize: 15, 
  ttl: 15 * 60 * 1000 
});

export default httpProxy;

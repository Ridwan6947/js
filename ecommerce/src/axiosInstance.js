import axios from 'axios';
import wrapper from 'axios-cache-plugin';

let http = axios.create({            //instance of axios using axios.create
  baseURL: 'https://fakestoreapi.com',
});


/*if a cached response exists and it is still valid (i.e., within the TTL), 
the cached response will be returned instead of making a new network request. */

let httpProxy = wrapper(http, {       //wrapping the instance of axios
  maxCacheSize: 15,      //recent 15 cache's will be cached
  ttl: 15 * 60 * 1000   //time to live is 15 minutes for each cache
});

export default httpProxy;

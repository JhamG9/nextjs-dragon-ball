import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dragonball-api.com/api/',
  headers: {
    'ContentType': 'text/json',
    // Add all custom headers here
  },
});

export const fetchData = async ( url:any , options = {}) => { 
  try {
    const response = await axiosInstance(url, options);
    return response.data;
  } catch (error) {
    console.error('Error retrieving data:', error);
    throw new Error('Could not get data');
  }
};
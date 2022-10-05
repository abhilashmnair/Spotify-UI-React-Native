const axios = require('axios');
const qs = require('qs');
import { Buffer } from 'buffer'

const client_id = "6923be29233a454f83f3db90b3172606"
const client_secret = "c0ec28811f0843d9aeea0a890cca3af2"
const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');

const getAuth = async () => {
  try{
    const token_url = 'https://accounts.spotify.com/api/token';
    const data = qs.stringify({'grant_type':'client_credentials'});

    const response = await axios.post(token_url, data, {
      headers: { 
        'Authorization': `Basic ${auth_token}`,
        'Content-Type': 'application/x-www-form-urlencoded' 
      }
    })
    
    if(response.status == 401){
      const r_data = qs.stringify({ 'grant_type' : 'refresh_token' , 'refresh_token' : `${refresh_token}`});

      const response = await axios.post(token_url, r_data,  {
        headers : {
          'Authorization' : `Basic ${auth_token}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
    }
    return response.data.access_token
  }catch(error){ console.log(error); }
}

const getArtistTopTracks = async (artist_id) => {
  const access_token = await getAuth();

  const api_url = `https://api.spotify.com/v1/artists/${artist_id}/top-tracks?market=IN`;
  try{
    const response = await axios.get(api_url, {
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    });
    return response.data;
  }catch(error){
    console.log(error);
  }  
};

module.exports = {
  getArtistTopTracks
}
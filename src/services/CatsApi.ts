import axios from 'axios'
import { API_KEY } from '../config'

function upvoteImage(imageId:any) {
  return axios.post('https://api.thecatapi.com/v1/votes',
  {
    image_id: imageId,
    value: 1
  },
  {
    headers: {
      'x-api-key': API_KEY
    }
  })
  .then(function(resp) {
    return Promise.resolve(resp.data)
  })
}

function downvoteImage(imageId:any) {
  return axios.post('https://api.thecatapi.com/v1/votes',
  {
    image_id: imageId,
    value: 0
  },
  {
    headers: {
      'x-api-key': API_KEY
    }
  })
  .then(function(resp) {
    return Promise.resolve(resp.data)
  })
}








function favImage(imageId:any) {
  return axios.post('https://api.thecatapi.com/v1/favourites',
  {
    image_id: imageId
  },
  {
    headers: {
      'x-api-key': API_KEY
    }
  })
  .then(function(resp) {
    return Promise.resolve(resp.data)
  })
}

function unfavImage(imageId:any) {
  return axios.delete(`https://api.thecatapi.com/v1/favourites/${imageId}`,
  {
    headers: {
      'x-api-key': API_KEY
    }
  })
  .then(function(resp) {
    return Promise.resolve(resp.data)
  })
}

function fetchFaves():any {
  return axios.get('https://api.thecatapi.com/v1/favourites',
  {
    headers: {
      'x-api-key': API_KEY
    }
  })
  .then(function(resp) {
    return Promise.resolve(resp.data)
  })
}




function fetchVotes():any {
  return axios.get('https://api.thecatapi.com/v1/votes',
  {
    headers: {
      'x-api-key': API_KEY
    }
  })
  .then(function(resp) {
    return Promise.resolve(resp.data)
  })
}





function fetchImages():any {
  return axios.get('https://api.thecatapi.com/v1/images?limit=100',
  {
    headers: {
      'x-api-key': API_KEY
    }
  })
  .then(function(resp) {
    return Promise.resolve(resp.data)
  })
}

function uploadImage(file:any):any {
  let formData = new FormData()

  formData.append('file', file)

  return axios.post('https://api.thecatapi.com/v1/images/upload',
  formData,
  {
    headers: {
      'x-api-key': API_KEY
    }
  })
  .then(function(resp) {
    return Promise.resolve(resp.data)
  })
}

export {
  fetchImages,
  fetchVotes,
  fetchFaves,
  uploadImage,
  upvoteImage,
  downvoteImage,
  favImage,
  unfavImage
}
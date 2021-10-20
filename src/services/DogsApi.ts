import axios from 'axios'
import { DOG_API_KEY as API_KEY } from '../config'

function fetchInitialGif():any {
  return Promise.resolve({
    url: 'https://cdn2.thedogapi.com/images/BJUum6T4X.gif'
  })
}

function fetchRandomGif():any {
  // const initial = 'https://cdn2.thedogapi.com/images/rk9k4aTNm.gif'
  return axios.get('https://api.thedogapi.com/v1/images/search?page=1&limit=1&mime_types=gif')
  .then(function(resp) {
    return Promise.resolve(resp.data[0])
  })
}

function fetchRandomImage():any {
  return axios.get('https://api.thedogapi.com/v1/images/search?page=1&limit=1')
  .then(function(resp) {
    return Promise.resolve(resp.data[0])
  })
}

function fetchPublicImages():any {
  return axios.get('https://api.thedogapi.com/v1/images/search?page=1&limit=1&mime_types=gif')
  .then(function(resp) {
    return Promise.resolve(resp.data)
  })
}

function upvoteImage(imageId:any) {
  return axios.post('https://api.thedogapi.com/v1/votes',
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
  return axios.post('https://api.thedogapi.com/v1/votes',
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
  return axios.post('https://api.thedogapi.com/v1/favourites',
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
  return axios.delete(`https://api.thedogapi.com/v1/favourites/${imageId}`,
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
  return axios.get('https://api.thedogapi.com/v1/favourites',
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
  return axios.get('https://api.thedogapi.com/v1/votes',
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
  return axios.get('https://api.thedogapi.com/v1/images?limit=100',
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

  return axios.post('https://api.thedogapi.com/v1/images/upload',
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
  fetchInitialGif,
  fetchRandomGif,
  fetchRandomImage,
  fetchPublicImages,
  fetchImages,
  fetchVotes,
  fetchFaves,
  uploadImage,
  upvoteImage,
  downvoteImage,
  favImage,
  unfavImage
}
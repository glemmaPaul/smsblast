import axios from 'axios'

const baseURL = `https://pressend.now`

const createURL = (resource) => baseURL + resource

const requestAPI = (resource, options) => {
  let axiosOptions = Object.assign({
    'Content-Type': 'application/json'
  }, options)

  axiosOptions.url = createURL(resource)

  return axios(axiosOptions)
    .then(response => response.json())
    .catch(err => console.warning(err))
}

export const requestTextBlast = (to, message) => {
  return requestAPI('/request/', {
    data: {
      message: message,
      to: to
    }
  })
}

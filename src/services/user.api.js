import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://rapapi.org/mockjsdata/22191/'
})


export const getRequest = (url) => (
  instance.get(url)
)

export const postRequest = (url, data) => (
  instance.post(url, data)
)

export const getUsers = () => getRequest('users.api')
export const getImages = () => getRequest('images.api')
export const getForms = () => getRequest('images.api')




const chart = axios.create({
  baseURL: 'https://59a625c19f381700111bcd3d.mockapi.io/'
})
export const getChart = (url) => (
  chart.get(url)
)

export const postChart = (url, data) => (
  chart.post(url, data)
)
export const getBiao = () => getChart('charts')
import axios from 'axios'
const AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_URL_SERVER}`,
  headers: {
    Accept: 'application/json'
  },
  params: {
    api_key: '6e33fab73665fdfcb40d4225e7264e67'
  }
})

export default AxiosInstance

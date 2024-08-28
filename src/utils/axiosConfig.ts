import axios from "axios"
import HttpError from "./HttpError"
import EmailError from "./EmailError"

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL
  })
  
  //axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
  axiosInstance.defaults.headers.get['Accept'] = 'application/json'
  
  axiosInstance.interceptors.response.use(undefined, async (res) => {
    if (axios.isAxiosError(res) && res.response?.status === 400) {
      throw new HttpError('errors.error_400', 400)
    }
    if (axios.isAxiosError(res) && res.response?.status === 401) {
      throw new HttpError('errors.error_401', 401)
    }
    if (axios.isAxiosError(res) && (res.response?.status === 403)) {
      throw new HttpError('errors.error_403', 403)
    }
    if (axios.isAxiosError(res) && res.response?.status === 404) {
      throw new HttpError('errors.error_404', 404)
    }
  
    if (axios.isAxiosError(res) && res.response?.status === 429)
      throw new HttpError('errors.error_429', 429)
    if (axios.isAxiosError(res) && res.response?.status === 500) {
  
      if (res.response.data.includes('SmtpException'))
        throw new EmailError('errors.error_mail')
      throw new HttpError('errors.error_500', 500)
    }
  })
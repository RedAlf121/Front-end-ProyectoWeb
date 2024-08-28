import { isAxiosError } from 'axios'
import { getErrorMessage } from './helpers'
import HttpError from './HttpError'
import EmailError from './EmailError'
import userStoreInstance from '../store/userStore'
import { axiosInstance } from './axiosConfig'

export const sendRequest = async (
  options
) => {
  try {
    const token = 'Bearer '+userStoreInstance.token
    const {
      url,
      method = 'GET',
      requiresAuth = true,
      body = {},
    } = options
   

    const axiosConfig = {
      url: url,
      method: method,
      headers: requiresAuth
        ? {
          Authorization: token
        }
        : {},

    }
    method === 'GET' ?
      axiosConfig.params = body :
      axiosConfig.data = body;
    const res = await axiosInstance.request(axiosConfig)

    if (res && res.status === 200) {
      return res.data
    }

  } catch (err) {
    if (isAxiosError(err))
      throw new HttpError(getErrorMessage(err), err.status ?? 500)

    if (err instanceof HttpError)
      throw new HttpError(err.message, err.statusCode)
    if (err instanceof EmailError)
      throw new EmailError(err.message)
    throw new Error('Error del servidor')
  }
}

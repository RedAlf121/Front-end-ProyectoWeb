import HttpError from "../../utils/HttpError"
import { sendRequest } from "../../utils/sendRequest"

export const getUsers = async () => {
  return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/users/` })
}


export const addUser = async (data) => {
  try {
    //validateClient(data)
    return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/users/`, method: 'POST', body: data })
  } catch (e) {
    if (e instanceof HttpError)
      throw new HttpError(e.message, e.statusCode)
    throw new Error(e.message)
  }
}

export const getUser = async (id) => {
  return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/users/${id}/` })
  
}

export const deleteUser = async (id) => {
  return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/users/${id}/`, method: 'DELETE' })
}

export const updateUser = async ({ id, data }) => {
  try {
    //validateClient(data)
    return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/users/${id}/`, method: 'PUT', body: data })
  } catch (e) {
    if (e instanceof HttpError)
      throw new HttpError(e.message, e.statusCode)
    throw new Error(e.message)
  }
}

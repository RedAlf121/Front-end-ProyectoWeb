import HttpError from "../../utils/HttpError"
import { sendRequest } from "../../utils/sendRequest"

export const getClients = async () => {
  return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/client/` })
}


export const addClient = async (data) => {
  try {
    //validateClient(data)
    return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/client/`, method: 'POST', body: data })
  } catch (e) {
    if (e instanceof HttpError)
      throw new HttpError(e.message, e.statusCode)
    throw new Error(e.message)
  }
}

export const getClient = async (id) => {
  return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/client/${id}/` })
  
}

export const deleteClient = async (id) => {
  return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/client/${id}/`, method: 'DELETE' })
}

export const updateClient = async ({ id, data }) => {
  try {
    //validateClient(data)
    return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/client/${id}/`, method: 'PUT', body: data })
  } catch (e) {
    if (e instanceof HttpError)
      throw new HttpError(e.message, e.statusCode)
    throw new Error(e.message)
  }
}

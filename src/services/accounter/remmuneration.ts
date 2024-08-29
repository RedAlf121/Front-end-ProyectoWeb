import HttpError from "../../utils/HttpError"
import { sendRequest } from "../../utils/sendRequest"

export const getRemmunerations = async () => {
  return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/remmuneration/` })
}


export const addRemmuneration = async (data) => {
  try {
    //validateClient(data)
    return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/remmuneration/`, method: 'POST', body: data })
  } catch (e) {
    if (e instanceof HttpError)
      throw new HttpError(e.message, e.statusCode)
    throw new Error(e.message)
  }
}

export const getRemmuneration = async (id) => {
  return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/remmuneration/${id}/` })
  
}

export const deleteRemmuneration = async (id) => {
  return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/remmuneration/${id}/`, method: 'DELETE' })
}

export const updateRemmuneration = async ({ id, data }) => {
  try {
    //validateClient(data)
    return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/remmuneration/${id}/`, method: 'PUT', body: data })
  } catch (e) {
    if (e instanceof HttpError)
      throw new HttpError(e.message, e.statusCode)
    throw new Error(e.message)
  }
}

import HttpError from "../../utils/HttpError"
import { sendRequest } from "../../utils/sendRequest"

export const getReceipts = async () => {
  return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/receipt/` })
}


export const addReceipt = async (data) => {
  try {
    //validateClient(data)
    return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/receipt/`, method: 'POST', body: data })
  } catch (e) {
    if (e instanceof HttpError)
      throw new HttpError(e.message, e.statusCode)
    throw new Error(e.message)
  }
}

export const getReceipt = async (id) => {
  return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/receipt/${id}/` })
  
}

export const deleteReceipt = async (id) => {
  return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/receipt/${id}/`, method: 'DELETE' })
}

export const updateReceipt = async ({ id, data }) => {
  try {
    //validateClient(data)
    return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/receipt/${id}/`, method: 'PUT', body: data })
  } catch (e) {
    if (e instanceof HttpError)
      throw new HttpError(e.message, e.statusCode)
    throw new Error(e.message)
  }
}

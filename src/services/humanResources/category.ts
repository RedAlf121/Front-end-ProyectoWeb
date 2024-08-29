import HttpError from "../../utils/HttpError"
import { sendRequest } from "../../utils/sendRequest"

export const getCategories = async () => {
  return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/category/` })
}


export const addCategory = async (data) => {
  try {
    //validateClient(data)
    return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/category/`, method: 'POST', body: data })
  } catch (e) {
    if (e instanceof HttpError)
      throw new HttpError(e.message, e.statusCode)
    throw new Error(e.message)
  }
}

export const getCategory = async (id) => {
  return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/category/${id}/` })
  
}

export const deleteCategory = async (id) => {
  return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/category/${id}/`, method: 'DELETE' })
}

export const updateCategory = async ({ id, data }) => {
  try {
    //validateClient(data)
    return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/category/${id}/`, method: 'PUT', body: data })
  } catch (e) {
    if (e instanceof HttpError)
      throw new HttpError(e.message, e.statusCode)
    throw new Error(e.message)
  }
}

import HttpError from "../../utils/HttpError"
import { sendRequest } from "../../utils/sendRequest"

export const getContracts = async () => {
  const data = await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/contract/` });
  const response = data.map((key)=>{
    return {
      id_ct: key.id_ct,
      title_ct: key.title_ct,
      manager_ct: key.manager_ct,
      fk_id_client: key.fk_id_client,
      start_ct: key.start_ct,
      end_ct: key.end_ct,
      resolution_ct: key.resolution_ct,
      description_ct: key.description_ct,
      work_area_ct: key.work_area_ct,
      profit_margin: key.profit_margin,
      currency_ct: key.currency_ct,
      is_active: key.is_active,
      manager_name: key.manager_ct.name_em,
      client_name: key.fk_id_client.name_client
    };
  });
  return response;
}


export const addContract = async (data) => {
  try {

    data.fk_id_client = data.fk_id_client.id_client;
    data.manager_ct = data.manager_ct.id_em;
    //validateClient(data)
    return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/contract/`, method: 'POST', body: data })
  } catch (e) {
    if (e instanceof HttpError)
      throw new HttpError(e.message, e.statusCode)
    throw new Error(e.message)
  }
}

export const getContract = async (id) => {
  return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/contract/${id}/` })
  
}

export const deleteContract = async (id) => {
  return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/contract/${id}/`, method: 'DELETE' })
}

export const updateContract = async ({ id, data }) => {
  try {
    return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/contract/${id}/`, method: 'PATCH', body: {
      "id_ct": data.id_ct,
      "title_ct": data.title_ct,
      "start_ct": data.start_ct,
      "end_ct": data.end_ct,
      "resolution_ct": data.resolution_ct,
      "description_ct": data.description_ct,
      "work_area_ct": data.work_area_ct,
      "profit_margin": data.profit_margin,
      "currency_ct": data.currency_ct,
      "is_active": data.is_active,
      "manager_name":data.manager_ct.name_em,
      "client_name": data.fk_id_client.name_client
    } })
  } catch (e) {
    if (e instanceof HttpError)
      throw new HttpError(e.message, e.statusCode)
    throw new Error(e.message)
  }
}

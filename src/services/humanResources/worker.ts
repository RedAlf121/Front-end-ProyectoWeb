import HttpError from "../../utils/HttpError"
import { sendRequest } from "../../utils/sendRequest"

export const getWorkers = async () => {
  const data = await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/employee/` });
  const response = data.map((key)=>{
    return {
      category_name: key.fk_id_cg.name_cg,
      "id_em": key.id_em,
      "fk_id_cg": key.fk_id_cg,
      "name_em": key.name_em,
      "address_em": key.address_em,
      "phone_em": key.phone_em,
      "email_em": key.email_em,
      "department_em": key.department_em,
      "num_account_em": key.num_account_em,
      is_active: key.is_active
    };
  });
  return response;
}


export const addWorker = async (data) => {
  try {
    data.fk_id_cg = data.fk_id_cg.id_cg;
    //validateClient(data)
    return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/employee/`, method: 'POST', body: data })
  } catch (e) {
    if (e instanceof HttpError)
      throw new HttpError(e.message, e.statusCode)
    throw new Error(e.message)
  }
}

export const getWorker = async (id) => {
  return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/employee/${id}/` })
  
}

export const deleteWorker = async (id) => {
  return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/employee/${id}/`, method: 'DELETE' })
}

export const updateWorker = async ({ id, data }) => {
  try {
    //validateClient(data)
    return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/employee/${id}/`, method: 'PATCH', body: {
      id_em: data.id_em,
      fk_id_cg: data.fk_id_cg,
      name_em: data.name_em,
      address_em: data.address_em,
      phone_em: data.phone_em,
      email_em: data.email_em,
      department_em: data.department_em,
      num_account_em: data.num_account_em,
      is_active: data.is_active
    } })
  } catch (e) {
    if (e instanceof HttpError)
      throw new HttpError(e.message, e.statusCode)
    throw new Error(e.message)
  }
}

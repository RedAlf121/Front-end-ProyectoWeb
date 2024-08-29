import HttpError from "../../utils/HttpError"
import { sendRequest } from "../../utils/sendRequest"

export const getPayterms = async () => {
    const data = await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/payterm/` });
    const response = data.map((key)=>{
      return {
        contract_name: key.fk_id_ct.title_ct,
        fk_id_ct: key.fk_id_ct,
        due_month_payterm: key.due_month_payterm,
        due_year_payterm: key.due_year_payterm,
        deliver: key.deliver,
        is_billed: key.is_billed,
        is_active: key.is_active
      };
    });
    return response;
  }


export const addPayterm = async (data) => {
    try {
        //validateClient(data)
        return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/payterm/`, method: 'POST', body: data })
    } catch (e) {
        if (e instanceof HttpError)
            throw new HttpError(e.message, e.statusCode)
        throw new Error(e.message)
    }
}

export const getPayterm = async (id) => {
    return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/payterm/${id}/` })

}

export const deletePayterm = async (id) => {
    return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/payterm/${id}/`, method: 'DELETE' })
}

export const updatePayterm = async ({ id, data }) => {
    try {
      return await sendRequest({ url: `${import.meta.env.VITE_API_URL}/ceta/payterm/${id}/`, method: 'PATCH', body: {
        "fk_id_ct": data.fk_id_ct,
        "due_month_payterm": data.due_month_payterm,
        "due_year_payterm": data.due_year_payterm,
        "deliver": data.deliver,
        "is_billed": data.is_billed,
        "is_active": data.is_active
      } })
    } catch (e) {
      if (e instanceof HttpError)
        throw new HttpError(e.message, e.statusCode)
      throw new Error(e.message)
    }
  }
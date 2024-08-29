import { useQuery } from "@tanstack/vue-query"
import { getRemmunerations } from "../../services/accounter/remmuneration"

export const useClients = () => {
  const {
    data,
    isPending,
    isSuccess,
    isError,
    error,
    isRefetching,
    refetch
  } = useQuery({
    queryKey: ['remmunerations'],
    queryFn: getRemmunerations
  })
  return { data, isPending,isError, isSuccess, error, refetch, isRefetching }
}

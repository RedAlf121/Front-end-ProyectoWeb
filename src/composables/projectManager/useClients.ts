import { useQuery } from "@tanstack/vue-query"
import { getClients } from "../../services/projectManager/client"

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
    queryKey: ['clients'],
    queryFn: getClients
  })
  return { data, isPending,isError, isSuccess, error, refetch, isRefetching }
}

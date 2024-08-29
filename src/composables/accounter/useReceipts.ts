import { useQuery } from "@tanstack/vue-query"
import { getReceipts } from "../../services/accounter/receipt"

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
    queryKey: ['receipt'],
    queryFn: getReceipts
  })
  return { data, isPending,isError, isSuccess, error, refetch, isRefetching }
}

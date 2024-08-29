import { useQuery } from "@tanstack/vue-query"
import { getContracts } from "../../services/projectManager/contract"

export const useContract = () => {
  const {
    data,
    isPending,
    isSuccess,
    isError,
    error,
    isRefetching,
    refetch
  } = useQuery({
    queryKey: ['contract'],
    queryFn: getContracts
  })
  return { data, isPending,isError, isSuccess, error, refetch, isRefetching }
}

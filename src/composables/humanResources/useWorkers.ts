import { useQuery } from "@tanstack/vue-query"
import { getWorkers } from "../../services/humanResources/worker"

export const useWorkers = () => {
  const {
    data,
    isPending,
    isSuccess,
    isError,
    error,
    isRefetching,
    refetch
  } = useQuery({
    queryKey: ['worker'],
    queryFn: getWorkers
  })
  return { data, isPending,isError, isSuccess, error, refetch, isRefetching }
}

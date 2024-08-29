import { useQuery } from "@tanstack/vue-query"
import { getCategories } from "../../services/humanResources/category"

export const useCategories = () => {
  const {
    data,
    isPending,
    isSuccess,
    isError,
    error,
    isRefetching,
    refetch
  } = useQuery({
    queryKey: ['category'],
    queryFn: getCategories
  })
  return { data, isPending,isError, isSuccess, error, refetch, isRefetching }
}

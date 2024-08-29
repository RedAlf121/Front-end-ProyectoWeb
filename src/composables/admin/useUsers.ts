import { useQuery } from "@tanstack/vue-query"
import { getUsers } from "../../services/admin/user"

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
    queryKey: ['users'],
    queryFn: getUsers
  })
  return { data, isPending,isError, isSuccess, error, refetch, isRefetching }
}

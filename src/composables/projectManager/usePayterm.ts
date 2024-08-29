import { useQuery } from "@tanstack/vue-query"
import { getPayterms } from "../../services/projectManager/payterm"

export const usePayterm = () => {
    const {
        data,
        isPending,
        isSuccess,
        isError,
        error,
        isRefetching,
        refetch
    } = useQuery({
        queryKey: ['payterm'],
        queryFn: getPayterms
    })
    return { data, isPending, isError, isSuccess, error, refetch, isRefetching }
}

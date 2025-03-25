import { useMutation, useQuery } from "@tanstack/react-query";
import { getBreeds, getDogs, login, logout, matchDog, searchDogs } from "../api/api";

export const useLogin = () => {
    return useMutation({
        mutationFn: login
    })
}

export const useLogout = () => {
    return useMutation({
        mutationFn: logout
    })
}

export const useGetBreeds = () => {
    return useQuery({
        queryKey: ['breeds'],
        queryFn: getBreeds
    })
}

// combine search and get
export const useSearchDogs = (filters: { breeds?: string[]; zipCodes?: string[]; ageMin?: number; ageMax?: number; size?: number; from?: string; sort?: string}) => {

    // search
    const { data: dogId, isLoading: isLoadingDogIg, refetch } = useQuery({
        queryKey: ['dogIds', filters],
        queryFn: () => searchDogs(filters)
    })
    
    // get dogs
    const { data: dogDatas, isLoading: isLoadingDogs } = useQuery({
        queryKey: ['dogs', dogId?.resultIds || []],
        queryFn: () => getDogs(dogId?.resultIds || []),
        enabled: !!dogId?.resultIds
    })

    return {
        dogDatas,
        isLoading: isLoadingDogIg || isLoadingDogs,
        refetch
    }
}

export const useGetDogs = () => {
    return useMutation({
        mutationFn: getDogs
    })
}

export const useMatchDog = () => {
    return useMutation({
        mutationFn: matchDog
    })
}
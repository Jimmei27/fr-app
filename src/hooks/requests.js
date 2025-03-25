import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getBreeds,
  getDogs,
  login,
  logout,
  matchDog,
  searchDogs,
} from '../api/api';
export var useLogin = function () {
  return useMutation({
    mutationFn: login,
  });
};
export var useLogout = function () {
  return useMutation({
    mutationFn: logout,
  });
};
export var useGetBreeds = function () {
  return useQuery({
    queryKey: ['breeds'],
    queryFn: getBreeds,
  });
};
// combine search and get
export var useSearchDogs = function (filters) {
  // search
  var _a = useQuery({
      queryKey: ['dogIds', filters],
      queryFn: function () {
        return searchDogs(filters);
      },
    }),
    dogId = _a.data,
    isLoadingDogIg = _a.isLoading,
    refetch = _a.refetch;
  // get dogs
  var _b = useQuery({
      queryKey: [
        'dogs',
        (dogId === null || dogId === void 0 ? void 0 : dogId.resultIds) || [],
      ],
      queryFn: function () {
        return getDogs(
          (dogId === null || dogId === void 0 ? void 0 : dogId.resultIds) || []
        );
      },
      enabled: !!(dogId === null || dogId === void 0
        ? void 0
        : dogId.resultIds),
    }),
    dogDatas = _b.data,
    isLoadingDogs = _b.isLoading;
  return {
    dogDatas: dogDatas,
    isLoading: isLoadingDogIg || isLoadingDogs,
    refetch: refetch,
  };
};
export var useGetDogs = function () {
  return useMutation({
    mutationFn: getDogs,
  });
};
export var useMatchDog = function () {
  return useMutation({
    mutationFn: matchDog,
  });
};

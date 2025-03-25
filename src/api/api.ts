import axios from 'axios';

const BASE_URL = 'https://frontend-take-home-service.fetch.com';

const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// Login
export const login = async (data: { name: string; email: string }) => {
  const response = await apiClient.post('/auth/login', data);
  return response.data;
};

// Logout
export const logout = async () => {
  return apiClient.post('/auth/logout');
};

// Dog Breeds
export const getBreeds = async (): Promise<Record<string, string>[]> => {
  const response = await apiClient.get('/dogs/breeds');
  return response.data;
};

// Search dog
export const searchDogs = async (filters: {
  breeds?: string[];
  zipCodes?: string[];
  ageMin?: number;
  ageMax?: number;
  size?: number;
  from?: string;
  sort?: string;
}) => {
  const params = new URLSearchParams();

  if (filters.breeds) params.append('breeds', filters.breeds.join(','));
  if (filters.from) params.append('from', filters.from);
  if (filters.size) params.append('size', filters.size.toString());
  if (filters.ageMin) params.append('ageMin', filters.ageMin.toString());
  if (filters.ageMax) params.append('ageMax', filters.ageMax.toString());
  if (filters.zipCodes) params.append('zipCodes', filters.zipCodes.toString());

  const response = await apiClient.get(`/dogs/search?${params.toString()}`);
  return response.data;
};

// Get Dog
export const getDogs = async (data: string[]) => {
  if (!data.length) return [];
  const response = await apiClient.post('/dogs', data);
  return response.data;
};

// Match Dog
export const matchDog = async (data: string[]) => {
  const response = await apiClient.post('/dogs/match', data);
  return response.data;
};

import axios from 'axios';
import type { ContactFormData, ContactResponse } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const submitContact = async (data: ContactFormData): Promise<ContactResponse> => {
  const response = await api.post<ContactResponse>('/api/contact', data);
  return response.data;
};

export const checkHealth = async (): Promise<{ status: string }> => {
  const response = await api.get('/api/health');
  return response.data;
};

export default api;

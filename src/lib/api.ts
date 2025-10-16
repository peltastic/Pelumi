import axios from 'axios';
import { config } from './config';

// Types for the API response
export interface Project {
  id: number;
  documentId: string;
  title: string;
  description: string;
  link: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ProjectsResponse {
  data: Project[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Create axios instance with base configuration
const api = axios.create({
  baseURL: config.strapiApiBaseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API service functions
export const projectsApi = {
  // Get all projects
  getProjects: async (): Promise<Project[]> => {
    try {
      const response = await api.get<ProjectsResponse>('/projects');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  },
};

export default api;

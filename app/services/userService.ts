import axiosClient from './api';

// Tipos para las operaciones del usuario
export interface User {
  id_users?: number;
  name: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
 // Opcional porque lo asigna el backend
}

export interface UpdateUserDto {
  name?: string;
  lastname?: string;
  username?: string;
  email?: string;
  password?: string;
}

// Obtener todos los usuarios
export const getAllUsers = async (): Promise<User[]> => {
  try {
    const response = await axiosClient.get<User[]>('/user');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Obtener un usuario por ID
export const getUserById = async (id_users: number): Promise<User> => {
  try {
    const response = await axiosClient.get<User>(`/user/${id_users}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw error;
  }
};

// Crear un nuevo usuario
export const createUser = async (user: Omit<User, 'id_users' | 'creationDate'>): Promise<User> => {
  try {
    const response = await axiosClient.post<User>('/user', user);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    console.log(JSON.stringify(error))
    throw error;
  }
};

// Eliminar un usuario por ID
export const deleteUserById = async (id_users: number): Promise<void> => {
  try {
    await axiosClient.delete(`/user/${id_users}`);
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

// Actualizar un usuario por ID
export const updateUserById = async (
  id_users: number,
  user: UpdateUserDto
): Promise<User> => {
  try {
    const response = await axiosClient.patch<User>(`/user/${id_users}`, user);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

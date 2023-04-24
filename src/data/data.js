import { del, get, post, put } from './api.js';

export const getAll = async () =>
  get('/data/pets?sortBy=_createdOn%20desc&distinct=name');

export const getById = async (id) => get(`/data/pets/${id}`);

export const deleteById = async (id) => del(`/data/pets/${id}`);

export const create = async (data) => {
  const result = await post('/data/pets', data);
  return result;
};

export const editById = async (id, data) => {
  const result = await put(`/data/pets/${id}`, data);
  return result;
};

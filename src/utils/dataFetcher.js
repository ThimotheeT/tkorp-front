import api from './api';

export async function fetchPersons() {
  try {
    const response = await api.get('/persons');
    return response.data;
  } catch (error) {
    console.error('Error fetching persons:', error);
    return [];
  }
}

export async function fetchAnimals() {
  try {
    const response = await api.get('/animals');
    return response.data;
  } catch (error) {
    console.error('Error fetching animals:', error);
    return [];
  }
}

export async function fetchAnimalById(id) {
  try {
    const response = await api.get(`/animals/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching animal:', error);
    return null;
  }
}

export async function fetchPersonById(id) {
  try {
    const response = await api.get(`/persons/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching person:', error);
    return null;
  }
}

export async function fetchAnimalsByPersonId(personId) {
  try {
    const response = await api.get(`/animals/person/${personId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching animals for person:', error);
    return [];
  }
}
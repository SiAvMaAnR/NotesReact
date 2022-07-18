import axios from "axios";

export const notesApi = {
  addNote: async (params) => {
    const body = {
      title: params['title'],
      description: params['description'],
      eventDate: params['eventDate'],
      isDone: params['isDone'],
      isFavorite: params['isFavorite']
    }

    const config = {
      headers: {
        'accept': '*/*',
        'Authorization': `Bearer ${params['token']}`,
        'Content-Type': 'application/json'
      }
    }

    return axios.post('http://localhost:8080/api/Note/Add', body, config)
      .then(response => response.data)
      .catch(error => null)
  },

  getAllNotes: async (params) => {
    const config = {
      headers: {
        'accept': '*/*',
        'Authorization': `Bearer ${params['token']}`,
      }
    }

    return axios.get(`http://localhost:8080/api/Note/Get?PageNumber=${params['pageNumber']}&PageSize=${params['pageSize']}&Sort=${params['sort']}`, config)
      .then(response => response.data)
      .catch(error => null)
  },

  getFavoriteNotes: async (params) => {
    const config = {
      headers: {
        'accept': '*/*',
        'Authorization': `Bearer ${params['token']}`,
      }
    }

    return axios.get(`http://localhost:8080/api/Note/Get/Favorite?PageNumber=${params['pageNumber']}&PageSize=${params['pageSize']}&Sort=${params['sort']}`, config)
      .then(response => response.data)
      .catch(error => null)
  },

  getNote: async (params) => {

  },

  deleteNote: async (params) => {
    const config = {
      headers: {
        'accept': '*/*',
        'Authorization': `Bearer ${params['token']}`,
        'Content-Type': 'application/json'
      },
      data: params['id']
    }

    return axios.delete('http://localhost:8080/api/Note/Delete', config)
      .then(response => response.status === 200)
      .catch(error => null)
  },

  setIsDonedNote: async (params) => {
    const body = {
      id: params['id'],
      isDone: params['isDone']
    }

    const config = {
      headers: {
        'accept': '*/*',
        'Authorization': `Bearer ${params['token']}`,
        'Content-Type': 'application/json'
      },
    }

    return axios.put('http://localhost:8080/api/Note/Done', body, config)
      .then(response => response.data)
      .catch(error => null)
  },

  setIsFavoriteNote: async (params) => {
    const body = {
      id: params['id'],
      isFavorite: params['isFavorite']
    }

    const config = {
      headers: {
        'accept': '*/*',
        'Authorization': `Bearer ${params['token']}`,
        'Content-Type': 'application/json'
      },
    }

    return axios.put('http://localhost:8080/api/Note/Favorite', body, config)
      .then(response => response.data)
      .catch(error => null)
  }
}

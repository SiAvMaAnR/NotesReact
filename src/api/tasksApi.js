import axios from "axios";

export const tasksApi = {
  addTask: async (params) => {
    const body = {
      title: params['title'],
      description: params['description'],
      eventDate: params['eventDate'],
      isDone: params['isDone']
    }

    const config = {
      headers: {
        'accept': '*/*',
        'Authorization': `Bearer ${params['token']}`,
        'Content-Type': 'application/json'
      }
    }

    return axios.post('http://localhost:8080/api/Note', body, config)
      .then(response => response.data)
      .catch(error => null)
  },

  getAllTasks: async (params) => {
    const config = {
      headers: {
        'accept': '*/*',
        'Authorization': `Bearer ${params['token']}`,
      }
    }

    return axios.get(`http://localhost:8080/api/Note?PageNumber=${params['pageNumber']}&PageSize=${params['pageSize']}&Sort=${params['sort']}`, config)
      .then(response => response.data)
      .catch(error => null)
  },

  getTask: async (params) => {

  },

  deleteTask: async (params) => {
    const config = {
      headers: {
        'accept': '*/*',
        'Authorization': `Bearer ${params['token']}`,
        'Content-Type': 'application/json'
      },
      data: params['id']
    }

    return axios.delete('http://localhost:8080/api/Note', config)
      .then(response => response.status === 200)
      .catch(error => null)
  },

  setIsDoneTask: async (params) => {
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
  }

}

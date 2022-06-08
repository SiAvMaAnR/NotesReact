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

    return axios.get(`http://localhost:8080/api/Note?PageNumber=${params['pageNumber']}&PageSize=${params['pageSize']}`, config)
      .then(response => response.data)
      .catch(error => null)
  },

  getTask: async () => {

  }

}

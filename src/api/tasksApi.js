import axios from "axios";

export const tasksApi = {
  addTask: async () => {

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
      .catch(error => undefined)
  },

  getTask: async () => {

  }

}

import axios from "axios";

export const accountApi = {
    login: async (params) => {
        const body = {
            email: params['email'],
            password: params['password']
        };

        const config = {
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json',
            }
        }

        return axios.post(`http://localhost:8080/api/Account/Login`, body, config)
            .then(response => response.data)
            .catch(error => null);
    },
    register: async (params) => {
        const body = {
            email: params['email'],
            login: params['login'],
            password: params['password'],
            confirmPassword: params['confirmPassword'],
            firstname: params['firstname'],
            surname: params['surname'],
            age: params['age']
        };

        const config = {
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json',
            }
        }

        return axios.post(`http://localhost:8080/api/Account/Register`, body, config)
            .then(response => response.data)
            .catch(error => null);
    },
    info: async (params) => {
        const config = {
            headers: {
                'accept': '*/*',
                'Authorization': `Bearer ${params['token']}`,
            }
        }

        return axios.get(`http://localhost:8080/api/Account/Info`, config)
            .then(response => response.data)
            .catch(error => null);
    },
    edit: async (params) => {
        const body = {
            login: params['login'],
            firstname: params['firstname'],
            surname: params['surname'],
            image: params['image'],
            age: params['age']
        };

        const config = {
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${params['token']}`,
            }
        }

        return axios.put(`http://localhost:8080/api/Account/Edit`, body, config)
            .then(response => response.data)
            .catch(error => null);
    }

}
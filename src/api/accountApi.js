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
            .catch(error => undefined);
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
            .catch(error => undefined);
    },
    
}
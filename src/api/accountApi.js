import axios from "axios";

export const accountApi = {
    login: async (email, password) => {
        try {
            const body = {
                email: email,
                password: password
            };

            const config = {
                headers: {
                    'accept': '*/*',
                    'Content-Type': 'application/json',
                }
            }

            let result = await axios.post(`http://localhost:8080/api/Account/Login`, body, config);
            return result.data;
        } catch (error) {
            console.log(error)
            return undefined;
        }
    }
}
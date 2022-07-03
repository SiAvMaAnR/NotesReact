export const tokenService = {

    getExpirationDate: (token) => {
        try {
            let jwt = JSON.parse(atob(token.split('.')[1]));
            return (jwt && jwt.exp && jwt.exp * 1000) || undefined;

        } catch (error) {
            return undefined;
        }
    },

    isExpired: (lifeTime) => {
        try {
            return (lifeTime) ? (Date.now() > lifeTime) : false;

        } catch (error) {
            return undefined;
        }
    },

    timeLeft: (lifeTime) => {
        try {
            return lifeTime - Date.now();
        }
        catch (error) {
            return undefined;
        }
    }
}

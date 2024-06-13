const ACCESS_TOKEN = 'ACCESS_TOKEN';

export const setAccessToken = (token) => localStorage.setItem(ACCESS_TOKEN ,token) // key name token // add token

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN) // read token

export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN) // delete token
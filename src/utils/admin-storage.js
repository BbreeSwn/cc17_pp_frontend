const ADMIN_TOKEN = 'ADMIN_ACCESS_TOKEN';

export const setAdminAccessToken = (token) => localStorage.setItem(ADMIN_TOKEN ,token) // key name token // add token

export const getAdminAccessToken = () => localStorage.getItem(ADMIN_TOKEN) // read token

export const removeAdminAccessToken = () => localStorage.removeItem(ADMIN_TOKEN) // delete token
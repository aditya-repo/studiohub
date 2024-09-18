// const API_BASE_URL = "https://backend.photographercompany.com";
const API_BASE_URL = "http://localhost:4000";


const URL = {
  BASE: () => API_BASE_URL,
  GET_CLIENT_DETAILS: (clientId) => `${API_BASE_URL}/clients/${clientId}`,


  LOGIN: () => `${API_BASE_URL}/login`,
  GET_DASHBOARD_DETAILS: () => `${API_BASE_URL}/admin`,
  POST_STUDIO_SIGNUP: () => `${API_BASE_URL}/admin/studio-signup`,
};

export default URL;

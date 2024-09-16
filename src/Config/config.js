const API_BASE_URL = "https://backend.photographercompany.com";

const API_URLS = {
  GET_CLIENT_DETAILS: (clientId) => `${API_BASE_URL}/clients/${clientId}`,
};

export default API_URLS;

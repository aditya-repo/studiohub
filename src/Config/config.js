// const BASE = "https://backend.photographercompany.com";
const BASE = "http://localhost:4000";

const URL = {
  BASE: () => BASE,

  ADMIN_LOGIN: () => `${BASE}/admin-login`,
  STUDIO_LOGIN: () => `${BASE}/login`,
  GET_DASHBOARD_DETAILS: () => `${BASE}/admin`,
  // GET_STUDIO_DASHBOARD: () => `${BASE}/studio`,
  POST_STUDIO_SIGNUP: () => `${BASE}/admin/studio-signup`,
  GET_STUDIO_BASIC_INFO: (studiocode) =>
    `${BASE}/admin/studio-info/${studiocode}`,
  POST_STUDIO_BASIC_INFO: (studiocode) =>
    `${BASE}/admin/studio-info/${studiocode}`,
  GET_CLIENT_DETAILS: (clientId) => `${BASE}/clients/${clientId}`,

  // Studio Routes

  GET_STUDIO_DASHBOARD: () => `${BASE}/studio`,
  GET_ALL_CLIENT: () => `${BASE}/studio/clients`,
  GET_DELETED_CLIENT: () => `${BASE}/studio/clients`,

  GET_SINGLE_CLIENT: (clientid) => `${BASE}/studio/client/${clientid}`,
  POST_CREATE_SINGLE_CLIENT: () => `${BASE}/studio/client`,
  POST_UPDATE_SINGLE_CLIENT: (clientid) => `${BASE}/studio/client/${clientid}`,
  DELETE_SINGLE_CLIENT: (studiocode) => `${BASE}/studio/client/${studiocode}`,

  GET_PRO_USERS: (studiocode) => `${BASE}/prouser/${studiocode}`,
  DELETE_PRO_USER: (studiocode) => `${BASE}/prouser/${studiocode}`,
  GET_CLIENT_SERVICE: (clientid) => `${BASE}/studio/service/${clientid}`,
  POST_CREATE_SINGLE_CLIENT_SERVICE: (clientid) =>
    `${BASE}/studio/service/${clientid}`,

  GET_UPLOAD_DATA: (clientid) => `${BASE}/studio/upload-data/${clientid}`,
  DELETE_FOLDER: (clientid) => `${BASE}/studio/upload-data/${clientid}`,

  DECOMPRESSION: (clientid) => `${BASE}/studio/decompress/${clientid}`,

  // Admin Routes

  POST_ADMIN_NEW_CLIENT: (studiocode) =>
    `${BASE}/admin/${studiocode}/new-client`,
  GET_ADMIN_ALL_CLIENT: (studiocode) => `${BASE}/admin/${studiocode}/clients`,
  GET_ADMIN_SINGLE_CLIENT: (clientid) => `${BASE}/admin/client/${clientid}`,
  GET_ADMIN_SINGLE_STUDIO_CREDIT: (studiocode) =>
    `${BASE}/admin/${studiocode}/wallet`,
  POST_ADMIN_SINGLE_STUDIO_CREDIT: (studiocode) =>
    `${BASE}/admin/${studiocode}/wallet`,
  GET_ADMIN_SINGLE_STUDIO_TRANSACTION: (studiocode) =>
    `${BASE}/admin/${studiocode}/transaction`,

  GET_PUBLIC: (clientid) => `${BASE}/studio/public/${clientid}`,
};

export default URL;

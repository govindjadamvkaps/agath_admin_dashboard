import axios from "axios";
// import { toast } from "react-toastify";
// import { logout } from "./slice/authSlice";
import { AppDispatch } from "./store";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let store: { dispatch: AppDispatch } | null = null;

export const configureApiClient = (reduxStore: { dispatch: AppDispatch }) => {
  store = reduxStore;
};

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 403) {
    //   toast.error("Session expired. Please log in again.");
    //   store?.dispatch(logout());
    }
    return Promise.reject(error);
  }
);

export default apiClient;

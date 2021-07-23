import { toast } from "react-toastify";

export const toastSuccess = (message) =>  {
  toast.success(message, {
    position: "bottom-left",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });      
};

export const toastError = (message) => {
  toast.error(`${message}`, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });    
};
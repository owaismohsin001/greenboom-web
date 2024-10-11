import toast from 'react-hot-toast';

const toastConfig = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const successToast = (message: string) => {
  // @ts-ignore
  console.log('toast', toast);
  toast.success(message);
};

const errorToast = (message: string) => {
  // @ts-ignore
  toast.error(message);
};

export { successToast, errorToast };

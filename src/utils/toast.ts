import { toast } from 'react-toastify'
interface ToastConfig {
  position: 'top-right'
  autoClose: number
  hideProgressBar: boolean
  closeOnClick: boolean
  pauseOnHover: boolean
  draggable: boolean
  progress: undefined
  theme: 'light' | 'dark'
}

const toastConfig: ToastConfig = {
  position: 'top-right',
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
}

export const showSuccessToast = (message: string) => {
  toast.success(message, toastConfig)
}
export const showInfoToast = (message: string) => {
  toast.info(message, toastConfig)
}
export const showWarningTost = (message: string) => {
  toast.warning(message, toastConfig)
}
export const showErrorTost = (message: string) => {
  toast.error(message, toastConfig)
}

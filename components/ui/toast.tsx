import { toast } from "sonner"


export default function Alert(message: string, type: 'error' | 'success' | 'info' | 'warning') {
    switch (type) {
        case "error":
            return toast.error(message)
        case "success":
            return toast.success(message)
        case 'info':
            return toast.info(message)
        case "warning":
            return toast.warning(message)    
        default:
            break;
    }
}
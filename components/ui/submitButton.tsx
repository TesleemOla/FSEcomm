import { useFormStatus } from "react-dom"
export default function SubmitBtn({dataStr}:{dataStr:string}){
    const { pending } = useFormStatus()

    return <button disabled={pending} className="border-1 border-black p-2 px-4 bg-blue-700 text-white" >
    {!pending ? dataStr: "...Loading"}
    </button>
}
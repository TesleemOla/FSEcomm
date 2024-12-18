"use client"
import { supabase } from "@/utils/supabase/client"
import SubmitBtn from "./submitButton"
// import { useRef } from "react"
import Alert from "./toast"
export default function UploadFile(){

    // const inputRef = useRef<HTMLInputElement>(null)
    

     async function uploadFn(formData: FormData){
        const image = formData.get("imagefile") as File
        
        // get file extension
        const fileExt = image?.name.split('.').pop()

        const { error } = await supabase.
        storage.from("products")
        .upload(`public/${image?.name}.${fileExt}`, image)
        if(error){
            console.error(error)
            Alert("error uploading file. Please try again!","error")
        }else{
            Alert("image upload successfull", "success")
        }
        
    }

    // function handleSelect(){
    //     inputRef?.current?.click()
    // }

    return (
        <div className="w-1/4 text-center">
            <form action={uploadFn} className="flex flex-col gap-5">
            <input type="file" name="imagefile" accept="image/*"  />
            <SubmitBtn dataStr="Upload" />
        </form>
        </div>
    )
}
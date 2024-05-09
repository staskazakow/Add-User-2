import { useState } from "react"

export const useFetching = (callback) => {
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState("")
    async function Fetching(...args) {
        try{
            setIsLoading(true)
            await callback(...args)
        }
        catch(e){
            setError(e.message)
        }
        finally{
            setIsLoading(false)
        }
    }
    return[Fetching,isLoading,error]
}
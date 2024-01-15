import { useState, useEffect } from 'react'
import { server_calls } from '../api/server'
import { auth} from '../config/firebase'

export const useGetData = () => {
    const [ PlantData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        console.log(auth.currentUser?.uid)
        const result = await server_calls.get(auth.currentUser?.uid);
        setData(result)
        console.log(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [auth.currentUser])

    return { PlantData, getData:handleDataFetch}
}
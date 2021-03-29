import { useEffect, useState } from "react"
import UserApi from "../api/UserApi";

const GetLogin =  (url) => {
    const [data,setData] = useState([])
    const [errors,setErrors] = useState(null);
    useEffect( () => {
        // fetch(url)
        //     .then(res => {
        //         if(!res.ok){
        //             throw Error('Could not fetch data for that resource')
        //         }
        //         return res.json();
        //     })
        //     .then(data => {
        //         setData(data);
        //         setErrors(null);
        //     })
        //     .catch( (err) => {
        //         setErrors(err.message)
        //     })
        const getListUser = async () => {
            try {
                const response = await UserApi.getAll();
                setData(response);
            } catch (error) {
                console.log('failed to fetch polls list')
                setErrors(error.message);
            }
        }
        getListUser();
    }, [])
    return {data,errors};
}
export default GetLogin;
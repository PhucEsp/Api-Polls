import { useEffect, useState } from "react"
import UserApi from "../api/UserApi";

const GetLogin =  (url) => {
    const [data,setData] = useState([])
    const [errors,setErrors] = useState(null);
    useEffect( () => {
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
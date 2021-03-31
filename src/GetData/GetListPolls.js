import { useEffect, useState } from "react";
import axios from 'axios';
import PollsListApi from "../api/PollsListApi";
const GetListPolls =  () => {
    const [data,setData] = useState([])
    const [errors,setErrors] = useState(null);
    useEffect( () => {
        const fetchPollList = async () => {
            try {
                const response = await PollsListApi.getAll();
                setData(response);
            } catch (error) {
                console.log('failed to fetch polls list')
                setErrors(error.message);
            }
        }
        fetchPollList();
    }, [])

    return {data,errors};
}
export default GetListPolls;
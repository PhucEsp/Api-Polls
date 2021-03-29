import { useEffect, useState } from "react";
import axios from 'axios';
import PollsListApi from "../api/PollsListApi";
const GetListPolls =  () => {
    const [data,setData] = useState([])
    const [errors,setErrors] = useState(null);
    useEffect( () => {
        // axios.get('http://localhost:8081/polls')
        //  .then(res => {
        //      setData(res.data);
        //   })
        //  .catch(error =>setErrors(error.message));

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
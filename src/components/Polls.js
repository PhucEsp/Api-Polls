import React from 'react'
import GetListPolls from '../GetData/GetListPolls';
import { useEffect, useState } from "react";
import axios from 'axios';
function Polls() {
    // const {listpolls, messageErr} = GetListPolls(URL_Polls);
    // const [data,setData] = useState([])
    // const [errors,setErrors] = useState(null);
    // const [isPending,setIsPending] = useState(true)

    // useEffect( () => {
    //     axios.get('http://localhost:8081/polls')
    //      .then(res => {
    //          setData(res.data);
    //       })
    //      .catch(error =>setErrors(error.message));
    // }, [])
    const {data,errors} = GetListPolls();

    console.log(data);
    if(data === undefined) {
        return (
            <div className="list-polls">
            <div className="container-mainpage">
                <h1>There is no poll <br/> Click "Create a poll" to create one</h1>
            </div>
        </div>
        )
    }

    const ListPolls = data.map(poll => {
            <div className="card">
                <div className="card-header">
                    <p>{data.options}</p> 
                    <a>
                        <i class="fas fa-backspace"></i>
                    </a>
                </div>
                <div className="card-content" >
                    <div className="option first-option">
                        <p>{data.question1} : 22</p>
                    </div>
                    <div className="option second-option">
                           <p>{data.question2} : 22</p>
                    </div>
                </div>                            
            </div>      
    })
        return( 
            <div className="list-polls ">
                <div className="items container-mainpage">
                <h1>Polls list</h1>
                    <div className="wrap-card">
                       {
                           data.map((poll) => (
                            <div className="card" key={poll.id}>
                                <div className="card-header">
                                    <p>{poll.options}</p> 
                                    <a>
                                        <i class="fas fa-backspace"></i>
                                    </a>
                                </div>
                                <div className="card-content" >
                                    <div className="option first-option">
                                        <p>{poll.question1} : 22</p>
                                    </div>
                                    <div className="option second-option">
                                        <p>{poll.question2} : 22</p>
                                    </div>
                                </div>                            
                            </div>   
                           ))
                       }

                    </div>

                    
                </div>
            </div>
        )
}

export default Polls;
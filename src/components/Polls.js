import React from 'react'
import GetListPolls from '../GetData/GetListPolls';
import { useState, useEffect } from "react";
import PollsListApi from '../api/PollsListApi';

function Polls() {
   
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
    },)

    const updateQuestion1 = (poll) => {
        setTimeout(() => {
            const pollUpdate = {
                question1vote: poll.question1vote + 1,
            }
            PollsListApi.update(poll.id, pollUpdate);
        }, 300);
    }

    const updateQuestion2 = (poll) => {
        setTimeout(() => {
            const pollUpdate = {
                question2vote: poll.question2vote + 1,
            }
            PollsListApi.update(poll.id, pollUpdate);
        }, 300);
    }



    const DeletePoll = (poll) => {
        let id = poll.id;   
        try {
            PollsListApi.dedete(id);
            const newListPolls = [...data];
            newListPolls.splice(1,1);
        } catch (error) {
            console.log(error.message);
        }
    }

    if(data.length == 0) {
        return (
            <div className="list-polls">
            <div className="no-poll container-mainpage">
                <h1>There is no poll <br/> Click "Create a poll" to create one</h1>
            </div>
        </div>
        )
    }
    else
        return( 
            
            <div className="list-polls ">
                <div className="items container-mainpage">
                    <h1 className="pollList">Polls list</h1>
                    <div className="wrap-card">
                       {
                           data && (
                            data.map((poll) => (
                                <div className="card" key={poll.id}>
                                    <div className="card-header" >
                                        <p>{poll.options}</p> 
                                        <a onClick={() => DeletePoll(poll)}>
                                            <i class="fas fa-backspace"></i>
                                        </a>
                                    </div>
                                    <div className="card-content" >
                                        <div className="option first-option" onClick={() => updateQuestion1(poll)}>
                                            <p>{poll.question1} : {poll.question1vote}</p>
                                        </div>
                                        <div className="option second-option" onClick={() => updateQuestion2(poll)}>
                                            <p>{poll.question2} : {poll.question2vote}</p>
                                        </div>
                                    </div>                            
                                </div>   
                               ))
                           )
                       }

                    </div>

                    
                </div>
            </div>
        )
}

export default Polls;
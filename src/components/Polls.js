import React from 'react'
import GetListPolls from '../GetData/GetListPolls';
import { useState, useEffect } from "react";
import PollsListApi from '../api/PollsListApi';
import { fetchPolls, deletePoll, addNewPoll } from '../actions/pollAction';
import { connect } from 'react-redux';

function Polls({pollsData, fetchPolls, actDeletePoll}) {
   
    // const [data,setData] = useState([])
    const [errors,setErrors] = useState(null);
    const [flag, setFlag] = useState(false);
    const [styleQuestion1, setStyleQuestion1] = useState([]);
    const [styleQuestion2, setStyleQuestion2] = useState([]);
    const [isPendding, setIsPendding] = useState(false);

    

    useEffect( () => {
        setTimeout (() => {
            fetchPolls()
        })
    },[])

    const data = [...pollsData.data];

    const updateQuestion1 = (poll) => {
        setTimeout(() => {
            const pollUpdate = {
                question1vote: poll.question1vote + 1,
            }
            PollsListApi.update(poll.id, pollUpdate);
            setFlag(!flag);
        }, 400);
    }

    const updateQuestion2 = (poll) => {
        setTimeout(() => {
            const pollUpdate = {
                question2vote: poll.question2vote + 1,
            }
            PollsListApi.update(poll.id, pollUpdate);
            setFlag(!flag);
        }, 400);
    }

    // const DeletePoll = (poll) => {
    //     let id = poll.id;   
    //     try {
    //         PollsListApi.dedete(id);
    //         setFlag(!flag);
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }

    const DeleteAPoll = (id) => {
        // deletePoll(id),
        actDeletePoll(id);
        setFlag(!flag);      
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
                                        <a onClick={() => DeleteAPoll(poll.id)}>
                                            <i class="fas fa-backspace"></i>
                                        </a>
                                    </div>
                                    <div className="card-content" >
                                       
                                        <div className="option first-option" onClick={() => updateQuestion1(poll)}>
                                            <div id="wrap-option"  style= {styleQuestion1}> 
                                            </div>
                                            <p>{poll.question1} : <b> {poll.question1vote} </b></p>
                                        </div>

                                        <div className="option second-option" onClick={() => updateQuestion2(poll)}>
                                            <div id="wrap-option"  style= {styleQuestion2}> 
                                            </div>
                                            <p>{poll.question2} : <b> {poll.question2vote} </b></p>
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

const mapStateToProps = state => {
    return {
      pollsData: state.polls
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchPolls: () =>{
        dispatch(fetchPolls())
      },
      actDeletePoll: (id) =>  {
        dispatch(deletePoll(id))
      },
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Polls);
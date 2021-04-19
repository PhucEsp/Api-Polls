import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import {useHistory} from 'react-router-dom'
import { addNewPoll } from '../actions/pollAction';
import PollsListApi from '../api/PollsListApi';
import Polls from './Polls'

function CreatePoll({actAddNewPoll}) {
    const [option, setOption] = useState('');
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [errors, setErrors] = useState('');
    const [checkSuccess, setCheckSuccess] = useState(false);
    const history = useHistory();

    // const addNewPoll = (newpoll) => {
    //     // try {
    //     //     await PollsListApi.add(newpoll);
    //     //     setCheckSuccess(true);
    //     // } catch (error) {
    //     //     console.log('failed to add new poll ' , errors.message);
    //     //     setErrors(error);
    //     // }
    //     addNewPoll(newpoll);
    //     setCheckSuccess(true);
    // }

    const checkValidation =  () => {
        if(option === '' || question1 ==='' || question2==='') {
            return true;
        }
        return false;
    }

    const submitForm = (e) => {
        e.preventDefault();
        // alert("button clicked")
        const newpoll = {
            "options": option,
            "question1": question1,
            "question2": question2,
            "question1vote": 0,
            "question2vote": 0
        }
        console.log(checkValidation());
        if(!checkValidation()) {
            actAddNewPoll(newpoll);
            history.push('/mainpage/polls');
        }
        else {
            alert("Please provide the question, option 1 and option 2")
        }
    }
    return( 
        <div className="Create-poll">
            <div className="container-mainpage">
                <h1>Create a poll </h1>
                <div className="form-create">
                    <form onSubmit={submitForm}>
                        <div className="option">
                            <label>Question</label>
                            <div className="control-input">
                                <input type="text" placeholder="Text input"
                                onChange={(e) => {setOption(e.target.value)}} 
                                value={option}></input>
                            </div>
                        </div>
                        <div className="option">
                            <label>Option 1</label>
                            <div className="control-input">
                                <input type="text" placeholder="Text input"
                                onChange={(e) => {setQuestion1(e.target.value)}}
                                value={question1}></input>
                            </div>
                        </div>
                        <div className="option">
                            <label>Option 2</label>
                            <div className="control-input">
                                <input type="text" placeholder="Text input"
                                onChange={(e) => {setQuestion2(e.target.value)}}
                                value={question2}></input>
                            </div>
                        </div>
                        <div className="control-button">
                            <button type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
    
}

const mapStateToProps = state => {
    return {
        PollData: state.polls,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actAddNewPoll: (poll) => {
            dispatch(addNewPoll(poll))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreatePoll);
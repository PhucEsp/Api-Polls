import React from 'react'
import { connect} from 'react-redux';

function Test(PollsData) {

    
    console.log('data ------------ ' , PollsData)
    return (
        <div>
            Trang test
        </div>
    )
}

const mapStateToProps = state => {
    return {
        PollsData: state.polls,
    }
}

export default connect(mapStateToProps) (Test)

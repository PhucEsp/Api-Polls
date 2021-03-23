import React from 'react'
function SignInform() {
    return (
        <div>
               <form>
                   <div className="input-Email" >
                        <label>Email </label>
                        <input type="email" className="inputEmail" ></input>
                        <div className="show-error" ></div>
                   </div>
                </form>
           </div>
    )
}
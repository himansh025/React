import React, { useContext } from 'react'
import Usercontext from '../context/Context'

function Profile() {
const {user}= useContext(Usercontext)
if(!user){
     return <h1 >please login </h1>}
    //  else{
  return <h1>welcome {user.username} </h1>
// }

  
}

export default Profile
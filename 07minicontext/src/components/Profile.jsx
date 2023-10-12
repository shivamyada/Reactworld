import React from "react";
import Usercontext from "../context/usercontext";

function Profile(){
    const{user}=useContext(UserContext)
if(!user) return <div>please login</div>

return<div>welcome{User.username}</div>

}
export default Profile 
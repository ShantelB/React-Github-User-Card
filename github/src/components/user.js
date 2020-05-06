import React from 'react';
import Followers from './followers';



const User = props => {
 console.log(props)
      return (
        <div className="todoList">
         <img src={props.users.avatar_url} />
          <h1>{props.users.name}</h1> 
          <h2>{props.users.login}</h2>
          <h3>{props.users.followers}</h3>
          <p>{props.users.bio}</p>
          </div>

      );
  }
  
  export default User;
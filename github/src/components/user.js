import React from 'react';



const User = props => {
 console.log(props)
      return (
        <div className="todoList">
         <img src={props.users.avatar_url} />
          <h1>{props.users.name}</h1> 
          <h2>{props.users.login}</h2>
          <h3>Followers: {props.users.followers}</h3>
          <h3>Following: {props.users.following}</h3>
          <p>{props.users.bio}</p>
          </div>

      );
  }
  
  export default User;
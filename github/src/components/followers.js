import React from 'react';

const Followers = props => {
  
  return (
    <div>
            {props.followers.map(item => (

          <div className="followers">

            <img width="400" src={item.avatar_url} />
           
              <h2>{item.login}</h2>
              
           
          </div>
        ))}
    </div>
    
  );
};

export default Followers;

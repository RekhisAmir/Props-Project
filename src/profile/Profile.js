import React from 'react'

const Profile = (props) => {
    const handleName = () => {
        alert(`My name is ${props.FullName} ${props.bio} ${props.profession}`);
    }
    return (
        <div>
           <h1>{props.FullName}</h1> 
           <h2>{props.bio}</h2>
           <h3>{props.profession}</h3>
               {props.children} 
          <button onClick={handleName}>Click Me</button>
        </div>
    )
}
Profile.defaultProps={
    profession : "net3allam fel react",
};

Profile.propTypes={
    profession : React.PropTypes.string
};


export default Profile


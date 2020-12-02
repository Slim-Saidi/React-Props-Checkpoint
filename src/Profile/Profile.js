import React from "react";
import Pic from '../50cent.jpg';

const Profile = (props) => (
    <section>
        <div className='thispic'> {props.children} </div>
        <h1>{props.fullname}</h1>
        <h3>{props.bio}</h3>
        <h3>{props.profession}</h3>
        <button onClick={ () => props.thisname(props.fullname)}>Click</button>
    </section>
);



export default Profile;
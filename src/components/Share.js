import sortEmails from '../services/sortEmails';
import postData from '../services/postData';
import {useState} from 'react';
import { useLocation } from 'wouter';

import './Share.css';

const emailList = [];
let sortedEmails = [];

export default function Share ({joke}) {
    const [email,setEmail] = useState("");
    const [path, pushLocation] = useLocation();
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        emailList.push(email);
        sortedEmails = sortEmails(emailList);
        console.log(sortedEmails);
        setEmail("");
    }
    const handleChange = (evt) => {
        setEmail(evt.target.value);
    }
    const sendEmails = (evt) => {
        evt.preventDefault();
        if(!emailList.length){
            alert("Enter at least one valid email");
            return;
        }
        //postData(localStorage.getItem("joke"),emailList);
        pushLocation('/sendEmail');
    }

    return <div className="share-container">
        <form onSubmit={handleSubmit}>
            <input className="email-input" onChange={handleChange} type="email" placeholder="Enter emails" value={email}/>
            <button className="add-btn">Add</button>
        </form>
        <div className="email-containter">
            {
                sortedEmails.length ?
                sortedEmails.map((email,index)=> <span key={index} className="email">{email}</span> )
                :
                <></>
            }
        </div>
        <button onClick={sendEmails} className="send-btn">Shot this Joke</button>
    </div>
}
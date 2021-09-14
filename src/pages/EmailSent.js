import { Link } from 'wouter';
import './EmailSent.css';
const successGif = "https://media1.giphy.com/media/qanrUMM3x50mA/giphy.gif?cid=790b76118557a4d0c628d18bcc0d4dcc720d655da9b6f0c8&rid=giphy.gif&ct=g";

export function EmailSent () {
    
    return (
        <div className="message-container">
            <div className="message">Your emails were sent</div>
            <div className="gif">
                <img src={successGif} />
            </div>
            <div className="back-link">
                <Link to="/"><span>Kick back to Jokes</span></Link>
            </div>
        </div>
    )
}
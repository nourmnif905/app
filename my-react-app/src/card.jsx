import profilepic from './assets/cvv.png'
import './card.css';
function Card(){

    return(
        <div className="card">
            <img src={profilepic} alt="profile picture"></img>
            <h2>bro code</h2>
            <p>helloooo</p>
        </div>
    )
}
export default Card;
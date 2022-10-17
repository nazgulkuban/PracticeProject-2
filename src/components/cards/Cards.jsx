import Card from "../UI/Card"
import './Cards.css'


function Cards(props) {
  return (
    <Card className="cards" key={props.id}>
        <div className="block" style={{backgroundColor:props.wallpaper}}>
            <img src={props.profilePic} alt={props.profilePic}/>
            <div className="username">
             <b>{props.username}</b><span>{props.id}</span>
            </div>
            <p>About</p>
            <div>{props.userInfo}</div>
        </div>
        
    </Card>
  )
}

export default Cards
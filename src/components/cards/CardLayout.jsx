import Card from '../UI/Card';
import './CardLayout.css';
import Cards from './Cards';




function CardLayout(props) {
  console.log(props.users)
  return (
    <Card className="cardLayout">
      {props.users.map((item) => {
        return <Cards {...item} key={item.id} />;
      })}
    </Card>
  )
}

export default CardLayout
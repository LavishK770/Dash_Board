 
import { MoreHorizontal } from 'react-feather';
import  './ticket.css'
import Dash_Board from './Dash_Board';
 

function Ticket(props) {
 var key=props.users.id;
 var ticket_boads=props.tickets
  
  return (
    <>
    <div className="column" style={{ width:"18rem", backgroundColor: "#add8e6" }}>
    <pre><h2 id='user_name'>{props.users.name}</h2></pre>
     { ticket_boads.filter(e=>e.userId==key).map((e)=>(<Dash_Board key={e.id} ticket={e}/>))} 
    
  </div>
 </>
  )
  
}

export default Ticket;
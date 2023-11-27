import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchOrder, fetchSuccessTickets } from './Redux/Raction';
import Dash_Board from './Dash_Board'
import "./main.css"
import Ticket from './Ticket'
import { NavLink } from 'react-router-dom'
import { MoreHorizontal } from 'react-feather'

function Main(props) {
    var Tickets=useSelector((state=>state.Tickets))
    let item;
    var Users=useSelector((state=>state.Users))
    console.log(Tickets)
    console.log(Users)
    function shiv(e,Tickets,Users){
      dispatch(fetchOrder(e,Tickets,Users));
      }
    var progress=["Todo" , "Backlog" , "In progress"]
    var loading_tickets=useSelector((state=>state.loading_tickets))
    var Tickets_error=useSelector((state=>state.Tickets_error))
    var dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchSuccessTickets())
    },[])
    if (loading_tickets){
        <h1>loading......</h1>
    }
    else if(Tickets_error){
  <h1>Error ❎{Tickets_error}</h1>
    }
  else{
  return (
     
    <>
     <div className="dropdown">
  <button
    className="btn btn-secondary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
     Display
  </button>
  <ul className="dropdown-menu">
    <li>
      <NavLink className="dropdown-item" to="/">
        Status
      </NavLink>
    </li>
    <li>
    <NavLink className="dropdown-item" to="/Priority" >
         Priority
      </NavLink>
    </li>
    <li>
    <NavLink className="dropdown-item" to="/User" >
         User
      </NavLink>
    </li>
    
  </ul>
</div>
<div className="dropdown">
  <button
    className="btn btn-secondary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
     Sort By
  </button>
  <ul className="dropdown-menu">
    <li>
      <button className="dropdown-item" href="#" onClick={()=>shiv(-1,Tickets,Users)} >
        User
      </button>
    </li>
    <li>
    <button className="dropdown-item" herf="#" onClick={()=>shiv(1,Tickets,Users)} >
         Priority
      </button>
    </li>
   
    
  </ul>
</div>

     <div className="container-fluid pt-5 pb-3">
     <div className="row">
     
  {progress.map((item)=>(
  <div className="column" style={{ backgroundColor: "#add8e6" }}>
   <pre><h4>{item}  <MoreHorizontal/></h4></pre>
    
    {Tickets.filter(e=>e.status==item).map((e)=>(
        
        <Dash_Board key={e.id} ticket={e}/>))}
  </div>
  ))}
</div>
      <div className="row px-xl-10">     
      </div>
    </div>
    </>
  )
}
}
export default Main;
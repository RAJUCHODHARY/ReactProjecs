import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import "./css/Contact.css"
function Contact() {
  return (<>
  <div className='contacsparent'>
 <div className='contacs'>
 <NavLink  className="navlink" to="company">Paragrap</NavLink>
 <NavLink className="navlink"  to="chanale">Sidebar</NavLink>
 <NavLink className="navlink"  to="Other">other</NavLink>
 <NavLink className="navlink" to="useRef">useref</NavLink>
 <NavLink className="navlink" to="usereducer">reducer</NavLink>
 <NavLink className="navlink" to="taxtarea">taxtarea</NavLink>
 <NavLink className="navlink" to="arrayreverser">arrayreverser</NavLink>
 <NavLink className="navlink" to="domainnamesearch">domainnamesearch</NavLink>
<Outlet/></div></div>

  </>);
}

export default Contact;







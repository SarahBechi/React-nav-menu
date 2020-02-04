import React from 'react';
import './App.css';


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
 

};

showDropdownMenu(event) {
    event.preventDefault();
    this.state.displayMenu===false?this.setState({ displayMenu: true }):this.setState({ displayMenu: false })
  }

 

  render() {
    return ( 
        <div className="theList">

            <div className="menu">
        <span>Home</span>
       
        <div  className="dropdown" >
         <div className="button" onMouseOver={this.showDropdownMenu} onMouseOut={this.showDropdownMenu}> Services </div>

          { this.state.displayMenu ? (
          <ul >
         
         <li><a href="#Manage Pages">For Enterpreneurs</a></li>
         <li><a href="#Create Ads">For Students</a></li>
         <li><a href="#Manage Ads">For Hobyists</a></li>
    
          </ul>
        ):
        (
          null
        )
        }

       </div>
       <span>Contact</span> <br></br>

       </div>
       <hr className="line"></hr>
 </div>
    );
  }
}

export default Dropdown;
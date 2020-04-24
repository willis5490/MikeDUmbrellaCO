import React, { Component } from 'react';


class Header extends Component {

  // render nav
  render() {
    return (
      <div style={{backgroundColor:'black'}}>
        {/* <div id='topNav'>

        </div> */}
           <nav id='navBody' className="uk-navbar-container uk-margin uk-margin-auto uk-margin-auto-vertical" uk-navbar='true' >
                <div  id='headerBody'  className="uk-navbar-center uk-margin-auto-vertical ">
                   <h1 id='headerText'  className='uk-margin-auto-vertical uk-text-center '>ASPENLEAF <span><h1 id='headerText'  className='uk-text-center'>VENTURES</h1></span></h1>
                </div>
            </nav>
            <hr className='' id='headeHR'></hr>
      </div>
    );
  }
}


export default Header;
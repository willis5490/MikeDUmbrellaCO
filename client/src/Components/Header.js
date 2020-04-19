import React, { Component } from 'react';


class Header extends Component {

  // render nav
  render() {
    return (
      <div>
        {/* <div id='topNav'>

        </div> */}
           <nav id='navBody' className="uk-navbar-container uk-margin uk-margin-auto uk-margin-auto-vertical" uk-navbar='true' >
                <div  id='headerBody'  className="uk-navbar-center uk-margin-auto-vertical ">
                   <h1 id='headerText'  className='uk-margin-auto-vertical '>ASPENLEAF VENTURES</h1>
                </div>
            </nav>
      </div>
    );
  }
}


export default Header;
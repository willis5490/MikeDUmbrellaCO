import React, { Component } from 'react';


class Header extends Component {

  // render nav
  render() {
    return (
      <div>
        {/* <div id='topNav'>

        </div> */}
           <nav id='navBody' className="uk-navbar-container uk-margin uk-margin-auto uk-margin-auto-vertical" uk-navbar='true' >
                <div className="uk-navbar-center uk-margin-auto-vertical ">
                   <h1>This is Your header bischh</h1>
                </div>
            </nav>
      </div>
    );
  }
}


export default Header;
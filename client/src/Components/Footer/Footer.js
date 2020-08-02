import React, { Component } from 'react';

class Footer extends Component {

  // render nav
  render() {
    return (
     
        <div className='footerWrapper uk-margin-auto-vertical'>
          <div className='uk-container uk-margin-medium-top  uk-visible@m'>
          <h1 className='uk-text-center uk-align-left footerText2 uk-margin-medium-bottom  uk-margin-medium-top'>Call For Inquiries<br></br>401-302-1341</h1>
            <h1 className='uk-text-center uk-align-right footerText uk-margin-medium-bottom  uk-margin-medium-top'>© AspenLeaf Venture</h1>
          </div>

          <div className='uk-container uk-margin-medium-top uk-margin-auto-vertical uk-hidden@m'>
          <h1 className='uk-text-center uk-align-center footerText2  uk-margin-medium-bottom  uk-margin-medium-top'><a style={{color:'white'}}   href="tel:401-302-1341">Call For Inquiries<br></br>401-302-1341</a></h1>
            <h1 className='uk-text-center uk-align-center footerText uk-margin-medium-bottom  uk-margin-medium-top'>© AspenLeaf Venture</h1>
          </div>
        </div>
    );
  }
}


export default Footer;

import React, { Component } from 'react';

class Footer extends Component {
style1={
  borderTop: '2px solid white',
  width: '100%',
  // marginLeft:'40px',
  marginTop:'0px'
}
style2={
  margin:'5px',
  color:'black',
  backgroundColor: 'white'
}
style3={
  margin:'5px',
  color:'white'
}
style4={
  width:'45px',
  height:'35px'
}

style6={
  borderTop: '2px solid white',
  width: '100%',
  marginLeft:'30px',
  marginTop: '20px',
  marginBottom:'10px'
}
  // render nav
  render() {
    return (
      <div>
        <div className='footerWrapper'>
          <div className='uk-container uk-margin-medium-top'>
            <div className='uk-visible@m' uk-grid='true'>
              <div className='uk-width-1-2@m uk-width-1-1 uk-align-center'>
                <img id='footerLogo' className='' src='../images/Mayfly_Icon_WHT.png'></img>
              </div>
              <div className='uk-width-1-2@m uk-width-1-1  uk-margin-auto-vertical'>
                <div className='uk-align-right@m uk-align-center'>
                    <div className='uk-margin-small-bottom uk-align-right@m uk-align-center  '>              
                    <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/mayflywoodworks/?hl=en'><span style={this.style2}  class="uk-icon-button  " uk-icon="icon:instagram"></span></a>
                    <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/mayflywoodworks'><span style={this.style2} class="uk-icon-button " uk-icon="icon:facebook"></span></a>                   
                    </div>
                    <br></br>
                    <div className='uk-margin-remove-bottom uk-align-right@m uk-align-center uk-visible@m' >
                    <ul class="uk-comment-meta uk-subnav uk-subnav-divider   uk-margin-remove-top ">
                        <li style={this.style3} className=' '>303.323.4992</li>
                        <li style={this.style3} className=' '>tyler@mayflywoodworks.com</li>
                    </ul>
                    </div>
                </div>
              </div>
              <div className='uk-width-1-1 uk-margin-remove-top'>
                <hr style={this.style1} className=''></hr>
              </div>
              <div className='uk-width-1-2@m uk-width-1-1 uk-margin-auto-vertical'>
              <p id='FooterC' className='uk-margin-medium-top uk-margin-medium-bottom'>© <b><strong>2019. mayflywoodworks.com</strong></b></p>
              </div>
             
            </div>

            {/* MOBILE */}

            <div className='uk-hidden@m' uk-grid='true'>
              <div className='uk-width-1-1 uk-margin-auto-vertical uk-margin-auto '>
                <img style={{width:'75px', height:'75px'}} className='uk-align-center uk-margin-small-bottom' src='../images/Mayfly_Icon_WHT.png'></img>
              </div>
              <div className='uk-width-1-1 uk-margin-auto-vertical uk-text-center uk-margin-auto uk-margin-small-top'>
                  <div className=' uk-align-center  '>
                    <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/mayflywoodworks/?hl=en'><span style={this.style2}  class="uk-icon-button " uk-icon="icon:instagram"></span></a>
                    <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/mayflywoodworks'><span style={this.style2} class="uk-icon-button " uk-icon="icon:facebook"></span></a>               
                  </div>
              </div>
              <div className='uk-width-1-1 uk-margin-remove-top'>
                  <div className='uk-margin-small-top  uk-align-center uk-text-center '>
                   <a style={{color:'white'}} className='uk-margin-remove-bottom ' href="tel:303.323.4992">303.323.4992</a>
                  </div>
              </div>
              <div className='uk-width-1-1  uk-margin-remove-top uk-margin-remove-bottom'>
                  <div className='uk-margin-small-top uk-align-center uk-margin-remove-bottom uk-text-center '>
                    <a style={{color:'white'}} className='uk-margin-remove-top  uk-margin-small-bottom'>tyler@mayflywoodworks.com</a>
                  </div>
              </div>
              <hr style={this.style6} className=''></hr>
              <div className='uk-width-1-1 uk-margin-auto-vertical uk-margin-auto '>
                  <div className='uk-margin-small-top uk-margin-small-bottom uk-align-center uk-text-center '>
                    <p  id='FooterC' className=' uk-margin-small-bottom uk-margin-small-top'><b><strong>© 2019. mayflywoodworks.com</strong></b></p>
                  </div>
              </div>
             

            </div>



          </div>
        </div>
      </div>
    );
  }
}


export default Footer;

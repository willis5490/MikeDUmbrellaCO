import React, { Component } from 'react';



class Home extends Component {
   

  // render nav
  render() {
   
    return (
      <div id='daWholeApp'>


         <div id='homeSlideWrapper'>
            <div  class="uk-position-relative uk-visible-toggle uk-light " tabindex="-1" uk-slider="autoplay: true; autoplay-interval: 3000; pause-on-hover: false; ">
                <ul class="uk-slider-items uk-child-width-1-1 uk-child-width-1-3@m">
                    <li>
                        <img className='desktopSlidePics' src=".\images\received_2895012810591063.png" alt=""/>        
                    </li>
                    <li>
                        <img className='desktopSlidePics' src=".\images\received_2823060634446787.png" alt=""/>        
                    </li>
                    <li>
                        <img className='desktopSlidePics' src=".\images\received_1983633798435318.png" alt=""/>        
                    </li> 
                    <li>
                        <img className='desktopSlidePics' src=".\images\received_947063869057637.jpeg" alt=""/>        
                    </li>
                    <li>
                        <img className='desktopSlidePics' src=".\images\received_870435566758746.jpeg" alt=""/>        
                    </li>                     
                </ul>
            </div>
           
         </div>


        <div id='homeContainer1' className=''>
          <div className='uk-container '>
            <div className='uk-margin-large-top' uk-grid='true'>
                <div className='uk-width-1-1 '>
                  <h1 id='OnlyText' className=' uk-text-center bodyTexts'><i>COMING SUMMER <span><h1 className='uk-text-center'>2020</h1></span></i></h1>
                </div>
            </div>
          </div>
        </div>



      </div>
    );
  }
}


export default Home;
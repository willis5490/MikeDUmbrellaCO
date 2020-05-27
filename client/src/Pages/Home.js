import React, { Component } from 'react';



class Home extends Component {
   

  // render nav
  render() {
   
    return (
      <div id='daWholeApp'>


         <div id='homeSlideWrapper'>
        
            <div id='SlideWrap' class=" uk-visible-toggle uk-light " tabindex="-1" uk-slider="autoplay: true; autoplay-interval: 2500; pause-on-hover: false; ">
                <ul class="uk-slider-items uk-child-width-1-1 uk-child-width-1-3@m">
                    <li>
                        <img className='desktopSlidePics' src=".\images\smoothies-2253430_1920.jpg" alt=""/>        
                    </li>
                    <li>
                        <img className='desktopSlidePics' src=".\images\active-5078219_1920.jpg" alt=""/>        
                    </li>             
                    <li>
                        <img className='desktopSlidePics' src=".\images\team-386673_1920.jpg" alt=""/>        
                    </li>                      
                    <li>
                        <img className='desktopSlidePics' src=".\images\smoothies-2253423_1920.jpg" alt=""/>        
                    </li>  
                    <li>
                        <img className='desktopSlidePics' src=".\images\pets-4415649_1920.jpg" alt=""/>        
                    </li>  
                    <li>
                        <img className='desktopSlidePics' src=".\images\person-1245959_1920.jpg" alt=""/>        
                    </li>                                
                </ul>
                <img className='uk-align-center uk-margin-auto-vertical' id='homesliderLogo' src='./images/ASPENLV.png'></img>
            </div>                    
         </div>

         


        <div id='homeContainer1' className=''>
          <div className='uk-container  '>
            <div className='homeNestedContainer1 uk-margin-large-top uk-margin-large-bottom'>
                <div className='uk-margin-large-top uk-margin-large-bottom' uk-grid='true'>
                    <div className='uk-width-1-1 uk-text-center'>
                        <h1 className='homeContainer1Header'>BUILDING HAPPY, HEALTHY COMMUNITIES</h1>
                        <hr id='homeHR1' className='uk-align-center'></hr>
                        <h4 className='homeConatiner1Bio'> when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                            Aldus PageMaker including versions of Lorem Ipsum.</h4>
                    </div>
                </div>
            </div>            
          </div>
        </div>

        <div id='homeContainer2'>
            <div className='uk-container'>
                <div uk-grid='true'>
                    <div className='uk-width-1-1 uk-margin-large-top'>  
                        <h1 className='uk-text-left uk-margin-remove-bottom'>Our</h1>
                        <h1 className='uk-text-left uk-margin-remove-top homecontainer2Text'><b>Ventures</b></h1>
                        <hr id='homeHR2' className='uk-margin-medium-top'></hr>
                    </div>
                </div>

                <div className='uk-margin-large-top'>
                    <div class="uk-card  uk-grid-collapse uk-child-width-1-2@s uk-margin " uk-grid='true'>
                        <div class="uk-card-media-left uk-cover-container">
                            <img src=".\images\detox-1995433_1920.jpg" alt="" uk-cover/>
                           
                        </div>
                        <div className='uk-margin-auto-vertical'>
                            <div class="uk-card-body uk-text-center ">
                                <h1 class="uk-card-title">Company 1</h1>
                                <hr id='homeCardHR' className='uk-align-center'></hr>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                        <hr id='homeHR3' className='uk-margin-large-top'></hr>
                    </div>
                    
                </div>

                <div class="uk-card  uk-grid-collapse uk-child-width-1-2@s uk-visible@s uk-margin uk-margin-large-top " uk-grid='true'>
                    <div className='uk-margin-auto-vertical'>
                        <div class="uk-card-body uk-text-center">
                            <h1 class="uk-card-title">Company 2</h1>
                            <hr id='homeCardHR' className='uk-align-center'></hr>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                    <div class="uk-card-media-right uk-cover-container">
                        <img src=".\images\dog-4988986_1920.jpg" alt="" uk-cover/>
                       
                    </div>
                    <hr id='homeHR3' className='uk-margin-large-top'></hr>
                </div>

                 <div class="uk-card  uk-grid-collapse uk-child-width-1-2@s uk-margin uk-hidden@s uk-margin-large-bottom uk-margin-large-top" uk-grid='true'>
                    <div class="uk-card-media-left uk-cover-container">
                        <img src=".\images\dog-4988986_1920.jpg" alt="" uk-cover/>
                       
                    </div>
                    <div className='uk-margin-auto-vertical'>
                        <div class="uk-card-body uk-text-center">
                            <h1 class="uk-card-title">Company 2</h1>
                            <hr id='homeCardHR' className='uk-align-center'></hr>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                    <hr id='homeHR3' className='uk-margin-large-top'></hr>
                </div>

                <div class="uk-card  uk-grid-collapse uk-child-width-1-2@s uk-margin  uk-margin-large-bottom uk-margin-large-top" uk-grid='true'>
                    <div class="uk-card-media-left uk-cover-container">
                        <img src=".\images\people-4050698_1920.jpg" alt="" uk-cover/>                       
                    </div>
                    <div className='uk-margin-auto-vertical'>
                        <div class="uk-card-body uk-text-center">
                            <h1 class="uk-card-title">Company 3</h1>
                            <hr id='homeCardHR' className='uk-align-center'></hr>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                    <hr id='homeHR3' className='uk-margin-large-top'></hr>
                </div>


            </div>
        </div>



      </div>
    );
  }
}


export default Home;
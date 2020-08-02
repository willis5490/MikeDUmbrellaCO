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
                        <h4 className='homeConatiner1Bio'>Aspenleaf Ventures has a longterm vision that is focused around connecting with as many individuals as possible from all demographics. We believe that by connecting with people through food, health, and hospitality, we can create happier, healthier communities from the inside out. We hope that as we grow as a brand and as a business, our communities grow as well. We started in Colorado, expanded to New England, and can not wait to see what Salt Lake and Park City has to offer!</h4>
                    </div>
                </div>
            </div>            
          </div>
        </div>

        <div id='homeContainer2'>
            <div className='uk-container'>
                <div uk-grid='true'>
                    <div className='uk-width-1-1 uk-margin-large-top'>  
                        <h1 style={{marginBottom:'-10px'}} className='uk-text-left '>OUR</h1>
                        <h1 className='uk-text-left uk-margin-remove-top homecontainer2Text'><b>VENTURES</b></h1>
                        <hr id='homeHR2' className='uk-margin-medium-top'></hr>
                    </div>
                </div>

                <div className='uk-margin-large-top'>
                    <div class="uk-card  uk-grid-collapse uk-child-width-1-2@m uk-margin " uk-grid='true'>
                        <div class="uk-card-media-left uk-cover-container">
                            <img src=".\images\detox-1995433_1920.jpg" alt="" uk-cover/>
                           
                        </div>
                        <div className='uk-margin-auto-vertical'>
                            <div class="uk-card-body uk-text-center ">
                                <h2 class="">Blended</h2>
                                <hr id='homeCardHR' className='uk-align-center'></hr>
                                <p>The Blended Team is dedicated to providing the best possible value for each of our hungry customers. 
                                    We specialize in smoothies, salads, and sandwiches, however we love to mix in daily specials including 
                                    soups, tacos, and sushi. Blended is currently offering private catrering services in the Park City and 
                                    Salt Lake City area. We are not setting up storefront sales until the pandemic is at a point where it 
                                    allows us to safely do so. Thank you for your support!</p>
                            </div>
                        </div>
                        <hr id='homeHR3' className='uk-margin-large-top'></hr>
                    </div>
                    
                </div>

                <div class="uk-card  uk-grid-collapse uk-child-width-1-2@m uk-visible@m uk-margin uk-margin-large-top " uk-grid='true'>
                    <div className='uk-margin-auto-vertical'>
                        <div class="uk-card-body uk-text-center">
                            <h2 class="">Aspen Leaf CBD</h2>
                            <hr id='homeCardHR' className='uk-align-center'></hr>
                            <p>AspenLeaf CBD is dedicated to sourcing and processing the best possible products for all of 
                                our clients' needs. We enjoy attending various sports events nationwide, and can not wait 
                                until the pandemic is over so that we may better serve you. For the time being, you may 
                                reach out to one of our dedicated sales professionals through our instagram page. You may 
                                also find us at your next ski or snowboarding competition, pandemic permitting. Thank you 
                                for your patience and support!</p>
                        </div>
                    </div>
                    <div class="uk-card-media-right uk-cover-container">
                        <img src=".\images\dog-4988986_1920.jpg" alt="" uk-cover/>
                       
                    </div>
                    <hr id='homeHR3' className='uk-margin-large-top'></hr>
                </div>

                 <div class="uk-card  uk-grid-collapse uk-child-width-1-2@m uk-margin uk-hidden@m uk-margin-large-bottom uk-margin-large-top" uk-grid='true'>
                    <div class="uk-card-media-left uk-cover-container">
                        <img src=".\images\dog-4988986_1920.jpg" alt="" uk-cover/>
                       
                    </div>
                    <div className='uk-margin-auto-vertical'>
                        <div class="uk-card-body uk-text-center">
                            <h2 class="">Aspen Leaf CBD</h2>
                            <hr id='homeCardHR' className='uk-align-center'></hr>
                            <p>AspenLeaf CBD is dedicated to sourcing and processing the best possible products for all of 
                                our clients' needs. We enjoy attending various sports events nationwide, and can not wait 
                                until the pandemic is over so that we may better serve you. For the time being, you may 
                                reach out to one of our dedicated sales professionals through our instagram page. You may 
                                also find us at your next ski or snowboarding competition, pandemic permitting. Thank you 
                                for your patience and support!</p>
                        </div>
                    </div>
                    <hr id='homeHR3' className='uk-margin-large-top'></hr>
                </div>

                <div class="uk-card  uk-grid-collapse uk-child-width-1-2@m uk-margin  uk-margin-large-bottom uk-margin-large-top" uk-grid='true'>
                    <div class="uk-card-media-left uk-cover-container">
                        <img src=".\images\men-1245982_1920.jpg" alt="" uk-cover/>                       
                    </div>
                    <div className='uk-margin-auto-vertical'>
                        <div class="uk-card-body uk-text-center">
                            <h2 class="">Pocket PT</h2>
                            <hr id='homeCardHR' className='uk-align-center'></hr>
                            <p>Pocket PT works hand in hand with the leading electronic muscle stimulator brand in the 
                                country. The devices we use with our clients are used by both everyday people with aches 
                                and pains, and also professional athletes such as the Carolina Panthers, LA Kings, US Ski 
                                Team and UFC. We are dedicated to providing continued support through the pandemic. If you 
                                live in the Salt Lake City or surroundiung area, we can come directly to your home for a 
                                scheduled appointment, or you may schedule a drop off at a time that is convenient for you. 
                                We hope to hear from you soon!</p>
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
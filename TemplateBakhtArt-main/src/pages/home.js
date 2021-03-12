import React from 'react';
import {FaHome, FaInfo, FaBox, FaList, FaPhone, FaInstagram, FaWhatsapp, 
  FaFacebookF, FaGlobe, FaHeadset, FaCcMastercard} from 'react-icons/fa';
import ScrollUpButton from "react-scroll-up-button";
class Home extends React.Component {
    render() {
        return (
            <div>

<section className="banner" id="home" role="banner">
  <header id="header">
    <div className="header-content clearfix"> 
    <span className="logo" style={{fontFamily: 'Papyrus'}}><a href="index.html">
        BAKHT'ART</a></span>
      <nav className="navigation" role="navigation">
        <ul className="primary-nav">
          <li><a href="#home" style={{color: '#D1B23E', fontFamily: 'Felix Titling'}}><FaHome/> Home</a></li>
          <li><a href="#section-profile" style={{color: '#D1B23E', fontFamily: 'Felix Titling'}}><FaInfo/> About Us</a></li>
          <li><a href="#products" style={{color: '#D1B23E', fontFamily: 'Felix Titling'}}><FaBox /> Products</a></li>
          <li><a href="#catalogue" style={{color: '#D1B23E', fontFamily: 'Felix Titling'}}><FaList/> Catalogue</a></li>
          <li><a href="#contactus" style={{color: '#D1B23E', fontFamily: 'Felix Titling'}}><FaPhone/> Contact Us</a></li>
        </ul>
      </nav>
      <a href="#" className="nav-toggle">Menu<span></span></a> </div>
  </header>
  <div className="container">
    <div className="col-md-6 col-sm-12">
      <div className="banner-text text-center">
      <h4 style={{color: '#070C29', fontFamily: 'Felix Titling', fontWeight: 'bold'}}>Luxury must be comfortable <br/>otherwise
        it is not luxury.</h4>
        <h1 style={{color: '#070C29', fontFamily: 'Felix Titling'}}>The <span>Beauty</span> <span className="icon icon-heart"></span> Salon</h1>
        
        <button style={{backgroundColor: '#070C29', color: '#D1B23E', border: 'none',
      fontSize: '20px', borderRadius: '5px', fontFamily: 'Felix Titling'}}>Join Bakht'Art</button><br/></div>
    </div>
  </div>
</section>
<section id="section-profile" className="section-padding">
		<div className="profile-bg visible-md visible-lg"></div>
		<div className="container">
			<div className="row">
				<div className="col-md-7 col-sm-12 pull-right">
					<div className="profile-desc wow fadeInRight animated" styles={{visibility: 'visible', animationName: 'fadeInRight'}}>
						 <h2 className="section-title uppercase" style={{fontFamily: 'Felix Titling', color: '#070C29'}}>About Us</h2>
<br/>
      <p>
          Bakht'Art is founded in 2016, it is a Brand of Fashion making and selling luxuarious products
          that are related to fashion, wedding, summer...
      </p>
 <br/>
 

      <p className="text-grey animated bounceInUp" styles={{opacity: 1}}>
          Products are Bathing Capes, Jebbas, Caftans, Beach Dresses, Dresses, Napkins & Cushions.
      </p>
<br/>
      <p className="text-grey animated bounceInUp" styles={{opacity: 1}}>
          Founded by Wissal Labbane
      </p>
<br/>
      <p className="text-grey animated bounceInUp" styles={{opacity: 1}}>
          Current products and old products are in <a href = "#catalogue" style={{color: '#021144'}}>catalogue</a> section
      </p>	  
					</div>
				</div>
			</div>
		</div>
	</section>
<section id="products" className="gallery section">
  <div className="container">
    <div className="section-header">
                <h2 className="wow fadeInDown animated" style = {{fontFamily: 'Felix Titling', color: '#070C29'}}>Products</h2>
            </div>
    <div className="row no-gutter">
      <div className="col-lg-3 col-md-6 col-sm-6 work"> <a href="../assets/images/portfolio/bathCape.jpg" className="work-box"> <img src="../assets/images/portfolio/bathCape.jpg" alt=""/>
        <div className="overlay">
          <div className="overlay-caption">
             <p><span style={{fontFamily: 'Felix Titling', fontSize: '25px'}}>Bathing Capes</span></p>
          </div>
        </div>
        </a> </div>
      <div className="col-lg-3 col-md-6 col-sm-6 work"> <a href="../assets/images/portfolio/jebbaBakht.jpg" className="work-box"> <img src="../assets/images/portfolio/jebbaBakht.jpg" alt=""/>
        <div className="overlay">
          <div className="overlay-caption">
          <p><span style={{fontFamily: 'Felix Titling', fontSize: '25px'}}>Jebbas</span></p>
          </div>
        </div>
        </a> </div>
      <div className="col-lg-3 col-md-6 col-sm-6 work"> <a href="../assets/images/portfolio/caftanBakht.jpg" className="work-box"> 
      <img src="../assets/images/portfolio/caftanBakht.jpg" alt=""/>
        <div className="overlay">
          <div className="overlay-caption">
          <p><span style={{fontFamily: 'Felix Titling', fontSize: '25px'}}>Caftans</span></p>
          </div>
        </div>
        </a> </div>
      <div className="col-lg-3 col-md-6 col-sm-6 work"> <a href="images/portfolio/beachDressBakht.jpg" className="work-box"> 
      <img src="../assets/images/portfolio/beachDressBakht.jpg" alt=""/>
        <div className="overlay">
          <div className="overlay-caption"> 
          <p><span style={{fontFamily: 'Felix Titling', fontSize: '25px'}}>Beach Dresses</span></p>
          </div>
        </div>
        </a> </div>
      <div className="col-lg-3 col-md-6 col-sm-6 work"> <a href="images/portfolio/dressBakht.jpg" className="work-box"> 
      <img src="../assets/images/portfolio/dressBakht.jpg" alt=""/>
        <div className="overlay">
          <div className="overlay-caption">
          <p><span style={{fontFamily: 'Felix Titling', fontSize: '25px'}}>Dresses</span></p>
          </div>
        </div>
        </a> </div>
      <div className="col-lg-3 col-md-6 col-sm-6 work"> <a href="images/portfolio/napkinsBakht.jpg" className="work-box"> 
      <img src="../assets/images/portfolio/napkinsBakht.jpg" alt=""/>
        <div className="overlay">
          <div className="overlay-caption">
          <p><span style={{fontFamily: 'Felix Titling', fontSize: '25px'}}>Napkins</span></p>
          </div>
        </div>
        </a> </div>
      <div className="col-lg-3 col-md-6 col-sm-6 work"> <a href="images/portfolio/cushionsBakht.jpg" className="work-box"> 
      <img src="../assets/images/portfolio/cushionsBakht.jpg" alt=""/>
        <div className="overlay">
          <div className="overlay-caption">
          <p><span style={{fontFamily: 'Felix Titling', fontSize: '25px'}}>Cushions</span></p>
          </div>
        </div>
        </a> </div>
      <div className="col-lg-3 col-md-6 col-sm-6 work"> <a href="images/portfolio/robeDeChambre.jpg" className="work-box"> 
      <img src="../assets/images/portfolio/robeDeChambre.jpg" alt=""/>
        <div className="overlay">
          <div className="overlay-caption">
          <p><span style={{fontFamily: 'Felix Titling', fontSize: '25px'}}>Dressing Gowns</span></p>
          </div>
        </div>
        </a> </div>
    </div>
  </div>
</section>
<section id="catalogue" className="packageList">
  <div className="container">
      <div className="section-header">
                <h2 className="wow fadeInDown animated" style={{fontFamily:'Felix Titling', color: '#070C29'}}>Catalogue</h2>
                <p className="wow fadeInDown animated">Current and old products</p>
            </div>
    <div className="row">  
            <div className="col-md-6">
            	<div className="package wow fadeInLeft animated" data-wow-offset="250" data-wow-delay="200ms">
                	<h5>Catalogue 1</h5>
                    <ul className="list-default">
                    	<li></li>
                    	<li>Products in sale</li>
                    	<li></li>
                    </ul>
                    <strong className="price">Consult</strong>
                </div>
                </div>
                <div className="col-md-6">
                <div className="package wow fadeInLeft animated" data-wow-offset="200" data-wow-delay="300m">
                	<h5>Catalogue 2</h5>
                    <ul className="list-default">
                    	<li></li>
                    	<li>Products out of stock | Archive</li>
                    	<li></li>
                    </ul>
                    <strong className="price">Consult</strong>
                </div>
                </div>
                
            
        </div>
  </div>
</section>
<section id="testimonials" className="section testimonials no-padding">
  <div className="container-fluid">
    <div className="row no-gutter">
      <div className="flexslider">
        <ul className="slides">
          <li>
            <div className="col-md-12">
              <blockquote>
                <h1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa 
semper aliquam quis mattis consectetur adipiscing elit.." </h1>
                <p>Chris Mentsl</p>
              </blockquote>
            </div>
          </li>
          <li>
            <div className="col-md-12">
              <blockquote>
                <h1>"Praesent eget risus vitae massa Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa 
semper aliquam quis mattis consectetur adipiscing elit.." </h1>
                <p>Kristean velnly</p>
              </blockquote>
            </div>
          </li>
          <li>
            <div className="col-md-12">
              <blockquote>
                <h1>"Consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa 
semper aliquam quis mattis consectetur adipiscing elit.." </h1>
                <p>Markus Denny</p>
              </blockquote>
            </div>
          </li>
          <li>
            <div className="col-md-12">
              <blockquote>
                <h1>"Vitae massa semper aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa 
semper aliquam quis mattis consectetur adipiscing elit.." </h1>
                <p>John Doe</p>
              </blockquote>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section id="contactus" className="section">
  <div className="container">
      <div className="section-header">
          <h2 className="wow fadeInDown animated" style={{fontFamily: 'Felix Titling', color: '#070C29'}}>Contact Us</h2>
      </div>
    <div className="row">
      <div className="col-md-8 col-md-offset-2 conForm">       
        <div id="message"></div>
        <form method="post" action="php/contact.php" name="cform" id="cform">
          <input name="firstName" id="firstName" type="text" className="col-xs-12 col-sm-12 col-md-12 col-lg-12" placeholder="First Name"/>
          <input name="lastName" id="lastName" type="text" className="col-xs-12 col-sm-12 col-md-12 col-lg-12" placeholder="Last Name"/>
          <input name="email" id="email" type="email" className=" col-xs-12 col-sm-12 col-md-12 col-lg-12 noMarr" placeholder="Email Address"/>
          <textarea name="comments" id="comments" cols="" rows="" className="col-xs-12 col-sm-12 col-md-12 col-lg-12" placeholder="Message..."></textarea>
          <input type="submit" id="submit" name="send" className="submitBnt" value="Send"/>
          <div id="simple-msg"></div>
        </form>
      </div>
    </div>
  </div>
</section>
<footer className="footer">
<div className="container-fluid">
<div id="map-row" className="row">
    <div className="col-xs-12">    
    	
    <iframe width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" 
src="https://maps.google.com/maps?q=Rue%20de%20la%20tendresse,%20Marsa&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe> 
          <div id="map-overlay" className="col-xs-5 col-xs-offset-6">
    		<h2 styles={{marginTop:0,color:'#fff'}} className="contactusFooter">Contact us</h2>
    		<address styles={{color:'#fff'}}>
    			<strong>
            <span style={{fontFamily: 'Papyrus'}}>
              <a href = "#home" style={{color: "#D1B23E"}}>
            BAKHT'ART
              </a>
            </span>
          </strong><br/>
    			Street of Tenderness.<br/>
    			La Marsa, Tunisia<br/><br/>
    			<a href = "https://www.facebook.com/7wissallabbane" target = "_blank"><span style={{color: '#D1B23E'}}><FaFacebookF/></span></a> 
          &nbsp;&nbsp;&nbsp;
          <a href = "https://www.instagram.com/bakht_art_/" target = "_blank"><span style={{color: '#D1B23E'}}><FaInstagram/></span></a> 
          &nbsp;&nbsp;&nbsp;
          <a href = "tel:+21698353353" target = "_blank"><span style={{color: '#D1B23E'}}><FaWhatsapp/></span></a><br/>
    			<br/>
    			<abbr title="Phone">Phone Number:</abbr> +216 98 353 353<br/><br/>
          <FaGlobe/> International Delivery &nbsp;&nbsp;<FaHeadset/>&nbsp;Customer Support &nbsp;&nbsp;<FaCcMastercard/>&nbsp;Secure Paiement
    		</address>
			  © Copyright 2016 - 2021 BakhtArt.com | Made with <img src="../assets/images/heartbeat.gif" style={{width: '20px'}}/> by <strong>Quad Squad</strong>.
    	</div>
      <ScrollUpButton style={{width: 75}} ToggledStyle={{right: 100}}
              StopPosition={0}
      ShowAtPosition={150}
      EasingType='easeOutCubic'
      AnimationDuration={500}
      ContainerClassName='ScrollUpButton__Container'
      TransitionClassName='ScrollUpButton__Toggled'/>
    </div>
	 </div>
</div>
</footer>

            </div>
        );
    }
}

export default Home;
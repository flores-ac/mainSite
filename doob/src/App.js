import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Pages import Here 
import Splash from './pages/Splash';
import HomeDefault from './pages/HomeDefault';
import BusinessConsulting2 from './pages/BusinessConsulting2';
import Corporate from './pages/Corporate';
import Business from './pages/Business';
import DigitalAgency from './pages/DigitalAgency';
import Finance from './pages/Finance';
import Company from './pages/Company';
import Marketing from './pages/Marketing';
import TravelAgency from './pages/TravelAgency';
import Consulting from './pages/Consulting';
import SeoAgency from './pages/SeoAgency';
import PersonalPortfolio from './pages/PersonalPortfolio';
import EventConference from './pages/EventConference';
import CreativePortfolio from './pages/CreativePortfolio';
import Freelancer from './pages/Freelancer';
import InternationalConsulting from './pages/InternationalConsulting';
import Startup from './pages/Startup';
import WebAgency from './pages/WebAgency';


import CategoryList from './pages/CategoryList';
import TagList from './pages/TagList';
import Author from './pages/Author';
import AboutUs from './pages/AboutUs';

// Elements import Here 

import Elements from './elements/elements/Elements';
import Button from './elements/button/Button';
import Service from './elements/service/Service';
import CounterUp from './elements/counterup/CounterUp';
import Progressbar from './elements/progressbar/Progressbar';

import Portfolio from './elements/portfolio/Portfolio';
import portfolioThreeColumn from './elements/portfolio/PortfolioThreeColumn';
import PortfolioFullWidth from './elements/portfolio/PortfolioFullWidth';
import PortfolioGrid from './elements/portfolio/PortfolioGrid';
import PortfolioBoxLayout from './elements/portfolio/PortfolioBoxLayout';
import PortfolioDetails from './pages/PortfolioDetails';
import Social from './elements/social/Social';
import Team from './elements/team/Team';
import Timeline from './elements/timeline/Timeline';
import Testimonial from './elements/testimonial/Testimonial';
import RnAccordion from './elements/accordion/RnAccordion';
import Tab from './elements/tab/Tab';
import Pricing from './elements/pricing/Pricing';
import Split from './elements/split/Split';
import CalltoAction from './elements/calltoaction/CalltoAction';
import Video from './elements/video/Video';
import Gallery from './elements/gallery/Gallery';
import Contact from './elements/contact/Contact';
import Brand from './elements/brand/Brand';
import AdvanceTab from './elements/advancetab/AdvanceTab';
import AdvancePricing from './elements/advancePricing/AdvancePricing';


import BlogGridView from './components/blog/BlogGridView';
import BlogListView from './components/blog/BlogListView';
import BlogGridSidebar from './components/blog/BlogGridSidebar';
import BlogListSidebar from './components/blog/BlogListSidebar';
import BlogDetails from './pages/BlogDetails';
import Error from './pages/Error';


// Import Css Here 
import './assets/scss/style.scss';
function App() {
    
    return (
        
        <BrowserRouter>
          
          <Routes>
                    <Route exact path='/' element={< Splash />}></Route>  
                    <Route exact path='/business-consulting' element={< HomeDefault />}></Route> 
                    <Route exact path='/corporate' element={< Corporate />}></Route> 
                    <Route exact path='/business' element={< Business />}></Route>
                    <Route exact path='/digital-agency' element={< DigitalAgency />}></Route>
                    <Route exact path='/finance' element={< Finance />}></Route>
                    <Route exact path='/company' element={< Company />}></Route>
                    <Route exact path='/marketing' element={< Marketing />}></Route>
                    <Route exact path='/travel-agency' element={< TravelAgency />}></Route>
                    <Route exact path='/consulting' element={< Consulting />}></Route>
                    
                  
                    <Route exact path='/seo-agency' element={< SeoAgency />}></Route> 
                    <Route exact path='/personal-portfolio' element={< PersonalPortfolio />}></Route> 
                    <Route exact path='/event-conference' element={< EventConference />}></Route> 
                    <Route exact path='/creative-portfolio' element={< CreativePortfolio />}></Route> 
                    <Route exact path='/freelancer' element={< Freelancer />}></Route> 
                    <Route exact path='/international-consulting' element={< InternationalConsulting />}></Route> 
                    <Route exact path='/startup' element={< Startup />}></Route> 
                    <Route exact path='/web-agency' element={< WebAgency />}></Route> 

                   
                    <Route exact path='/blog-grid' element={< BlogGridView />}></Route> 
                    <Route exact path='/blog-list-view' element={< BlogListView />}></Route> 
                    <Route exact path='/blog-grid-sidebar' element={< BlogGridSidebar />}></Route> 
                    <Route exact path='/blog-list-sidebar' element={< BlogListSidebar />}></Route> 
                    <Route exact path='/blog-details/:id' element={< BlogDetails />}></Route> 
                    <Route exact path='/category/:slug' element={< CategoryList />}></Route> 
                    <Route exact path='/archive/:slug' element={< Author />}></Route> 
                    <Route exact path='/tag/:slug' element={< TagList />}></Route> 

                    <Route exact path='/elements' element={< Elements />}></Route> 
                    <Route exact path='/button' element={< Button />}></Route> 
                    <Route exact path='/service' element={< Service />}></Route> 
                    <Route exact path='/counter' element={< CounterUp />}></Route> 
                    <Route exact path='/progressbar' element={< Progressbar />}></Route> 
                    <Route exact path='/social-share' element={< Social />}></Route> 
                    <Route exact path='/team' element={< Team />}></Route> 
                    <Route exact path='/testimonial' element={< Testimonial />}></Route> 
                    <Route exact path='/timeline' element={< Timeline />}></Route> 
                    <Route exact path='/accordion' element={< RnAccordion />}></Route> 
                    <Route exact path='/tab' element={< Tab />}></Route> 
                    <Route exact path='/pricing' element={< Pricing />}></Route> 
                    <Route exact path='/split' element={< Split />}></Route> 
                    <Route exact path='/call-to-action' element={< CalltoAction />}></Route> 
                    <Route exact path='/video-popup' element={< Video />}></Route> 
                    <Route exact path='/gallery' element={< Gallery />}></Route> 
                    <Route exact path='/contact' element={< Contact />}></Route> 
                    <Route exact path='/brand' element={< Brand />}></Route> 
                    <Route exact path='/advance-tab' element={< AdvanceTab />}></Route> 
                    <Route exact path='/advance-pricing' element={< AdvancePricing />}></Route> 
                    <Route exact path='/about-us' element={< AboutUs />}></Route> 

                    <Route exact path='/error' element={< Error />}></Route> 
                    
                    <Route exact path='/portfolio' element={< Portfolio />}></Route> 
                    <Route exact path='/portfolio-three-column' element={< portfolioThreeColumn />}></Route> 
                    <Route exact path='/portfolio-full-width' element={< PortfolioFullWidth />}></Route> 
                    <Route exact ath='/portfolio-grid-layout' element={< PortfolioGrid />}></Route> 
                    <Route exact path='/portfolio-box-layout' element={< PortfolioBoxLayout />}></Route> 
                    <Route exact path='/portfolio-details/:id' element={< PortfolioDetails />}></Route>
                    <Route exact path='/business-consulting-2' element={< BusinessConsulting2 />}></Route>  
                    
                    
            
                    
                    
               
               
        </Routes> 
                    
        </BrowserRouter>
      
    );
}
  




export default App

/*
                    <Route path='/corporate' element={< Corporate />}></Route> 
                    <Route path='/business' element={< Business />}></Route> 
                    <Route path='/digital-agency' element={< DigitalAgency />}></Route> 
                    <Route path='/finance' element={< Finance />}></Route> 
                    <Route path='/company' element={< Company />}></Route> 
                    <Route path='/marketing' element={< Marketing />}></Route> 
                    <Route path='/travel-agency' element={< TravelAgency />}></Route> 
                    <Route path='/consulting' element={< Consulting />}></Route> 
                    <Route path='/seo-agency' element={< SeoAgency />}></Route> 
                    <Route path='/personal-portfolio' element={< PersonalPortfolio />}></Route> 
                    <Route path='/event-conference' element={< EventConference />}></Route> 
                    <Route path='/creative-portfolio' element={< CreativePortfolio />}></Route> 
                    <Route path='/freelancer' element={< Freelancer />}></Route> 
                    <Route path='/international-consulting' element={< InternationalConsulting />}></Route> 
                    <Route path='/startup' element={< Startup />}></Route> 
                    <Route path='/web-agency' element={< WebAgency />}></Route> 

                   
                    <Route path='/blog-grid' element={< BlogGridView />}></Route> 
                    <Route path='/blog-list-view' element={< BlogListView />}></Route> 
                    <Route path='/blog-grid-sidebar' element={< BlogGridSidebar />}></Route> 
                    <Route path='/blog-list-sidebar' element={< BlogListSidebar />}></Route> 
                    <Route path='/blog-details/:id' element={< BlogDetails />}></Route> 
                    <Route path='/category/:slug' element={< CategoryList />}></Route> 
                    <Route path='/archive/:slug' element={< Author />}></Route> 
                    <Route path='/tag/:slug' element={< TagList />}></Route> 

                    <Route path='/elements' element={< Elements />}></Route> 
                    <Route path='/button' element={< Button />}></Route> 
                    <Route path='/service' element={< Service />}></Route> 
                    <Route path='/counter' element={< CounterUp />}></Route> 
                    <Route path='/progressbar' element={< Progressbar />}></Route> 
                    <Route path='/social-share' element={< Social />}></Route> 
                    <Route path='/team' element={< Team />}></Route> 
                    <Route path='/testimonial' element={< Testimonial />}></Route> 
                    <Route path='/timeline' element={< Timeline />}></Route> 
                    <Route path='/accordion' element={< RnAccordion />}></Route> 
                    <Route path='/tab' element={< Tab />}></Route> 
                    <Route path='/pricing' element={< Pricing />}></Route> 
                    <Route path='/split' element={< Split />}></Route> 
                    <Route path='/call-to-action' element={< CalltoAction />}></Route> 
                    <Route path='/video-popup' element={< Video />}></Route> 
                    <Route path='/gallery' element={< Gallery />}></Route> 
                    <Route path='/contact' element={< Contact />}></Route> 
                    <Route path='/brand' element={< Brand />}></Route> 
                    <Route path='/advance-tab' element={< AdvanceTab />}></Route> 
                    <Route path='/advance-pricing' element={< AdvancePricing />}></Route> 
                    <Route path='/about-us' element={< AboutUs />}></Route> 

                    <Route path='/error' element={< Error />}></Route> 
                    
                    <Route path='/portfolio' element={< Portfolio />}></Route> 
                    <Route path='/portfolio-three-column' element={< portfolioThreeColumn />}></Route> 
                    <Route path='/portfolio-full-width' element={< PortfolioFullWidth />}></Route> 
                    <Route path='/portfolio-grid-layout' element={< PortfolioGrid />}></Route> 
                    <Route path='/portfolio-box-layout' element={< PortfolioBoxLayout />}></Route> 
                    <Route path='/portfolio-details/:id' element={< PortfolioDetails />}></Route> */
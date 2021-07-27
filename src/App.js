import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Blogs from './Components/Blogs';
import {Helmet} from 'react-helmet'
import ReactGA from 'react-ga';
function App() {
  ReactGA.initialize('G-74JDQHG1HS');
    ReactGA.pageview('/');
  return (
    <div className="App">
     <Router>
     <Helmet>
        <title>thephotogenicbug FullStack Web Developer in Bangalore - Portfolio</title>
        <link rel="canonical" href="https://www.thephotogenicbug.in/" />
         <meta name="description" content="thephotogenicbug FullStack Web Developer i work on ReactJS Bootstrap JavaScript NodeJS Server and MySQL DataBase This is my Portfolio and Blogging webpage "/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="keywords" content="web developer,front end developer,website developer,creating website,web developer company,web design company,back end developer,web dev,freelance web developer,front end web developer,freelance web designer,website developers,stack developer,website developer near me,web developer near me,web development company in bangalore,web programmer,web application developer,website development company in bangalore,back end web developer,php programmer,web app developer,web design company bangalore,ecommerce website developer,web developer portfolios,web designers in bangalore,web designer and developer,website designing company in bangalore,web developer services,website developer company,web designing near me,ecommerce website designing,build a ecommerce website,ui developers,web developer in bangalore,junior web developer,web design near me,wordpress web design,colt steele udemy,google web developer,web stack,web coding,freelance front end developer,ecommerce web design company,custom web design,ecommerce developer,ecommerce web design packages,wordpress web developer,web developer website,freelance website developer,website developers in bangalore,front end dev,front end coding,upwork web developer,wordpress website designer,frontend and backend technologies,wordpress website developer,html5 app,front end and back end developer,custom web design services,backend website,jon duckett javascript,cms developer,front end website,cms web design,front end backend,best web designer,css web design,javascript and jquery jon duckett,andrei neagoie udemy,php web developer,best website developers,freelance web designer near me,website programmer,best web developer,web developer agency,website building cost,latest web technologies,web developer and web designer,ecommerce website development company in bangalore,web design coding,web application technologies,best web development company in bangalore,web page developer,website development in bangalore,website designing company in greater noida,front end developer technologies,frontend and backend developer,ecommerce development company in bangalore,web development in bangalore,stack web developer,website designing company in dwarka,ui front end developer,app developer website,best website designers in bangalore,creating a web app,web developer site,certified web developer,ecommerce website designing company,wordpress developers near me,website developer cost,best websites for programmers,web design and development company in bangalore,web design agency in bangalore,website designing in bangalore,web designer app,website designing company in rohini,web stack technologies,web app designer,ecommerce website developers in bangalore,ecommerce website development in bangalore,best website designing company in bangalore,freelance website designers in bangalore,junior front end developer,web front end,senior web developer,web backend,custom web design company,professional web design company,best website design 2021,html5 css3 javascript,coding web,ecommerce web design agency,best cms for developers,web content developer,front end web design,dynamic web design,google web dev,white label web design,indeed web developer,ecommerce web developers,build a web app,react front end developer,looking for web developer,backend web developer,website design 2021,freelance web developer website,outsource web design,web app developers,front end freelance,portland web design,seo web developer,html5 mobile app,wordpress design company,remote web developer,ui design for developers,dev website,php and mysql jon duckett,digital web design,web programer,professional web developer,best web developer portfolios,local web developers,ecommerce web developer,web developer posao,developer personal website,web developer personal website,reactive web design,kotlin web app,front web,pwa developer,magento web developer,magento ecommerce developers,online developer,front end back end developer,google web designer developers,programmer of websites,front and back end developer,front end and backend,front end react developer,web application company,web dev agency,web and app developers,web technologies 2020,custom web application,designer developer,ecommerce website company,developers website,freelance dev,web designer developer,front end developer remote,freelance backend developer,web dev google,front end developer website,udemy front end,html5 developer,find a web developer,web ui developer,php backend developer,web programmer of the websites,junior front end developer remote,wix website developer,best web developer in the world,top web developers,shopify web design agency,freelance web dev,it web developer,website and mobile app developers,ecommerce website packages,ui and ux developer,freelance wordpress designer,website dev,marketing web developer,the world's largest web developer site,front end developer and back end developer,best freelance websites for web developers,affordable custom web design,aem front end developer,websites built with flutter,web application developers,web and mobile,lead web developer,a web developer,backend technologies 2020,wordpress front end developer,react web design,front end developer indeed,wordpress website developer near me,modern web technologies,junior front end web developer,latest web technologies 2020,top website developers,mdn front end,freelance web developer near me,hubspot cms developer,web developer pro,cheap website developers,web and mobile application,frontend ui,looking for website developer,front end web dev,custom ecommerce,custom web design agency,ui ux front end developer,fiverr website developer,best developer websites,css front end,ecommerce web application,htmlpanda,built with laravel,rails web,best web technologies,build a website with react,web developer app,it web design,web developer online,wordpress web design agency near me,web developer cost,mobile website design company,high end web design,web application stack,best web designers in bangalore,website design and development company in bangalore,reactjs development company in bangalore,cheap website designers in bangalore,best website developers in bangalore,wordpress website development company in bangalore,react js openings in bangalore,magento development company in bangalore,freelance web developer in bangalore,freelance web designers in bangalore,react developer salary bangalore,full stack developer training in bangalore,web development agency in bangalore,reactjs openings in bangalore,best institute for full stack developer in bangalore,best ecommerce development company in bangalore,react js developer salary in bangalore,full stack developer training institutes in bangalore,react js job openings in bangalore,web app development company in bangalore,php web development company in bangalore,react js internship in bangalore,react bangalore,top 10 web development companies in bangalore,wordpress web development company in bangalore,ecommerce website development cost in bangalore,ecommerce developers bangalore,top website designers in bangalore,top website developers in bangalore,ecommerce website designer in bangalore,full stack development training in bangalore,website creators in bangalore,website and app development companies in bangalore,website creation cost in bangalore,website development cost in bangalore,thephotogenicbug,thephotogenicbug tech,full stack web developer in bangalore,reactjs developer in bangalore,"
          />
          <meta name="google-site-verification" content="XglzlOxRKgUyhlDtkChq6uMRwVqX1hWwbErn35VIg7Q" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="thephotogenicbug FullStack Web Developer in Bangalore - Portfolio" />
          <meta property="og:url" content="https://www.thephotogenicbug.in/" />
          <meta property="og:site_name" content="Eduprov Educational Institute" />
          <meta property="og:description"
            content="thephotogenicbug FullStack Web Developer i work on ReactJS Bootstrap JavaScript NodeJS Server and MySQL DataBase This is my Portfolio and Blogging webpage" />
          <meta property="og:image" content="#" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="#" />
          <meta name="twitter:title" content="thephotogenicbug FullStack Web Developer in Bangalore - Portfolio" />
          <meta name="twitter:description"
            content="thephotogenicbug FullStack Web Developer i work on ReactJS Bootstrap JavaScript NodeJS Server and MySQL DataBase This is my Portfolio and Blogging webpage" />
          <meta name="twitter:image" content="#" />
          <meta name="twitter:url" content="#" />
          <link rel="shortcut icon" type="image/png" href="#"  alt="thephotogenicbug logo" title="thephotogenicbug logo"  />
          <link rel="apple-touch-icon" href="#"  alt="thephotogenicbug logo" title="thephotogenicbug logo" />
          <meta name="author" content="thephotogenicbug"/>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-74JDQHG1HS"></script>
          script={[
          helmetJsonLdProp<Person>({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "thephotogenicbug",
            alternateName: "NaveenKumar",
            alumniOf: {
              "@type": "BlogPosting",
              name: ["thephotogenicbug FullStack Web Developer in Bangalore", "thephotogenicbug FullStack Web Developer in Bangalore - Portfolio"],
            },
            knowsAbout: ["web development", "Web Designing" , "Web Development Blogs"],
          }),
        ]}
       </Helmet>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/blogs" component={Blogs}/>
     </Router>
    </div>
  );
}

export default App;

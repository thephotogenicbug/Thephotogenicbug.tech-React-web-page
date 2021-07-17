import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Blogs from './Components/Blogs';
import {Helmet} from 'react-helmet'
function App() {
  return (
    <div className="App">
     <HashRouter>
     <Helmet>
        <title>thephotogenicbug</title>
        <link rel="canonical" href="https://www.thephotogenicbug.tech/" />
         <meta name="description" content="thephotogenicbug.tech im a full stack Web Developer i work on ReactJS Bootstrap JavaScript NodeJS Server and MySQL DataBase"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="keywords" content=""/>
          <meta name="google-site-verification" content="VxtjUUie7hzjDqqYv_Go2dqh37n0DuRZpH9XAD45WaI" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-74JDQHG1HS"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'G-74JDQHG1HS');
          </script>
       </Helmet>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/blogs" component={Blogs}/>
     </HashRouter>
    </div>
  );
}

export default App;

import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     
      <Banner/>
     <Row
        title="Netflix Originals"
        fetchUrl ={requests.fetchNetflixOriginals}
        isLargeRow/>
      
     <Row 
        title="Trending Now"
        fetchUrl ={requests.fetchTreding}/>

      <Row 
            title="Top Rated"
            fetchUrl ={requests.fetchTopRated}/>

      <Row 
            title="Action Movies"
            fetchUrl ={requests.fetchActionMovies}/>

     <Row 
            title="Comendy Movies"
            fetchUrl ={requests.fetchComedyMovies}/>

      <Row 
            title="Romance Movies"
            fetchUrl ={requests.fetchRomanceMovies}/>
    
     <Row 
            title="Horror Movies"
            fetchUrl ={requests.fetchHorrorMovies}/>
     <Row 
            title="Documentary Movies"
            fetchUrl ={requests.fetchDocumentaryMovies}/>
        </div>
        
  );
}

export default App;

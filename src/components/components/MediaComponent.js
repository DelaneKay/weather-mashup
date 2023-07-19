import React, { useState, useEffect } from "react";
import {Alert, Card, CardImg, Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import HomePage from "./HomePage";


const CLIENT_ID = '327d46894e804b639c22cad035f65300';
const CLIENT_SECRET = '3626ccee911b49209110b815652c1b4f';

function App() {
  // Constants for Open Weather API
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  // Constants for Spotify
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [trackURI, setTrackURI] = useState(null);
  const [artistName, setArtistName] = useState("");
  const [trackName, setTrackName] = useState("");
  const [imageURL, setImageURL] = useState(null);

  //Constants for Unsplash
  const [photo, setPhoto] = useState(null);
  const [clientID, setClientID] = useState('mLWJDZ3EaAi7sUZSEqqvJluHiEi_3X7XyDo3FwNjpF0');
  const [Image, setImage] = useState("");
  const weather = " weather"

  // Function for fetching the Open Weather API
  const handleFormSubmit = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8e8e4b98b1d96f4b0052ae515cece3be`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setWeatherData(null);
      setError("City not found. Please enter a valid city name.");
    }
  };

  // React Hook for handling Spotify API
  useEffect(() => {
       var authParameters = {
           method: 'POST',
           headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
           },
           body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
       }

       fetch('https://accounts.spotify.com/api/token', authParameters)
           .then(results => results.json())
           .then(data => setAccessToken(data.access_token))
    }, []);

    async function search() {

        var trackParameters = {
            method: "Get",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            }
        };
        await fetch(`https://api.spotify.com/v1/search?q=${weatherData.weather[0].main}&type=track`, trackParameters)
            .then(response => response.json())
            .then(data => {
                console.log(data.tracks.items[0].preview_url);
                setTrackURI(data.tracks.items[0].preview_url);
            });

        await fetch(`https://api.spotify.com/v1/search?q=${weatherData.weather[0].main}&type=track`, trackParameters)
            .then(response => response.json())
            .then(data => {
                console.log(data.tracks.items[0].artists[0].name);
                setArtistName(data.tracks.items[0].artists[0].name);
            });

        await fetch(`https://api.spotify.com/v1/search?q=${weatherData.weather[0].main}&type=track`, trackParameters)
            .then(response => response.json())
            .then(data => {
                console.log(data.tracks.items[0].album.name);
                setTrackName(data.tracks.items[0].album.name);
            });


    }

    // Function for handling Unsplash API
    function handleChange(event){
        setPhoto(event.target.value)
    }

    function handleSubmit(event){


        const url = `https://api.unsplash.com/search/photos?query=${weatherData.weather[0].main}&client_id=` + clientID

        axios.get(url)
            .then(response => {
                console.log(response.data.results[0].urls.full);
                setImageURL(response.data.results[0].urls.full)
            })
    }

  return (
    <div>
      <HomePage onFormSubmit={handleFormSubmit} />
      {weatherData && (
            <div className="overlay-container">
              <div className="background-image"></div>
                <Container fluid>
                    <Row className="mx-2 justify-content-center align-content-center" style={{minHeight: '100vh', padding: '2rem'}}>
                        <Col xs={10} sm={8} md={6} lg={5} xl={4}>
                            <Card>
                                <CardImg src={imageURL}/>
                                <Card.Body>
                                    <Card.Title>{trackName}</Card.Title>
                                    <span>{artistName}</span>
                                </Card.Body>
                                    <div style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            padding: '2rem'}}>
                                      <audio src={trackURI} controls loop autoPlay />
                                    </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
      )}
      {error && <Alert variant="danger">{error}</Alert>}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import {Alert, Card, CardImg, Col, Container, InputGroup, Button, Form, Row} from "react-bootstrap";
import axios from "axios";
import SearchPage from "./SearchPage";
import SearchCityAgain from "./SearchCityAgain";
import {FormControl} from "react-bootstrap";


const CLIENT_ID = '327d46894e804b639c22cad035f65300'; // Replace with your actual Spotify client ID
const CLIENT_SECRET = '3626ccee911b49209110b815652c1b4f'; // Replace with your actual Spotify client secret
const UNSPLASH_CLIENT_ID = 'mLWJDZ3EaAi7sUZSEqqvJluHiEi_3X7XyDo3FwNjpF0'; // Replace with your actual Unsplash client ID

function WeatherMashUp() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [accessToken, setAccessToken] = useState("");
  const [trackURI, setTrackURI] = useState(null);
  const [artistName, setArtistName] = useState("");
  const [trackName, setTrackName] = useState("");
  const [imageURL, setImageURL] = useState(null);
  const [city, setCity] = useState('');

  // Function for handling Spotify API
  const fetchSpotifyData = async () => {
    try {
      const authParameters = new URLSearchParams({
        grant_type: "client_credentials",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      });

      const tokenResponse = await fetch(
        "https://accounts.spotify.com/api/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: authParameters,
        }
      );

      const tokenData = await tokenResponse.json();
      setAccessToken(tokenData.access_token);

      if (weatherData) {
        const trackResponse = await fetch(
          `https://api.spotify.com/v1/search?q=${weatherData?.weather[0]?.main}&type=track`,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + tokenData.access_token,
            },
          }
        );

        const trackData = await trackResponse.json();
        console.log(trackData);

        const trackItem = trackData?.tracks?.items[1];
        console.log(trackData?.tracks?.items[1]);

        if (trackItem) {
          setTrackURI(trackItem.preview_url);
          console.log(trackItem.preview_url);

          setArtistName(trackItem.artists[1]?.name);
          console.log(trackItem.artists[1]?.name);

          setTrackName(trackItem.name);
          console.log(trackItem.name);
        }
      }
    } catch (error) {
      console.error("Error fetching Spotify data:", error);
    }
  };

  // Function for handling Unsplash API
  const fetchUnsplashImage = async () => {
    try {
      if (weatherData) {
        const url = `https://api.unsplash.com/search/photos?query=${weatherData?.weather[0]?.main}&client_id=${UNSPLASH_CLIENT_ID}`;

        const response = await axios.get(url);
        const imageItem = response?.data?.results[0];
        if (imageItem) {
          setImageURL(imageItem.urls.full);
        }
      }
    } catch (error) {
      console.error("Error fetching Unsplash image:", error);
    }
  };

  useEffect(() => {
    fetchSpotifyData();
    fetchUnsplashImage();
  }, [weatherData]);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleFormSubmit(city);
    }
  };

  // Function for fetching the Open Weather API
  const handleFormSubmit = async (city) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8e8e4b98b1d96f4b0052ae515cece3be`);
      setWeatherData(response.data);
      setError(null);
      console.log(response.data)
    } catch (error) {
      setWeatherData(null);
      setError('City not found. Please enter a valid city name.');
    }
  };

  return (
    <div>
      {
        !weatherData && (
          <div className="overlay-container">
            <div className="background-image"></div>
            <Container fluid>
              <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <Col xs={10} sm={8} md={6} lg={5} xl={4}>
                  <InputGroup className="mb-3" style={{ zIndex: '1' }}>
                    <Form.Control
                      type="text"
                      placeholder="Enter the city's name"
                      aria-label="Enter the city's name"
                      aria-describedby="basic-addon2"
                      value={city}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                    />
                    <Button variant="dark" id="button-addon2" onClick={handleFormSubmit}>
                      Search
                    </Button>
                  </InputGroup>
                  {error && <Alert variant="danger">{error}</Alert>}
                </Col>
              </Row>
            </Container>
          </div>
        )
      }

      {weatherData && (
        <div className="overlay-container">
          <div className="background-image"></div>
          <Container
            fluid
            className="mx-2 justify-content-center d-flex"
            style={{ minHeight: "100vh", padding: "2rem" }}
          >
            <Col xs={10} sm={8} md={6} lg={5} xl={4}>
              <div>
                <InputGroup className="mb-3" style={{ zIndex: '1' }}>
                  <Form.Control
                    type="text"
                    placeholder="Enter the city's name"
                    aria-label="Enter the city's name"
                    aria-describedby="basic-addon2"
                    value={city}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                  />
                  <Button variant="dark" id="button-addon2" onClick={handleFormSubmit}>
                    Search
                  </Button>
                </InputGroup>
                {error && <Alert variant="danger">{error}</Alert>}
              </div>
              <Alert variant="light">
                  <Alert.Heading>{weatherData.name}</Alert.Heading>
                  <p>
                    There is {weatherData.weather[0].description} in {weatherData.name}
                  </p>
              </Alert>
              <Card
              >
                <CardImg src={imageURL}  style={{ height: "15rem", width: "auto", objectFit: "cover" }}/>
                <Card.Body>
                  <Card.Title>{trackName}</Card.Title>
                  <span>{artistName}</span>
                </Card.Body>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "2rem",
                  }}
                >
                  {trackURI ? (
                    <audio src={trackURI} controls loop autoPlay />
                  ) : (
                    <p>No preview available</p>
                  )}
                </div>
              </Card>
            </Col>
          </Container>
        </div>
      )}
    </div>
  );
}

export default WeatherMashUp;

import React, {useState, useEffect} from "react";
import {Alert, Button, Card, CardImg, Col, Container, Form, InputGroup, Row, Image} from "react-bootstrap";
import Image1 from '../media/images/patrick-tomasso-5hvn-2WW6rY-unsplash.jpg'

const CLIENT_ID = '327d46894e804b639c22cad035f65300';
const CLIENT_SECRET = '3626ccee911b49209110b815652c1b4f';

function Spotify({weatherData}) {

    const [searchInput, setSearchInput] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [trackURI, setTrackURI] = useState(null);
    const [artistName, setArtistName] = useState("");
    const [trackName, setTrackName] = useState("");
    const [imageURL, setImageURL] = useState(null);


    console.log(weatherData)

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

    return (
        <div className="overlay-container">
          <div className="background-image"></div>
            <Container fluid>
                <Row className="mx-2 justify-content-center align-content-center" style={{minHeight: '100vh', padding: '2rem'}}>
                    <Col xs={10} sm={8} md={6} lg={5} xl={4}>
                        <Card>
                            <CardImg src={Image1}/>
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
    );
}

export default Spotify;
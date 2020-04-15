import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Container, CardDeck, Card, Button } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <Container>
                    <h2 className="text-center mt-4">Our Team</h2>
                    <CardDeck className="m-4">
                        <Card bg="info">
                            <Card.Img 
                                variant="top"
                                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit. 
                                    Vivamus mattis accumsan elit.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit. 
                                    Vivamus mattis accumsan elit.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                            <Card.Img 
                                variant="bottom"
                                src="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />
                        </Card>
                        <Card>
                            <Card.Img 
                                variant="top"
                                src="https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit. 
                                    Vivamus mattis accumsan elit.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        )
    }
}

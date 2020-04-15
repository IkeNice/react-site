import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import first from '../asserts/first.jpeg';
import second from '../asserts/second.jpeg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item  style={{ height:'600px' }}>
                    <img
                        className="d-block w-100"
                        src={ first }
                        alt="first"
                    />
                    <Carousel.Caption>
                        <h3>First image</h3>
                        <p>Some text number one</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  style={{ height:'600px' }}>
                    <img
                        className="d-block w-100"
                        src={ second }
                        alt="second"
                    />
                    <Carousel.Caption>
                        <h3>Second image</h3>
                        <p>Some text number two</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

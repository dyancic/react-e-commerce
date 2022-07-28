import React from "react";
import Carousel from "react-bootstrap/Carousel";
import style from "./Featured.module.scss";

const Featured = () => {
    return (
        <Carousel
            className={style.Carousel}
            nextLabel={null}
            prevLabel={null}
            fade>
            <Carousel.Item interval={5000}>
                <img
                    src={"https://www.placecage.com/700/300"}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    src={"https://www.placecage.com/g/700/300"}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    src={"https://www.placecage.com/c/700/300"}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Featured;

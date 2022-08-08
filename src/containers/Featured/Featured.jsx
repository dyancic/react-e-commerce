import React from "react";
import Carousel from "react-bootstrap/Carousel";
import style from "./Featured.module.scss";

const Featured = ({ blogs }) => {
    return (
        <Carousel
            className={style.Carousel}
            nextLabel={null}
            prevLabel={null}
            fade>
            {blogs.map((blog, i) => {
                return (
                    <Carousel.Item interval={5000} key={i}>
                        <a href={blog.blog}>
                            <img
                                className={style.Carousel_Img}
                                src={blog.img}
                                alt="First slide"
                            />
                        </a>
                        <Carousel.Caption>
                            <h3 className={style.Carousel_Title}>
                                {blog.title}
                            </h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
};

export default Featured;

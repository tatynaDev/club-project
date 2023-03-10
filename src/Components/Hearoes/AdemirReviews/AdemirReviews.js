import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo from '../../../img/boyLogo.svg'
import girl from '../../../img/girlLogo.svg'
import erlan from '../../../img/girlLogo.svg'
import blue from '../../../img/girlLogo.svg'
import yellow from '../../../img/girlLogo.svg'

const AdemirReviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1024, settings: {
                slidesToShow: 3, slidesToScroll: 3,
                infinite: true, dots: false
            }
        },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2, initialSlide: 2
                }
            },
            {
                breakpoint: 576, settings: {
                    slidesToShow: 1, slidesToScroll: 1,
                    initialSlide: 1
                }
            }, {
                breakpoint: 480, settings: {
                    slidesToShow: 1, slidesToScroll: 1
                }
            }
        ]
    };

    const block = [{
        image: photo,
        name: "Виктор Александарович",
        desc: "С радостью оставляю положительной отзыв! Пройдя курс 'UX/UI Designer с нуля' я с остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и благодарю!",
        date: "3.02.2022 г"
    }, {
        image: photo,
        name: "Виктор Александарович",
        desc: "С радостью оставляю положительной отзыв! Пройдя курс 'UX/UI Designer с нуля' я с остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и благодарю!",
        date: "3.02.2022 г"
    }, {
        image: photo,
        name: "Виктор Александарович",
        desc: "С радостью оставляю положительной отзыв! Пройдя курс 'UX/UI Designer с нуля' я с остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и благодарю!",
        date: "3.02.2022 г"
    }, {
        image: girl,
        name: "Виктор Александарович",
        desc: "С радостью оставляю положительной отзыв! Пройдя курс 'UX/UI Designer с нуля' я с остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и благодарю!",
        date: "3.02.2022 г"
    }, {
        image: erlan,
        name: "Виктор Александарович",
        desc: "С радостью оставляю положительной отзыв! Пройдя курс 'UX/UI Designer с нуля' я с остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и благодарю!",
        date: "3.02.2022 г"
    }, {
        image: blue,
        name: "Виктор Александарович",
        desc: "С радостью оставляю положительной отзыв! Пройдя курс 'UX/UI Designer с нуля' я с остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и благодарю!",
        date: "3.02.2022 г"
    }, {
        image: yellow,
        name: "Виктор Александарович",
        desc: "С радостью оставляю положительной отзыв! Пройдя курс 'UX/UI Designer с нуля' я с остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и благодарю!",
        date: "3.02.2022 г"
    }
    ]
    return (<>
        <section id="slider">
            <div className="container">
                <div className="slider--general">
                    <h3>Отзывы наших студентов</h3>
                    <Slider {...settings}>
                        <div className="slider--general__block">
                            <img src={photo} alt=""/>
                            <h1>Виктор Александарович</h1>
                            <h2 className='hText'>С радостью оставляю положительной отзыв! Пройдя курс "UX/UI Designer с
                                нуля" я с
                                остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите
                                данную
                                школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и
                                благодарю!
                            </h2>
                            <h3>23.02.2022 г</h3>
                        </div>
                        <div className="slider--general__block">
                            <img src={photo} alt=""/>
                            <h1>Виктор Александарович</h1>
                            <h2 className='hText'>С радостью оставляю положительной отзыв! Пройдя курс "UX/UI Designer с
                                нуля" я с
                                остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите
                                данную
                                школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и
                                благодарю!
                            </h2>
                            <h3>23.02.2022 г</h3>
                        </div>
                        <div className="slider--general__block">
                            <img src={photo} alt=""/>
                            <h1>Виктор Александарович</h1>
                            <h2 className='hText'>С радостью оставляю положительной отзыв! Пройдя курс "UX/UI Designer с
                                нуля" я с
                                остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите
                                данную
                                школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и
                                благодарю!
                            </h2>
                            <h3>23.02.2022 г</h3>
                        </div>
                        <div className="slider--general__block">
                            <img src={photo} alt=""/>
                            <h1>Виктор Александарович</h1>
                            <h2 className='hText'>С радостью оставляю положительной отзыв! Пройдя курс "UX/UI Designer с
                                нуля" я с
                                остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите
                                данную
                                школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и
                                благодарю!
                            </h2>
                            <h3>23.02.2022 г</h3>
                        </div>
                        <div className="slider--general__block">
                            <img src={photo} alt=""/>
                            <h1>Виктор Александарович</h1>
                            <h2 className='hText'>С радостью оставляю положительной отзыв! Пройдя курс "UX/UI Designer с
                                нуля" я с
                                остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите
                                данную
                                школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и
                                благодарю!
                            </h2>
                            <h3>23.02.2022 г</h3>
                        </div>
                        <div className="slider--general__block">
                        <img src={photo} alt=""/>
                        <h1>Виктор Александарович</h1>
                        <h2 className='hText'>С радостью оставляю положительной отзыв! Пройдя курс "UX/UI Designer с
                            нуля" я с
                            остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите
                            данную
                            школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и
                            благодарю!
                        </h2>
                        <h3>23.02.2022 г</h3>
                    </div>

                    </Slider>
                </div>
            </div>
        </section>
    </>);
};
export default AdemirReviews;


import React from 'react';
import logo from '../img/логотип.svg'
import {NavLink} from "react-router-dom";
import {AiOutlineInstagram, AiOutlinePhone, AiOutlineTwitter, AiOutlineYoutube} from "react-icons/ai";
import {CiFacebook} from "react-icons/ci";
import {TbBrandTelegram, TbBrandTiktok} from "react-icons/tb";
import {GoLocation, GoMail} from "react-icons/go";


const Footer = () => {
    return (
        <div id="footer">
            <div className="container">

                <div className='footer'>
                    <div className="footer--first">
                       <NavLink to={'/'}> <img src={logo} alt="#"/></NavLink>
                        <div className="footer--first__btn">
                            <button>KG</button>
                            <button>RU</button>
                        </div>
                    </div>

                    <div className="footer--second">
                        <h3>Быстрые ссылки</h3>
                        <div className="col">
                            <NavLink style={{textDecoration:'none', color:"white", margin:'10px 0'}} to={'/AboutSchool'}>О школе</NavLink>
                            <NavLink style={{textDecoration:'none', color:"white", margin:'10px 0'}} to={'/OurCourses'}>Наши курсы</NavLink>
                            <NavLink style={{textDecoration:'none', color:"white", margin:'10px 0'}} to={'/AboutUs'}>О нас</NavLink>
                        </div>
                    </div>

                    <div className="footer--third">
                        <h3>Социальные сети</h3>
                        <div className='contact-icon'>
                            <AiOutlineInstagram className='marginIcon'
                                                style={{color:"white", margin:'0 10px', fontSize:'25px'}}/>
                            <AiOutlineYoutube className='marginIcon'
                                              style={{color:"white", margin:'0 10px', fontSize:'25px'}}/>
                            <CiFacebook className='marginIcon'
                                        style={{color:"white", margin:'0 10px', fontSize:'25px'}}/>
                        </div>
                        <div className='contact-icon'>
                            <AiOutlineTwitter className='marginIcon'
                                              style={{color:"white", margin:'0 10px', fontSize:'25px'}}/>
                            <TbBrandTiktok className='marginIcon'
                                           style={{color:"white", margin:'0 10px', fontSize:'25px'}}/>
                            <TbBrandTelegram className='marginIcon'
                                             style={{color:"white", margin:'0 10px', fontSize:'25px'}}/>
                        </div>
                    </div>
                    <div className="footer--fours">
                        <h3>Контакты</h3>
                        <div style={{margin:"10px 0"}} className='contact'>
                            <GoMail style={{color:'white', marginRight:'10px', fontSize:'20px'}}/>
                            <p style={{color:'white'}}>@motionwebteam@gmail.com</p>
                        </div>
                        <div style={{margin:"10px 0"}} className='contact'>
                            <AiOutlinePhone style={{color:'white', marginRight:'10px', fontSize:'20px'}}/>
                            <p style={{color:'white'}}>+996 559 - 69 - 26 - 26</p>
                        </div>
                    </div>
                    <div className="footer--fives">
                        <h3 >Адреса</h3>
                        <div style={{margin:"10px 0"}} className='loc'>
                            <GoLocation style={{color:'#FFFFFF', marginRight:'10px'}}/>
                            <p style={{color:'white'}}>Турусбекова 109 / 3</p>
                        </div>
                        <p style={{color:'white', margin:"10px 0" }}>Идентификационный  <br/> код: 1234567890</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
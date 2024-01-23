import React from 'react'
import style from './Carousel.module.css'


function Carousel() {
    return (
        <>
            <div className="container">

                <div className={style.TesxWrapper}>
                    <div id="carouselExample" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8sefBvbNKULTCD8IpqksQRXurQSA7sY-gY1aeerW2WS5uIVioko4SV54Nc_A5O0dZ_Ic&usqp=CAU" class="d-block w-100" alt="..." />
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`${style.CtextWrapper}`}>
                                            <span>Editor's Pick</span>
                                            <h2>Blogging is my Passion</h2>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus earum sint ducimus perspiciatis reprehenderit sed esse dolor eos corporis facilis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus earum sint ducimus perspiciatis reprehenderit sed esse dolor eos corporis facilis</p>
                                            <br />
                                            <p style={{ fontWeight: '500', fontSize: '18px' }}>Hasibul's Blog</p>
                                            <p>Date: 21/1/2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8sefBvbNKULTCD8IpqksQRXurQSA7sY-gY1aeerW2WS5uIVioko4SV54Nc_A5O0dZ_Ic&usqp=CAU" class="d-block w-100" alt="..." />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="CtextWrapper mt-5">
                                            <span>Editor's Pick</span>
                                            <h2>Blogging is my Passion</h2>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus earum sint ducimus perspiciatis reprehenderit sed esse dolor eos corporis facilis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus earum sint ducimus perspiciatis reprehenderit sed esse dolor eos corporis facilis</p>
                                            <br />
                                            <p style={{ fontWeight: '500', fontSize: '18px' }}>Hasibul's Blog</p>
                                            <p>Date: 21/1/2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8sefBvbNKULTCD8IpqksQRXurQSA7sY-gY1aeerW2WS5uIVioko4SV54Nc_A5O0dZ_Ic&usqp=CAU" class="d-block w-100" alt="..." />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="CtextWrapper mt-5">
                                            <span>Editor's Pick</span>
                                            <h2>Blogging is my Passion</h2>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus earum sint ducimus perspiciatis reprehenderit sed esse dolor eos corporis facilis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus earum sint ducimus perspiciatis reprehenderit sed esse dolor eos corporis facilis</p>
                                            <br />
                                            <p style={{ fontWeight: '500', fontSize: '18px' }}>Hasibul Blog</p>
                                            <p>Date: 21/1/2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <button style={{ marginLeft: '-120px', transform: 'scale(1.8)' }} className="carousel-control-prev" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <img src="img/arrowKeys/arrow-left.svg" alt="" />
                        </button>
                        <button style={{
                            marginRight: '-120px',
                            transform: 'scale(1.8)'
                        }} class="carousel-control-next" data-bs-target="#carouselExample" data-bs-slide="next">
                            <img src="img/arrowKeys/arrow-right.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel
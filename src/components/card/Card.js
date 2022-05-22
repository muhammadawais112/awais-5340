import React from 'react';
import "./Card.css"
import card1 from "../../assets/card1.jpg";
import { BiStar } from "react-icons/bi";
import card2 from "../../assets/card2.png"
import card3 from "../../assets/card3.jpg";
import card4 from "../../assets/card4.jpg";
import card5 from "../../assets/card5.jpg";
import card6 from "../../assets/card6.jpg"

function Card() {
    return (
        <div>
            <h1 className="mt-5 text-center fw-bold text-danger">PRODUCT</h1>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mt-3">
                            <div className="product-1 align-item-center p-2 text-center">
                                <img src={card1} alt="" class="rounded" width="160" />
                                <h5>
                                    Shoe
                                </h5>
                                <div className="mt-3 info">
                                    <span className='text1 d-block'>Lorem ipsum dolor sit amet consectetur.</span>
                                    <span className='text1 d-block'>Lorem ipsum dolor.</span>


                                </div>
                                <div className="const mt-3 text-dark">
                                    <span>$20</span>
                                    <div className="star mt-3 text-center">
                                        <BiStar style={{
                                            color: "yellow"
                                        }} />
                                        <BiStar style={{
                                            color: "yellow"
                                        }} />
                                        <BiStar style={{
                                            color: "yellow"
                                        }} />
                                        <BiStar />
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 shoe text-center  text-white mt-3 cursor">
                                <span className='text-upper-case'>Add to Cart</span>
                            </div>
                        </div>
                    </div>



                    <div className="col-md-4">
                        <div className="card mt-3">
                            <div className="product-1 align-item-center p-2 text-center">
                                <img src={card2} alt="" class="rounded" width="160" />
                                <h5>
                                    Shirt
                                </h5>
                                <div className="mt-3 info">
                                    <span className='text1 d-block'>Lorem ipsum dolor sit amet consectetur.</span>
                                    <span className='text1 d-block'>Lorem ipsum dolor.</span>


                                </div>
                                <div className="const mt-3 text-dark">
                                    <span>$20</span>
                                    <div className="star mt-3 text-center">
                                        <BiStar style={{
                                            color: "yellow"
                                        }} />
                                        <BiStar style={{
                                            color: "yellow"
                                        }} />
                                        <BiStar style={{
                                            color: "yellow"
                                        }} />
                                        <BiStar />
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 shoe text-center text-white mt-3 cursor">
                                <span className='text-upper-case'>Add to Cart</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mt-3">
                            <div className="product-1 align-item-center p-2 text-center">
                                <img src={card3} alt="" class="rounded" width="160" />
                                <h5>
                                    Watch
                                </h5>
                                <div className="mt-3 info">
                                    <span className='text1 d-block'>Lorem ipsum dolor sit amet consectetur.</span>
                                    <span className='text1 d-block'>Lorem ipsum dolor.</span>


                                </div>
                                <div className="const mt-3 text-dark">
                                    <span>$20</span>
                                    <div className="star mt-3 text-center">
                                        <BiStar style={{
                                            color: "yellow"
                                        }} />
                                        <BiStar style={{
                                            color: "yellow"
                                        }} />
                                        <BiStar style={{
                                            color: "yellow"
                                        }} />
                                        <BiStar />
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 shoe text-center text-white mt-3 cursor">
                                <span className='text-upper-case'>Add to Cart</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mt-3">
                                <div className="product-1 align-item-center p-2 text-center">
                                    <img src={card4} alt="" class="rounded" width="160" />
                                    <h5>
                                        Shoe
                                    </h5>
                                    <div className="mt-3 info">
                                        <span className='text1 d-block'>Lorem ipsum dolor sit amet consectetur.</span>
                                        <span className='text1 d-block'>Lorem ipsum dolor.</span>


                                    </div>
                                    <div className="const mt-3 text-dark">
                                        <span>$20</span>
                                        <div className="star mt-3 text-center">
                                            <BiStar style={{
                                                color: "yellow"
                                            }} />
                                            <BiStar style={{
                                                color: "yellow"
                                            }} />
                                            <BiStar style={{
                                                color: "yellow"
                                            }} />
                                            <BiStar />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 shoe text-center  text-white mt-3 cursor">
                                    <span className='text-upper-case'>Add to Cart</span>
                                </div>
                            </div>
                        </div>



                        <div className="col-md-4">
                            <div className="card mt-3">
                                <div className="product-1 align-item-center p-2 text-center">
                                    <img src={card5} alt="" class="rounded" width="160" />
                                    <h5>
                                        PentCourt
                                    </h5>
                                    <div className="mt-3 info">
                                        <span className='text1 d-block'>Lorem ipsum dolor sit amet consectetur.</span>
                                        <span className='text1 d-block'>Lorem ipsum dolor.</span>


                                    </div>
                                    <div className="const mt-3 text-dark">
                                        <span>$20</span>
                                        <div className="star mt-3 text-center">
                                            <BiStar style={{
                                                color: "yellow"
                                            }} />
                                            <BiStar style={{
                                                color: "yellow"
                                            }} />
                                            <BiStar style={{
                                                color: "yellow"
                                            }} />
                                            <BiStar />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 shoe text-center text-white mt-3 cursor">
                                    <span className='text-upper-case'>Add to Cart</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mt-3">
                                <div className="product-1 align-item-center p-2 text-center">
                                    <img src={card6} alt="" class="rounded" width="160" />
                                    <h5>
                                        Watch
                                    </h5>
                                    <div className="mt-3 info">
                                        <span className='text1 d-block'>Lorem ipsum dolor sit amet consectetur.</span>
                                        <span className='text1 d-block'>Lorem ipsum dolor.</span>


                                    </div>
                                    <div className="const mt-3 text-dark">
                                        <span>$20</span>
                                        <div className="star mt-3 text-center">
                                            <BiStar style={{
                                                color: "yellow"
                                            }} />
                                            <BiStar style={{
                                                color: "yellow"
                                            }} />
                                            <BiStar style={{
                                                color: "yellow"
                                            }} />
                                            <BiStar />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 shoe text-center text-white mt-3 cursor">
                                    <span className='text-upper-case'>Add to Cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Card;
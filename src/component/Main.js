import React from "react";
import { useState } from "react";
import './Main.css'

function Main() {

    const [selectedPrice, setSelectedPrice] = useState(null);

    const handlePriceChange = (event) => {
        setSelectedPrice(event.target.value);
    };

    return (

        <div className="main">

            <div className="left-main">

                <div className="heading">
                    <h1>Access curated courses worth <br></br> &#8377; <strike style={{ color: "red" }} ><span style={{ color: "white" }} >18,500</span></strike> at just <span>&#8377;99</span> per year! </h1>
                </div>

                <div className="features">

                    <div className="feature">
                        <img src="/assets/Icon.png" alt="img"></img>
                        <p><span>100+</span>Job relevant courses</p>
                    </div>

                    <div className="feature">
                        <img src="/assets/Icon-1.png" alt="img"></img>
                        <p><span>20,000+</span>Hours of content</p>
                    </div>

                    <div className="feature">
                        <img src="/assets/Icon-2.png" alt="img"></img>
                        <p><span>Exclusive</span>Webinar access</p>
                    </div>

                    <div className="feature">
                        <img src="/assets/Icon-3.png" alt="img"></img>
                        <p>Scholarship worth <span>&#8377; 94,500</span></p>
                    </div>

                    <div className="feature">
                        <img src="/assets/Icon-4.png" alt="img"></img>
                        <p><span>Ad Free </span>learning experience</p>
                    </div>

                </div>

            </div>

            <div className="right-main">

                <div className="signup">
                    <div>
                        <h4>1</h4>
                        <p>Sign Up</p>
                    </div>

                    <div>
                        <h4>2</h4>
                        <p>Subscribe</p>
                    </div>
                </div>

                <h2 className="heading-right">Select your subscription plan</h2>

                <form className="expired">

                    <input checked type="radio" id="one" name="price-expired"></input>
                    <label className="label" for='one'>

                        <div className="absolute-expired">Offer expired</div>

                        <div className="period-expired">12 Months subscription</div>

                        <div className="price-expired">
                            <p className="price-top">Total   <span>&#8377;99</span></p>
                            <p className="price-bottom">&#8377;8 <span>/mo</span></p>
                        </div>

                    </label>

                </form>

                <form className="form">
                    <div className={`two ${selectedPrice === 'two' ? 'selected' : ''}`}>

                        <input
                            type="radio"
                            id="two"
                            name="price"
                            value="two"
                            onChange={handlePriceChange}
                        />
                        <label htmlFor="two">
                            
                            <div className="absolute">Recommended</div>
                            <div className="period">12 Months subscription</div>
                            <div className="price">
                                <p className="price-top">
                                    Total  &nbsp; <span>&#8377;179</span>
                                </p>
                                <p className="price-bottom">
                                    &#8377;15 <span>/mo</span>
                                </p>
                            </div>

                        </label>
                    </div>

                    <div className={`three ${selectedPrice === 'three' ? 'selected' : ''}`}>

                        <input
                            type="radio"
                            id="three"
                            name="price"
                            value="three"
                            onChange={handlePriceChange}
                        />
                        <label htmlFor="three">
                            <div className="period">6 Months subscription</div>
                            <div className="price">
                                <p className="price-top">
                                    Total &nbsp; <span>&#8377;149</span>
                                </p>
                                <p className="price-bottom">
                                    &#8377;25 <span>/mo</span>
                                </p>
                            </div>
                        </label>
                    </div>

                    <div className={`four ${selectedPrice === 'four' ? 'selected' : ''}`}>

                        <input
                            type="radio"
                            id="four"
                            name="price"
                            value="four"
                            onChange={handlePriceChange}
                        />
                        <label htmlFor="four">
                            <div className="period">3 Months subscription</div>
                            <div className="price">
                                <p className="price-top">
                                    Total &nbsp; <span>&#8377;99</span>
                                </p>
                                <p className="price-bottom">
                                    &#8377;33 <span>/mo</span>
                                </p>
                            </div>
                        </label>
                    </div>
                </form>

                <div className="fee-box">

                    <div className="sub-fee">
                        <p>subscription Fee</p>
                        <p>&#8377;18,500</p>
                    </div>

                    <div className="limited">

                        <div className="limited-top">
                            <p className="limited-left-top">Limited time offer</p>
                            <p className="limited-right-top">-&#8377;18,401</p>
                        </div>

                        <div className="offer-time">
                            <img src="/assets/Icon Clock.png" alt="img"></img>
                            <p>Offer valid till 25th March 2023</p>
                        </div>

                    </div>

                    <div className="total">
                        <p>Total<span>(Inc. of 18% GST)</span></p>
                        <h4>&#8377;149</h4>
                    </div>

                </div>

                <div className="buttons">
                    <button className="cancel">CANCEL</button>
                    <button className="proceed">PROCEED TO PAY</button>
                </div>

                <img src="/assets/Razorpay Icon.png" alt="img" />

            </div>

        </div>

    )

}

export default Main;
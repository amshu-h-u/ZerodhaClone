import React from 'react';
function Hero() {
    return ( 
       <div className='text-center container p-5 mt-5'>
        <div className='mb-5'>
        <h1>Pricing</h1>
        <h5 className='text-muted mt-3'>List of all charges and taxes</h5>
        </div>
        <div className='row border-top p-5'>
            <div className='col-4 p-4 mt-5'>
                <img src="Media/Images/pricingEquity.svg" alt="Equity"/>
                <h2>Free equity delivery</h2>
                <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className='col-4 p-4 mt-5'>
            <img src="Media/Images/intradayTrades.svg" alt="Equity"/>
            <h2>Intraday and F&O trades</h2>
            <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className='col-4 p-4 mt-5'>
            <img src="Media/Images/pricingEquity.svg" alt="Equity"/>
            <h2>Free direct MF</h2>
            <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
       </div>

     );
}

export default Hero;
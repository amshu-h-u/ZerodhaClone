import React from 'react';
function Brokerage() {
    return (  
        <div className='container'>
            <div className='row mt-5 p-5 border-top'>
                <div className='col-8 p-4 text-center '>
                    <h4><a href="#" style={{textDecoration:"none"}}>Brokerage calculator</a></h4>
                    <ul className='text-muted' style={{lineHeight:"35px",textAlign:"left",fontSize:"12px"}}>
                    <li>Securities/Commodities transaction tax</li>
                    <li>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery.</li>
                    <li>Charged only on selling side when trading intraday or on F&O.</li>
                    <li>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</li>
                    <li>Transaction/Turnover Charges</li>
                    <li>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</li>
                    </ul>
                </div>
                <div className='col-4 p-4 text-center'>
                <h4><a href="#" style={{textDecoration:"none"}}>List Charges</a></h4>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;
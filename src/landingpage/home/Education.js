import React from 'react';
function Education() {
    return ( 
       <div className='container mt-5'>
        <div className='row'>
            <div className='col-6'>
                <img src="Media/Images/education.svg" alt="varsity" style={{width:"70%"}}/>
            </div>
            <div className='col-6'>
                <h2>Free and open market education</h2>
                <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advancred trading.</p>
                <a href="#" style={{textDecoration:"none"}}>varsity <i class="fa fa-long-arrow-right"></i></a>
                <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href="#" style={{textDecoration:"none"}}>TradingQ&A <i class="fa fa-long-arrow-right"></i></a>
            </div>
        </div>
       </div>
     );
}

export default Education;
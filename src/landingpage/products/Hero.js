import React from 'react';
function Hero() {
    return (
       <div className='container  mt-5 p-5 border-bottom'>
        <div className='text-center mb-5 '>
          <h1>Zerodha Products</h1>
          <h4 className='text-muted mt-3'>Sleek, modern, and intuitive trading platforms</h4>
          <p className='mt-3'>Check out our <a href="#" style={{textDecoration:"none"}} >investment offerings </a><i class="fa fa-long-arrow-right"></i></p>
        </div>
       </div>
      );
}

export default Hero;
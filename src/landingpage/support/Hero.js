import React from 'react';
function Hero() {
    return ( 
        <section className='container-fluid' style={{backgroundColor:"rgb(56,126,509)",color:"white"}} id="superhero">
            <div className='p-5' id="supportwrapper">
            <h3>Support Portal</h3>
            <a href="#" style={{color:"white"}}>Track tickets</a>
            </div>
            <div className='row p-5 mb-5'>
                <div className='col-6 p-5'>
                  <h1>Search for an answer or browse help topics to create a ticket</h1>
                  <input placeholder='Eg. How do I active F&O'/>
                  <a href="#" style={{color:"white"}} className='mx-2'>Track account opening</a>
                  <a href="#" style={{color:"white"}} className='mx-2'>Track segment activation </a>
                  <a href="#" style={{color:"white"}} className='mx-2'>Intraday marginsKite</a>
                  <a href="#" style={{color:"white"}} className='mx-2'>user manual</a>
                </div>
                <div className='col-6  p-5 '>
                    <h1>Featured</h1>
                    <ol>
                        <li><a href="#" style={{color:"white"}}>Track account opening</a></li>
                        <li><a href="#" style={{color:"white"}}>Track segment activation</a></li>
                    </ol>
                </div>
            </div>
           
        </section>
     );
}

export default Hero;
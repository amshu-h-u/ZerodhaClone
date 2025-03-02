import React from 'react';
function LeftSection({image,productName,productDescription,tryMore,learnMore,googleStore,appStore}) {
    return ( 
       <div className='container'>
        <div className='row'>
            <div className='col-6 mt-5'>
                <img src={image} />
            </div>
            <div className='col-6 p-5'>
                <h2>{productName}</h2>
                <p>{productDescription}</p>
                <a href={tryMore} >Try more</a>
                <a href={learnMore} className='mx-5'>Learn more</a><br/>
                <img src={googleStore} className='mt-3'/>
                <img src={appStore} className='mt-3'/>
            </div>
        </div>
       </div>
     );
}

export default LeftSection;
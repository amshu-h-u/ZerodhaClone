import React from 'react';
function RightSection({image,productName,productDescription,learnMore}) {
    return ( 
        <div className='container'>
        <div className='row'>
        <div className='col-6 p-5 mt-5'>
                <h2>{productName}</h2>
                <p>{productDescription}</p>
                <a href={learnMore} className='mx-5'>Learn more</a>
            </div>
            <div className='col-6'>
                <img src={image} />
            </div>
        </div>
       </div>
     );
}

export default RightSection;
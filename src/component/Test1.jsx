import React from 'react';

const Test1 = ({ imgs }) => {
  
  return (
   <div style={{display:'flex',flexWrap:'wrap',columnGap:'1em', rowGap:'1em'}}>
   {imgs.map((myImage, index) => (
    <div key={index} style={{border:'1px solid orange',width:'10%'}}>
      <a>
        <img src={myImage.imgUrl} alt={myImage.altText} style={{ height: '100px', width: '100%' }} />
      </a>
    </div>
  ))}
   </div>
  );
};

export default Test1;

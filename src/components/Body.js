import React from 'react';
const imageData = [
    {
      id:1,
      img:lake 
    },
    {
      id:2,
      img:lake
    },
    {
      id:3,
      img:lake
    },
    {
      id:4,
      img:lake
    }
  ]

export default function Body() {
  return (
    <div>
       {
          imageData.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
        }
    </div>
  );
}

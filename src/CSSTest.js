import React, { useEffect, useState } from 'react';
import './App.css';

function CSSTest() {
  const [allImage, setAllImage] = useState([]);

  useEffect(() => {
    fetchImage()
  },[])

  const fetchImage = async() => {
    const data = await fetch('https://picsum.photos/v2/list')
    const getImage = await data.json();
    setAllImage(getImage)
  }
  return (
    <div className='container'>
      <br></br>
      <div className='textHeader'>
        Everyone's photos
      </div>
      <br></br>
      {allImage.length > 0 && (
        <div className='photoView'>
            {allImage.map(image => {
              return(
                  <div className="photo" key={image.id}>
                      <img src={image.download_url} alt="unsplash images" />
                  </div>
              )
            })}
        </div>
      )}
    </div>
  );
}

export default CSSTest;

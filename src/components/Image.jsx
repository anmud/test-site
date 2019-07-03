import React from 'react'

const Image = ({ url }) => {

    const styles = {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  
    return (
      <div className="image" style={styles}></div>
    );
  }

export default Image
import React from 'react'
import './Recommended.css'
import thumbnail1 from '../../src/assets/thumbnail1.png'
import thumbnail2 from '../../src/assets/thumbnail2.png'
import thumbnail3 from '../../src/assets/thumbnail3.png'
import thumbnail4 from '../../src/assets/thumbnail4.png'
import thumbnail5 from '../../src/assets/thumbnail5.png'
import thumbnail6 from '../../src/assets/thumbnail6.png'
import thumbnail7 from '../../src/assets/thumbnail7.png'
import thumbnail8 from '../../src/assets/thumbnail8.png'


const Recommended = () => {
  return (
    <div className='recommended'>
        <div className="side-video-list">
            <img src={thumbnail1} alt="" />
            <div className="vid-info">
                <h4>Best channel</h4>
                <p>GreatStack</p>
                <p>199K Views</p>
            </div>
        </div>
    </div>
  )
}

export default Recommended
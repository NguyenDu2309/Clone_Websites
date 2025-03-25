import React from 'react'
import './PlayVideo.css'
import video1 from '../../src/assets/video.mp4'
import like from '../../src/assets/like.png'
import dislike from '../../src/assets/dislike.png'
import share from '../../src/assets/share.png'
import save from '../../src/assets/save.png'
import jack from '../../src/assets/jack.png'
import user_profile from '../../src/assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted></video>
        <h3>Best Youtube channel to learn Web Dev</h3>
        <div className="play-video-info">
            <p>1525 Views &bull; 2 days ago</p>
            <div>
                <span><img src={like} alt="" />123</span>
                <span><img src={dislike} alt="" />1</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
          <img src={jack} alt="" />
          <div>
            <p>GreatStack</p>
            <span>1M Subscribers</span>
          </div>
          <button>Subscribe</button>
        </div>
        <div className="vid-description">
          <p>Channel that makes learning easy</p>
          <p>Subscribe to GreatStack to watch more...</p>
          <hr/>
          <h4>120 comments</h4>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>Du Nguyen <span>2 days ago</span></h3>
              <p>you are amazing i remember when you used to make small projects videos now your making clones for big apps this 10x more amazing keep posting we want series for big apps like this long videos</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>Du Nguyen <span>2 days ago</span></h3>
              <p>you are amazing i remember when you used to make small projects videos now your making clones for big apps this 10x more amazing keep posting we want series for big apps like this long videos</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div><div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>Du Nguyen <span>2 days ago</span></h3>
              <p>you are amazing i remember when you used to make small projects videos now your making clones for big apps this 10x more amazing keep posting we want series for big apps like this long videos</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div><div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>Du Nguyen <span>2 days ago</span></h3>
              <p>you are amazing i remember when you used to make small projects videos now your making clones for big apps this 10x more amazing keep posting we want series for big apps like this long videos</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div><div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>Du Nguyen <span>2 days ago</span></h3>
              <p>you are amazing i remember when you used to make small projects videos now your making clones for big apps this 10x more amazing keep posting we want series for big apps like this long videos</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PlayVideo
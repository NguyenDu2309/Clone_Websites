import React from 'react'
import './Sidebar.css'
import home from '../../src/assets/home.png'
import game_icon from '../../src/assets/game_icon.png'
import automobiles from '../../src/assets/automobiles.png'
import sports from '../../src/assets/sports.png'
import entertainment from '../../src/assets/entertainment.png'
import tech from '../../src/assets/tech.png'
import music from '../../src/assets/music.png'
import blogs from '../../src/assets/blogs.png'
import news from '../../src/assets/news.png'
import jack from '../../src/assets/jack.png'
import simon from '../../src/assets/simon.png'
import tom from '../../src/assets/tom.png'
import megan from '../../src/assets/megan.png'
import cameron from '../../src/assets/cameron.png'





const Sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="shortcut-links">
            <div className="side-link">
                <img src={home} alt="" /><p>Home</p>
            </div>
            <div className="side-link">
                <img src={game_icon} alt="" /><p>Gaming</p>
            </div>
            <div className="side-link">
                <img src={automobiles} alt="" /><p>Automobiles</p>
            </div>
            <div className="side-link">
                <img src={sports} alt="" /><p>Sports</p>
            </div>
            <div className="side-link">
                <img src={entertainment} alt="" /><p>Entertainment</p>
            </div>
            <div className="side-link">
                <img src={tech} alt="" /><p>Technology</p>
            </div>
            <div className="side-link">
                <img src={music} alt="" /><p>Music</p>
            </div>
            <div className="side-link">
                <img src={blogs} alt="" /><p>Blogs</p>
            </div>
            <div className="side-link">
                <img src={news} alt="" /><p>News</p>
            </div>
            <hr />
        </div>

        <div className="subscribed-list">
            <h3>Subscribed</h3>
            <div className="side-link">
                <img src={jack} alt="" /><p>PewDiePie</p>
            </div>
            <div className="side-link">
                <img src={simon} alt="" /><p>MrBeast</p>
            </div>
            <div className="side-link">
                <img src={tom} alt="" /><p>Justin Bieber</p>
            </div>
            <div className="side-link">
                <img src={megan} alt="" /><p>5 Minutes Crafts</p>
            </div>
            <div className="side-link">
                <img src={cameron} alt="" /><p>Nas Daily</p>
            </div>
        </div>

    </div>
  )
}

export default Sidebar
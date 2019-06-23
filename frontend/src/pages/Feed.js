import React, { Component } from 'react';

import './Feed.css'

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

// style class written component
class Feed extends Component {
    render() {
        return (
            <section id="post-list">
                {/* 1st post */}
                <article>
                    <header>
                        <div className="user-info">
                            <span>Luis Valgoi</span>
                            <span className="place">RS</span>
                        </div>
                        
                        <img src={more} alt="Mais" />
                    </header>

                    <img src="http://localhost:3333/files/Screenshot_10.jpg" alt="" />

                    <footer>
                        <div className="actions">
                            <img src={like} alt="" />
                            <img src={comment} alt="" />
                            <img src={send} alt="" />
                        </div>
                        <strong>900 curtidas</strong>
                        <p>
                            Um post mto tri
                            <span>#react #omnistack #top</span>
                        </p>
                    </footer>
                </article>

                {/* 2nd post */}
                <article>
                    <header>
                        <div className="user-info">
                            <span>Luis Valgoi</span>
                            <span className="place">RS</span>
                        </div>
                        
                        <img src={more} alt="Mais" />
                    </header>

                    <img src="http://localhost:3333/files/Screenshot_10.jpg" alt="" />

                    <footer>
                        <div className="actions">
                            <img src={like} alt="" />
                            <img src={comment} alt="" />
                            <img src={send} alt="" />
                        </div>
                        <strong>900 curtidas</strong>
                        <p>
                            Um post mto tri
                            <span>#react #omnistack #top</span>
                        </p>
                    </footer>
                </article>
            </section>
        );
    }
}

export default Feed;
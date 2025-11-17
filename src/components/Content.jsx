import React from "react";
import "./Content.css";

const Content = () => {
  return (
   <section class="playlists">
            <h2>Popular Playlists</h2>
            <div class="playlist-grid">
                <div class="playlist-card">    
                    <img src="" alt="" />
                    <p>Today's Top Hits</p>
                </div>
                <div class="playlist-card">
                    <img src="" alt="" />
                    <p>RapCaviar</p>
                </div>
                <div class="playlist-card">
                    <img src="" alt="" />
                    <p>Peaceful Piano</p>
                </div>
                <div class="playlist-card">
                    <img src="" alt="" />
                    <p>Mood Booster</p>
                </div>
            </div>
        </section>
  );
};

export default Content;
import './homestyle.css';
import './dynamic_colors.css';


const Home = () => {

  return (
    <div className="mainbg lightfill">
      <div className="leftpane mainfill">
        <div className="logos darkfontfill">
          <span className="material-symbols-outlined" id="logoaudious">music_note</span>
          musica
        </div>
        <div id="ondevt" className="darkfontfill">
          Recommended songs :-
        </div>
        <div className="ondev">
          {/* Example card template */}
          <div className="dcard1 darkborder">
              <div className="songcard lightfill">
                <span className="material-symbols-outlined darkfontfill" id="logoaudious">music_note</span>
              </div>
              <p className="darkfontfill songfilet">Song file name</p>
              <span className="material-symbols-outlined darkfontfill dc1p">play_circle</span>
          </div>
        </div>
      </div>
      
      <div className="rightpane">
        <div className="searchbox">
          <input id="myInput" type="text" placeholder="Search Song Here..." className="mainoutline" />
          <button className="mainfill mainoutline">Search</button>
        </div>
        
        <div className="playlistsbox">
          {/* Example card template */}
          <div className="card1 mainfill">
              <div className="songpic1" style={{backgroundImage: "url('https://t3.ftcdn.net/jpg/03/01/43/92/360_F_301439209_vpF837oCGM1lp0cnC7stzCBn3th0dQ6O.jpg')"}}></div>
              <p className="songpicname darkfontfill">Playlist Name</p>
          </div>
        </div>

        <div className="player darkfill">
          <div className="abovebar">
            <div className="songinfo mainfontfill">Song Name</div>
            <div id="controls" className="mainfontfill fill">
              <span className="material-symbols-outlined" id="previous">skip_previous</span>
              <span className="material-symbols-outlined" id="play" >play_circle</span>
              <span className="material-symbols-outlined" id="next">skip_next</span>
            </div>
            <div className="songtime mainfontfill">00:00 / 00:00</div>
          </div>
          <div className="seekbar">
            <div className="seekbarc lightfill"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
import { LitElement, html, css } from "lit-element";
import "latt";
import { until } from "lit-html/directives/until.js";

class Lander extends LitElement {
  static get styles() {
    return css`
      /* app css */
      ::selection {
        color: #c4c4c4;
        background: #424242;
      }

      ::-webkit-scrollbar {
        width: 5px;
      }

      ::-webkit-scrollbar-track {
        background: #a1a1a1;
      }

      ::-webkit-scrollbar-thumb {
        background: #888888;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #555555;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      @media only screen and (max-width: 600px) {
      }

      @media only screen and (min-width: 600px) {
      }

      /* page css */
      .title {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 20%;
      }

      #title {
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
        z-index: 2;
        font-size: 9vw;
        font-weight: 700;
        color: #424242;
        user-select: none;
      }

      .menu {
        position: absolute;
        width: 100%;
        height: 85%;
        top: 15%;
        left: 0;
        bottom: 0;
        background-color: #b4b4b4;
        border-radius: 10px 10px 0px 0px;
        transition: 150ms top ease-in-out;
        z-index: 2;
      }

      .handle {
        position: absolute;
        top: 4%;
        left: 50%;
        transform: translateX(-50%);
        background-color: #a4a4a4;
        width: 25%;
        height: 1%;
        border-radius: 10px;
        user-select: none;
      }

      .container {
        position: absolute;
        top: 9%;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% - 8vw);
        height: calc(100% - 10vh);
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        gap: 2em 0px;
        grid-template-areas:
          "section-1"
          "section-2"
          "section-3"
          "section-4"
          "section-5";
      }

      .section {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #a4a4a4;
        border-radius: 10px;
        cursor: pointer;
      }

      .centered {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      .section-title {
        font-size: 10vw;
        font-weight: 600;
        color: #696969;
      }

      .section-1 {
        grid-area: section-1;
      }

      .section-2 {
        grid-area: section-2;
      }

      .section-3 {
        grid-area: section-3;
      }

      .section-4 {
        grid-area: section-4;
      }

      .section-5 {
        grid-area: section-5;
      }

      .pages {
        position: absolute;
        width: 100%;
        top: 20%;
        left: 0;
        height: 80%;
        z-index: 1;
      }

      .page {
        margin-left: 5vw;
        margin-top: 0;
        margin-right: 5vw;
        margin-bottom: 3vh;
        border-radius: 10px;
        height: calc(100% - 4vh);
        width: calc(100% - 10vw);
        z-index: 2;
        background-color: #b4b4b4;
      }

      .page-title {
        position: relative;
        left: 4vw;
        top: 2vh;
        font-size: 7vw;
        font-weight: 600;
        color: #424242;
        user-select: none;
      }

      .page-content {
        position: relative;
        left: 4vw;
        top: 5.5vw;
        width: calc(100% - 8vw);
        height: calc(100% - 20vw);
      }

      .page-content-title {
        font-size: 5vw;
        color: #545454;
        font-weight: 500;
        user-select: none;
      }

      .page-content-text {
        font-size: 3.5vw;
        color: #696969;
        font-weight: 500;
        user-select: none;
      }

      hr {
        position: inherit;
        margin-left: 0;
        width: calc(100% - 1.25vw);
        height: 2px;
        background-color: #888;
        border: none;
      }

      a {
        border-bottom: 2px solid #a4a4a4;
        transition: 150ms border-bottom ease-in-out;
      }

      .link {
        border-bottom: 2px solid #a4a4a4;
        transition: 150ms border-bottom ease-in-out;
      }

      #launches {
        display: none;
      }

      #streams {
        display: none;
      }

      #status {
        display: none;
      }

      #vehicle {
        display: none;
      }

      #settings {
        overflow-y: scroll;
        overflow-x: hidden;
      }
    `;
  }

  /*getStatus() {
    var status = fetch("https://devserver.dwnlnk.repl.co/internal")
      .then((response) => response.json())
      .then((data) => {
        return data.status;
      });
    return html`<span>${until(status, html`<span>loading...</span>`)}</span>`;
  }

  getStarshipStatus() {
    var starship = fetch("https://devserver.dwnlnk.repl.co/internal")
      .then((response) => response.json())
      .then((data) => {
        return data.vehicle.starship.active;
      });
    return starship;
  }

  getSuperheavyStatus() {
    var superheavy = fetch("https://devserver.dwnlnk.repl.co/internal")
      .then((response) => response.json())
      .then((data) => {
        return data.vehicle.superheavy.active;
      });
    return superheavy;
  }*/

  constructor(){
    super();
    this.startY = 0;
    this.endY = 0;
  }

  firstUpdated(){
    var menu, titleBox, title, pages;
    var launches, streams, status, vehicle, settings;
    var launchesDiv, streamsDiv, statusDiv, vehicleDiv, settingsDiv;
    for(var i = 0; i < this.shadowRoot.childNodes.length; i++){
      if(this.shadowRoot.childNodes[i].className === "menu"){
        menu = this.shadowRoot.childNodes[i];
        //console.log(menu.childNodes[3].childNodes);
        launches = menu.childNodes[3].childNodes[1];
        streams = menu.childNodes[3].childNodes[3];
        status = menu.childNodes[3].childNodes[5];
        vehicle = menu.childNodes[3].childNodes[7];
        settings = menu.childNodes[3].childNodes[9];
      }

      if(this.shadowRoot.childNodes[i].className === "title"){
        titleBox = this.shadowRoot.childNodes[i];
        var length = this.shadowRoot.childNodes[i].childNodes.length;
        for(var x = 0; x < length; x++){
          if(this.shadowRoot.childNodes.[i].childNodes[x].id === "title"){
            title = this.shadowRoot.childNodes[i].childNodes[x];
          }
        }
      }

      if(this.shadowRoot.childNodes[i].className === "pages"){
        pages = this.shadowRoot.childNodes[i];

        for(var x = 0; x < this.shadowRoot.childNodes[i].childNodes.length; x++){
          if(this.shadowRoot.childNodes.[i].childNodes[x].id === "launches"){
            launchesDiv = this.shadowRoot.childNodes[i].childNodes[x];
          }
          if(this.shadowRoot.childNodes.[i].childNodes[x].id === "streams"){
            streamsDiv = this.shadowRoot.childNodes[i].childNodes[x];
          }
          if(this.shadowRoot.childNodes.[i].childNodes[x].id === "status"){
            statusDiv = this.shadowRoot.childNodes[i].childNodes[x];
          }
          if(this.shadowRoot.childNodes.[i].childNodes[x].id === "vehicle"){
            vehicleDiv = this.shadowRoot.childNodes[i].childNodes[x];
          }
          if(this.shadowRoot.childNodes.[i].childNodes[x].id === "settings"){
            settingsDiv = this.shadowRoot.childNodes[i].childNodes[x];
          }
        }
      }
    }
    menu.addEventListener('touchstart', e => {
      this.startY = e.changedTouches[0].screenY;
    });

    menu.addEventListener('touchend', e => {
      this.endY = e.changedTouches[0].screenY;
      this.handleGesture();
    });

    launches.addEventListener('click', e => {
      launchesDiv.style.display = "block";
      streamsDiv.style.display = "none";
      statusDiv.style.display = "none";
      vehicleDiv.style.display = "none";
      settingsDiv.style.display = "none";

      menu.style.transition = "top 150ms";
      menu.style.top = "92.5%";

      titleBox.style.transition = "height 150ms";
      titleBox.style.height = "7.5%";

      title.style.transition = "all 150ms";
      title.style.fontSize = "6vw";
      title.style.left = "26%";
      title.style.top = "50%";

      pages.style.transition = "all 150ms";
      pages.style.top = "7.5%";
      pages.style.height = "86.5%";
    })

    streams.addEventListener('click', e => {
      launchesDiv.style.display = "none";
      streamsDiv.style.display = "block";
      statusDiv.style.display = "none";
      vehicleDiv.style.display = "none";
      settingsDiv.style.display = "none";

      menu.style.transition = "top 150ms";
      menu.style.top = "92.5%";

      titleBox.style.transition = "height 150ms";
      titleBox.style.height = "7.5%";

      title.style.transition = "all 150ms";
      title.style.fontSize = "6vw";
      title.style.left = "26%";
      title.style.top = "50%";

      pages.style.transition = "all 150ms";
      pages.style.top = "7.5%";
      pages.style.height = "86.5%";
    })

    status.addEventListener('click', e => {
      launchesDiv.style.display = "none";
      streamsDiv.style.display = "none";
      statusDiv.style.display = "block";
      vehicleDiv.style.display = "none";
      settingsDiv.style.display = "none";

      menu.style.transition = "top 150ms";
      menu.style.top = "92.5%";

      titleBox.style.transition = "height 150ms";
      titleBox.style.height = "7.5%";

      title.style.transition = "all 150ms";
      title.style.fontSize = "6vw";
      title.style.left = "26%";
      title.style.top = "50%";

      pages.style.transition = "all 150ms";
      pages.style.top = "7.5%";
      pages.style.height = "86.5%";
    })

    vehicle.addEventListener('click', e => {
      launchesDiv.style.display = "none";
      streamsDiv.style.display = "none";
      statusDiv.style.display = "none";
      vehicleDiv.style.display = "block";
      settingsDiv.style.display = "none";

      menu.style.transition = "top 150ms";
      menu.style.top = "92.5%";

      titleBox.style.transition = "height 150ms";
      titleBox.style.height = "7.5%";

      title.style.transition = "all 150ms";
      title.style.fontSize = "6vw";
      title.style.left = "26%";
      title.style.top = "50%";

      pages.style.transition = "all 150ms";
      pages.style.top = "7.5%";
      pages.style.height = "86.5%";
    })

    settings.addEventListener('click', e => {
      launchesDiv.style.display = "none";
      streamsDiv.style.display = "none";
      statusDiv.style.display = "none";
      vehicleDiv.style.display = "none";
      settingsDiv.style.display = "block";

      menu.style.transition = "top 150ms";
      menu.style.top = "92.5%";

      titleBox.style.transition = "height 150ms";
      titleBox.style.height = "7.5%";

      title.style.transition = "all 150ms";
      title.style.fontSize = "6vw";
      title.style.left = "26%";
      title.style.top = "50%";

      pages.style.transition = "all 150ms";
      pages.style.top = "7.5%";
      pages.style.height = "86.5%";
    })
  }

  handleGesture() {
    var menu, titleBox, title, pages;
    for(var i = 0; i < this.shadowRoot.childNodes.length; i++){
      if(this.shadowRoot.childNodes[i].className === "menu"){
        menu = this.shadowRoot.childNodes[i];
      }

      if(this.shadowRoot.childNodes[i].className === "title"){
        titleBox = this.shadowRoot.childNodes[i];
        var length = this.shadowRoot.childNodes[i].childNodes.length;
        for(var x = 0; x < length; x++){
          if(this.shadowRoot.childNodes.[i].childNodes[x].id === "title"){
            title = this.shadowRoot.childNodes[i].childNodes[x];
          }
        }
      }

      if(this.shadowRoot.childNodes[i].className === "pages"){
        pages = this.shadowRoot.childNodes[i];
      }
    }

    if (this.endY < this.startY) {
      /* up */
      menu.style.transition = "top 150ms";
      menu.style.top = "15%";
      menu.style.height = "85%";

      titleBox.style.transition = "height 150ms";
      titleBox.style.height = "20%";

      title.style.transition = "all 150ms";
      title.style.fontSize = "9vw";
      title.style.left = "50%";
      title.style.top = "40%";

      pages.style.transition = "all 150ms";
      pages.style.top = "20%";
    };
    if (this.endY > this.startY) {
      /* down */
      menu.style.transition = "top 150ms";
      menu.style.top = "92.5%";

      titleBox.style.transition = "height 150ms";
      titleBox.style.height = "7.5%";

      title.style.transition = "all 150ms";
      title.style.fontSize = "6vw";
      title.style.left = "26%";
      title.style.top = "50%";

      pages.style.transition = "all 150ms";
      pages.style.top = "7.5%";
      pages.style.height = "86.5%";
    }
  }

  SHA() {
    if (process.env.COMMIT_REF) {
      return process.env.COMMIT_REF.slice(0, 7);
    } else {
      return html`dev env`;
    }
  }

  getStatus() {
    var status = fetch("https://devserver.dwnlnk.repl.co/internal")
      .then((response) => response.json())
      .then((data) => {
        return data.status;
      });
    return html`<span>${until(status, html`<span>loading...</span>`)}</span>`;
  }

  getStreams(x){
    let stream = localStorage.getItem(`stream${x}`);
    if(stream){
      stream = stream.substring(stream.length, stream.length - 11);
      return stream;
    } else {
      if(x === 1){
        return `sTA0GTgFn5E`;
      }
      if(x === 2){
        return `sMC5KonXCfg`;
      }
      if(x === 3){
        return `tYZaaz8UbRE`;
      }
      if(x === 4){
        return `_og17JYSMcQ`;
      }
    }
  }

  render() {
    return html`
    <div class="pages">
      <div id="launches" class="page">
        <div class="page-title">launches</div>
        <div class="page-content">
          <div class="page-content-text">*crickets* (not much here yet, stay tuned!)</div>
        </div>
      </div>
      <div id="streams" class="page">
        <div class="page-title">streams</div>
        <div class="page-content">
          <div class="page-content-text">
            <iframe
              src="https://www.youtube-nocookie.com/embed/${this.getStreams(1)}?controls=1=mute=1&fs=1"
              id="stream"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div id="status" class="page">
        <div class="page-title">status</div>
        <div class="page-content">
          <div class="page-content-text"><b>${this.getStatus()}</b><br/><br/>*crickets* (not much here yet, stay tuned!)</div>
        </div>
      </div>
      <div id="vehicle" class="page">
        <div class="page-title">vehicle</div>
        <div class="page-content">
          <div class="page-content-text">*crickets* (not much here yet, stay tuned! ps, you'll love this page)</div>
        </div>
      </div>
      <div id="settings" class="page">
        <div class="page-title">settings</div>
        <div class="page-content">
          <div class="page-content-title">General</div>
          <div class="page-content-text">More settings coming soon...</div>
          <br/>
          <br/>
          <div class="page-content-title">Streams</div>
          <div class="page-content-text">Mobile stream settings coming soon!</div>
          <br/>
          <br/>
          <div class="page-content-title">Appearance</div>
          <div class="page-content-text">More settings coming soon...</div>
          <br/>
          <br/>
          <div class="page-content-title">About</div>
          <div class="page-content-text">itslaunchtime! is your one stop shop for everything space. It started late 2020 as a simple website that connected a pre-existing API to a custom UI. Since then, we've moved from Starship TFRs to a stream dashboard to a combination of both to... the list goes on. Now, we plan on delivering as much content as possible to the space community and everyone else too. Thank you to <a href="https://twitter.com/labpadre">LabPadre</a> for the default streams, and everyone in the <latt-link to="/discord" class="link">itslaunchtime! discord</latt-link>.</div>
          <br/>
          <br/>
          <div class="page-content-text">Twitter: <a href="https://twitter.com/launchytime">twitter.com/launchytime</a></div>
          <br/>
          <br/>
          <hr/>
          <br/>
          <br/>
          <div class="page-content-title">Developer</div>
          <div class="page-content-text">
            Github: <a href="https://github.com/itslaunchtime">github.com/itslaunchtime</a>
            <br/>
            Version: 1.0.0
            <br/>
            SHA: ${this.SHA()}
          </div>
          <br/>
          <br/>
        </div>
      </div>
    </div>
      <div class="title">
        <div id="title">itslaunchtime!</div>
      </div>
      <div class="menu">
        <div class="handle"></div>
        <div class="container">
          <div class="section section-1"><div class="centered section-title">Launches</div></div>
          <div class="section section-2"><div class="centered section-title">Streams</div></div>
          <div class="section section-3"><div class="centered section-title">Status</div></div>
          <div class="section section-4"><div class="centered section-title">Vehicle</div></div>
          <div class="section section-5"><div class="centered section-title">Settings</div></div>
        </div>
      </div>
    `;
  }
}
customElements.get("app-lander-mobile") ||
  customElements.define("app-lander-mobile", Lander);

import { LitElement, html, css } from "lit-element";
import "latt";
import { until } from "lit-html/directives/until.js";

class Settings extends LitElement {
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
        background: #a4a4a4;
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
      .page {
        position: absolute;
        left: 1vw;
        top: 2vh;
        right: 1vw;
        bottom: 2vh;
        background-color: #b4b4b4;
        border-radius: 15px;
        /*border: 1px solid black;*/
      }

      .title {
        font-size: 2vw;
        font-family: Inter;
        font-weight: 600;
        color: #424242;
        user-select: none;
      }

      #version {
        color: #888;
        font-family: Inter;
        font-weight: 600;
        font-size: 1vw;
        user-select: none;
      }

      .content {
        font-size: 1.5vw;
        font-family: Inter;
        font-weight: 500;
        color: #696969;
      }

      #page {
        position: absolute;
        left: 1vw;
        top: 2vh;
        right: 1vw;
        bottom: 2vh;
        border-radius: 10px;
      }

      #page-grid {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 5fr 1.5fr;
        grid-template-rows: 1fr;
        gap: 2vh 0;
        grid-template-areas:
          "settings-content settings-bar";
      }

      .settings-content {
        position: relative;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        scrollbar-width: thin;
        scrollbar-color: #888 transparent;
      }

      #content {
        padding-right: 2vw;
      }

      .settings-bar {
        position: relative;
        width: 100%;
        height: calc(100% + 2vh);
        text-align: left;
        background-color: #a4a4a4;
        margin-top: -2vh;
        margin-left: 0;
        padding-left: 1vw;
        padding-top: 2vh;
        border-radius: 0px 10px 10px 0px;
      }

      #close {
        position: absolute;
        z-index: 2;
        right: 1vw;
        top: 2vh;
        border: 2px solid #888;
        border-radius: 100%;
        width: 2.5vw;
        height: 2.5vw;
        text-align: center;
        line-height: 2.25vw;
        font-family: Inter;
        font-size: 2vw;
        font-weight: 300;
        color: #888;
        cursor: pointer;
        user-select: none;
        transition: 100ms background-color ease-in-out, 100ms color ease-in-out;
      }

      #close:hover {
        background-color: #888;
        color: #424242;
        transition: 100ms background-color ease-in-out, 100ms color ease-in-out;
      }

      #close-subtext {
        color: #888;
        font-family: Inter;
        font-variant: small-caps;
        position: absolute;
        font-size: 1vw;
        font-weight: 600;
        z-index: 2;
        width: calc(2.5vw + 4px);
        right: 1vw;
        top: calc(2vh + 2.5vw + 1vh);
        text-align: center;
        user-select: none;
      }

      #link {
        text-decoration: underline;
      }

      .linkto {
        color: #696969;
        font-family: Inter;
        font-size: 1.25vw;
        font-weight: 600;
        cursor: pointer;
        padding-left: 1vw;
        padding-top: 1vh;
        padding-right: 1vw;
        padding-bottom: 1vh;
        border-radius: 5px;
        width: calc(100% - 3vw);
      }

      .linkto:hover {
        background-color: #999;
      }

      hr {
        position: inherit;
        margin-left: 0;
        width: calc(100% - 1.65vw);
        height: 2px;
        background-color: #888;
        border: none;
      }

      input[type="url"] {
        background-color: #a4a4a4;
        font-size: 1.25vw;
        padding: 1vh;
        font-family: Inter;
        font-weight: 400;
        color: #696969;
        border-radius: 5px;
        border: none;
        outline: none;
        transition: 150ms color ease-in-out, 150ms background-color ease-in-out;
      }

      input[type="url"]:hover {
        background-color: #888;
        color: #424242;
        transition: 150ms color ease-in-out, 150ms background-color ease-in-out;
      }

      input[type="url"]:focus {
        background-color: #888;
        color: #424242;
        transition: 150ms color ease-in-out, 150ms background-color ease-in-out;
      }

      input[type="submit"] {
        background-color: #a4a4a4;
        font-size: 1.25vw;
        padding: 1vh;
        font-family: Inter;
        font-weight: 400;
        color: #696969;
        border-radius: 5px;
        border: none;
        outline: none;
        transition: 150ms color ease-in-out, 150ms background-color ease-in-out;
        cursor: pointer;
      }

      input[type="submit"]:hover {
        background-color: #888;
        color: #424242;
        transition: 150ms color ease-in-out, 150ms background-color ease-in-out;
      }

      #key {
        font-weight: 700;
        font-size: 1.25vw;
        user-select: none;
        background-color: #a4a4a4;
        padding-left: 0.25vw;
        padding-right: 0.25vw;
        border-radius: 5px;
        box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.25);
      }

      a {
        border-bottom: 4px solid #a4a4a4;
        transition: 150ms border-bottom ease-in-out;
      }

      a:hover {
        border-bottom: 4px solid #888;
        transition: 150ms border-bottom ease-in-out;
      }

      .link {
        border-bottom: 4px solid #a4a4a4;
        transition: 150ms border-bottom ease-in-out;
      }

      .link:hover {
        border-bottom: 4px solid #888;
        transition: 150ms border-bottom ease-in-out;
      }

      .logout {
        position: absolute;
        left: 1vw;
        bottom: 2vh;
        color: #ff2828;
        font-family: Inter;
        font-size: 1.25vw;
        font-weight: 600;
        cursor: pointer;
        padding-left: 1vw;
        padding-top: 1vh;
        padding-right: 1vw;
        padding-bottom: 1vh;
        border-radius: 5px;
        width: calc(100% - 4vw);
      }

      .logout:hover {
        background-color: rgba(255, 102, 102, 0.25);
      }
    `;
  }

  firstUpdated() {
    window.addEventListener("keydown", this.esc);
  }

  esc(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      if (window.location.pathname === "/settings") {
        window.location.href = "/";
      }
    }
  }

  pagescroll(e, x) {
    e.preventDefault();
    var element;
    for(var i = 0; i < this.shadowRoot.childNodes[2].childNodes[3].childNodes[1].childNodes[1].childNodes.length; i++){
      if(this.shadowRoot.childNodes[2].childNodes[3].childNodes[1].childNodes[1].childNodes[i].id === x){
        element = this.shadowRoot.childNodes[2].childNodes[3].childNodes[1].childNodes[1].childNodes[i];
      }
    }
    element.scrollIntoView();
  }

  SHA() {
    if (process.env.COMMIT_REF) {
      return process.env.COMMIT_REF.slice(0, 7);
    } else {
      return html`dev env`;
    }
  }

  fullSHA() {
    if (process.env.COMMIT_REF) {
      return process.env.COMMIT_REF;
    } else {
      return html`dev env`;
    }
  }

  handleSubmit(e, stream){
    e.preventDefault();
    if(stream === 0){
      if(this.shadowRoot.childNodes[2].childNodes[3].childNodes[1].childNodes[1].childNodes[13].childNodes[5].childNodes[1].value !== ""){
        localStorage.setItem("stream1", this.shadowRoot.childNodes[2].childNodes[3].childNodes[1].childNodes[1].childNodes[13].childNodes[5].childNodes[1].value);
      }  else {
        localStorage.removeItem("stream1");
      }
    }
    if(stream === 1){
      if(this.shadowRoot.childNodes[2].childNodes[3].childNodes[1].childNodes[1].childNodes[13].childNodes[9].childNodes[1].value !== ""){
        localStorage.setItem("stream2", this.shadowRoot.childNodes[2].childNodes[3].childNodes[1].childNodes[1].childNodes[13].childNodes[9].childNodes[1].value);
      } else {
        localStorage.removeItem("stream2");
      }
    }
    if(stream === 2){
      if(this.shadowRoot.childNodes[2].childNodes[3].childNodes[1].childNodes[1].childNodes[13].childNodes[13].childNodes[1].value !== ""){
        localStorage.setItem("stream3", this.shadowRoot.childNodes[2].childNodes[3].childNodes[1].childNodes[1].childNodes[13].childNodes[13].childNodes[1].value);
      } else {
        localStorage.removeItem("stream3");
      }
    }
    if(stream === 3){
      if(this.shadowRoot.childNodes[2].childNodes[3].childNodes[1].childNodes[1].childNodes[13].childNodes[17].childNodes[1].value !== ""){
        localStorage.setItem("stream4", this.shadowRoot.childNodes[2].childNodes[3].childNodes[1].childNodes[1].childNodes[13].childNodes[17].childNodes[1].value);
      } else {
        localStorage.removeItem("stream4");
      }
    }
  }

  getStreamValue(x){
    if(localStorage.getItem(`stream${x}`)){
      return localStorage.getItem(`stream${x}`);
    } else {
      return ``;
    }
  }

  render() {
    if (window.location.pathname === "/settings") {
      document.title = "itslaunchtime! — settings";
      return html`
        <div class="page">
          <latt-link to="/"
            ><div id="close">×</div>
            <div id="close-subtext">ESC</div></latt-link
          >
          <div id="page">
          <div id="page-grid">
          <div class="settings-content">
            <div class="title" id="general">General</div>
            <br/>
            <div id="content" class="content">
              More settings coming soon...
            </div>
            <br/>
            <div class="title" id="streams">Streams</div>
            <br/>
            <div id="content" class="content">
            <div id="content">Please enter Youtube links only. Hit <code id="key">ENTER</code> to save.</div>
            <br/>
              <form @submit="${(e) => this.handleSubmit(e, 0)}">
                <input type="url" value=${this.getStreamValue(1)} placeholder="stream 1" />
              </form>
              <br/>
              <form @submit="${(e) => this.handleSubmit(e, 1)}">
                <input type="url" value=${this.getStreamValue(2)} placeholder="stream 2" />
              </form>
              <br/>
              <form @submit="${(e) => this.handleSubmit(e, 2)}">
                <input type="url" value=${this.getStreamValue(3)} placeholder="stream 3" />
              </form>
              <br/>
              <form @submit="${(e) => this.handleSubmit(e, 3)}">
                <input type="url" value=${this.getStreamValue(4)} placeholder="stream 4" />
              </form>
            </div>
            <br/>
            <div class="title" id="appearance">Appearance</div>
            <br/>
            <div id="content" class="content">
              More settings coming soon...
            </div>
            <br/>
            <div class="title" id="about">About</div>
            <br/>
            <div id="content" class="content">itslaunchtime! is your one stop shop for everything space. It started late 2020 as a simple website that connected a pre-existing API to a custom UI. Since then, we've moved from Starship TFRs to a stream dashboard to a combination of both to... the list goes on. Now, we plan on delivering as much content as possible to the space community and everyone else too. Thank you to <a href="https://twitter.com/labpadre">LabPadre</a> for the default streams, and everyone in the <latt-link to="/discord" class="link">itslaunchtime! discord</latt-link>. <br/>
            <br/>
            <b>built with 🖤 for 🚀</b></div>
            <br/>
            <br/>
            <hr/>
            <br/>
            <br/>
            <div class="title" id="developer">Developer</div>
            <br/>
            <div id="content" class="content">
              Github: <a href="https://github.com/itslaunchtime">github.com/itslaunchtime</a>
              <br/>
              <br/>
              Version: 1.0.1
              <br/>
              <br/>
              SHA: ${this.fullSHA()}
              <br/>
              <br/>
              <img src="https://api.netlify.com/api/v1/badges/ed01f858-3fab-49fb-8c28-da98954af262/deploy-status" alt="deploy status" />
            </div>
          </div>
          <!-- settings bar -->
          <div class="settings-bar">
          <div class="title">itslaunchtime!</div>
          <div id="version">
            V1.0.0 · ${this.SHA()}
          </div>
          <br/>
          <hr/>
          <br/>
          <div
            class="linkto"
            @click="${(e) => {
              this.pagescroll(e, "general");
            }}"
          >
            General
          </div>
          <br/>
          <div
            class="linkto"
            @click="${(e) => {
              this.pagescroll(e, "streams");
            }}"
          >
            Streams
          </div>
          <br/>
          <div
            class="linkto"
            @click="${(e) => {
              this.pagescroll(e, "appearance");
            }}"
          >
            Appearance
          </div>
          <br/>
          <div
            class="linkto"
            @click="${(e) => {
              this.pagescroll(e, "about");
            }}"
          >
            About
          </div>
          <br/>
          <div
            class="linkto"
            @click="${(e) => {
              this.pagescroll(e, "developer");
            }}"
          >
            Developer
          </div>
          ${localStorage.getItem("id") ? html`<div
            class="logout"
            @click="${() => {
              localStorage.clear();
              window.location.href = "/";
            }}"
          >
            Logout
          </div>` : html``}
          <br/>
          <hr/>
          <br/>
          <latt-link to="/discord">
            <div class="linkto">
              Discord
            </div>
          </latt-link>
          <br/>
          <latt-link to="https://canary.itslaunchti.me">
            <div class="linkto">
              Canary
            </div>
          </latt-link>
          <br/>
          <latt-link to="https://twitter.com/launchytime">
            <div class="linkto">
              Twitter
            </div>
          </latt-link>
          <br/>
          </div>
          </div>
        </div>
      `;
    } else {
      return undefined;
    }
  }
}

customElements.get("app-settings") ||
  customElements.define("app-settings", Settings);

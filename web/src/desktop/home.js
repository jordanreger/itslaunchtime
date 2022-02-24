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
        display: grid;
        grid-template-columns: 5fr 1fr;
        grid-template-rows: 1fr;
        gap: 2vh 1vw;
        grid-template-areas: "left right";
        /*border: 1px solid black;*/
      }

      .left {
        grid-area: left;
        position: absolute;
        width: 100%;
        height: 100%;
        display: grid;
        gap: 2vh 1vw;
        grid-template-areas:
          "top"
          "bottom";
      }

      .top {
        position: absolute;
        width: 100%;
        height: 100%;
        grid-area: top;
        display: grid;
        grid-template-columns: 56.25% calc(43.75% - 1vw);
        grid-template-rows: auto;
        gap: 2vh 1vw;
        grid-template-areas: "stream status";
      }

      .stream {
        grid-area: stream;
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        object-fit: cover;
      }

      .stream span {
        mix-blend-mode: difference;
      }

      #stream-cover {
        z-index: 3;
        background-color: transparent;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        cursor: pointer;
        transition: 150ms background-color ease-in-out;
      }

      #stream-cover:hover {
        background-color: rgba(0, 0, 0, 0.25);
        transition: 150ms background-color ease-in-out;
      }

      #iframe {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
        z-index: 0;
      }

      #stream-title {
        font-family: Inter;
        font-weight: 400;
        font-size: 3vh;
        color: #fff;
        mix-blend-mode: difference;
        position: absolute;
        left: 1vw;
        top: 2vh;
        z-index: 2;
        user-select: none;
      }

      #stream {
        height: 100%;
        width: 100%;
        background-color: #b4b4b4;
        border-radius: 10px;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        transition: 150ms background-color ease-in-out;
      }

      #stream:hover {
        height: 100%;
        width: 100%;
        background-color: #888;
        transition: 250ms background-color ease-in-out;
        border-radius: 10px;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }

      .status {
        grid-area: status;
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #status {
        height: 100%;
        width: 100%;
        background-color: #b4b4b4;
        border-radius: 10px;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        transition: 150ms background-color ease-in-out;
        cursor: pointer;
      }

      #status:hover {
        height: 100%;
        width: 100%;
        background-color: #888;
        transition: 250ms background-color ease-in-out;
        border-radius: 10px;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }

      #status-title {
        font-family: Inter;
        font-size: 3vh;
        color: #696969;
        position: absolute;
        left: 1vw;
        top: 2vh;
        user-select: none;
      }

      #status-text {
        text-align: left;
        font-family: Inter;
        font-weight: 600;
        font-size: 3vw;
        color: #424242;
        position: absolute;
        left: 2vw;
        top: 50%;
        transform: translateY(-50%);
        user-select: none;
      }

      .bottom {
        position: absolute;
        width: 100%;
        height: 100%;
        grid-area: bottom;
        /*display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 2vh 1vw;
        grid-template-areas: "story-1 story-2 story-3 story-4";*/
      }

      #bottom {
        background-color: #b4b4b4;
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }

      #bottom:hover {
        background-color: #888;
        transition: 250ms background-color ease-in-out;
      }

      .story-image {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 50%;
        object-fit: cover;
        object-position: center;
      }

      #story-image {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 10px 10px 0px 0px;
      }

      #story-title {
        position: absolute;
        top: calc(50% + 2vh);
        left: 1vw;
        font-family: Inter;
        font-weight: 600;
        color: #424242;
        font-size: 2vw;
        user-select: none;
      }

      #story-net {
        position: absolute;
        bottom: 2vh;
        left: 1vw;
        font-family: Inter;
        font-weight: 400;
        color: #696969;
        font-size: 1vw;
        user-select: none;
      }

      .story-1 {
        grid-area: story-1;
        height: 100%;
        width: 100%;
        background-color: #b4b4b4;
        border-radius: 10px;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        transition: 150ms background-color ease-in-out;
      }

      .story-2 {
        grid-area: story-2;
        height: 100%;
        width: 100%;
        background-color: #b4b4b4;
        border-radius: 10px;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        transition: 150ms background-color ease-in-out;
      }

      .story-3 {
        grid-area: story-3;
        height: 100%;
        width: 100%;
        background-color: #b4b4b4;
        border-radius: 10px;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        transition: 150ms background-color ease-in-out;
      }

      .story-4 {
        grid-area: story-4;
        height: 100%;
        width: 100%;
        background-color: #b4b4b4;
        border-radius: 10px;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        transition: 150ms background-color ease-in-out;
      }

      .right {
        position: absolute;
        grid-area: right;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 9fr;
        gap: 2vh 1vw;
        grid-template-areas:
          "account"
          "starship-status";
      }

      .account {
        position: absolute;
        width: 100%;
        height: 100%;
        grid-area: account;
      }

      #account {
        height: 100%;
        width: 100%;
        background-color: #b4b4b4;
        border-radius: 10px;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        transition: 150ms background-color ease-in-out;
      }

      #account:hover {
        height: 100%;
        width: 100%;
        background-color: #888;
        transition: 150ms background-color ease-in-out;
        border-radius: 10px;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }

      #account:hover #username {
        color: #424242;
        transition: 150ms color ease-in-out;
      }

      #account-login {
        height: 100%;
        width: 100%;
        background-color: #424242;
        border-radius: 10px;
        position: absolute;
        right: 0;
        top: 50%;
        transition: 150ms background-color ease-in-out;
        transform: translateY(-50%);
      }

      #account-login:hover {
        height: 100%;
        width: 100%;
        background-color: #7289da;
        transition: 250ms background-color ease-in-out;
        border-radius: 10px;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }

      #username {
        font-family: Inter;
        font-size: 2.5vw;
        width: calc(100% - (3.5vw * 2) + 1vw);
        color: #696969;
        font-weight: 600;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        position: absolute;
        left: 1vw;
        top: 50%;
        transform: translateY(-50%);
        user-select: none;
        transition: 150ms color ease-in-out;
      }

      #username-login {
        font-family: Inter;
        font-size: 2.5vw;
        color: #fff;
        font-weight: 600;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        position: absolute;
        top: 50%;
        left: 7vw;
        transform: translateY(-50%);
        text-align: center;
        user-select: none;
      }

      #pfp {
        width: 3.5vw;
        border-radius: 100%;
        position: absolute;
        right: 1vw;
        top: 50%;
        transform: translateY(-50%);
      }

      #pfp-login {
        width: 3vw;
        position: absolute;
        left: 3vw;
        top: 50%;
        transform: translateY(-50%);
      }

      .starship-status {
        position: absolute;
        grid-area: starship-status;
        width: 100%;
        height: 100%;
      }

      #starship-status {
        height: 100%;
        width: 100%;
        background-color: #b4b4b4;
        border-radius: 10px;
        transition: 150ms background-color ease-in-out;
        cursor: pointer;
        color: #a4a4a4;
      }

      #starship-status:hover {
        background-color: #888;
        transition: 250ms background-color ease-in-out;
      }

      #starship-wrapper {
        width: 75%;
        height: 95%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      #starship-status-starship {
        position: absolute;
        left: 50%;
        bottom: 50%;
        height: 40%;
        transform: translateX(-50%);
      }

      #starship-status-superheavy {
        position: absolute;
        left: 50%;
        height: 50%;
        top: 49.8%;
        transform: translateX(-50%);
      }

      #starship-status-title {
        font-family: Inter;
        font-weight: 400;
        font-size: 3vh;
        color: #696969;
        position: absolute;
        left: 1vw;
        top: 2vh;
        user-select: none;
      }
    `;
  }

  getLoggedIn() {
    if (!localStorage.getItem("id")) {
      return html` <a
        href="https://discord.com/api/oauth2/authorize?client_id=821783127016865812&redirect_uri=https%3A%2F%2Fitslaunchti.me%2Fstore&response_type=token&scope=identify%20guilds%20guilds.join"
      >
        <div class="account">
          <div id="account-login">
            <div id="login">
              <span id="username-login">
                Login
              </span>
              <img
                src="https://discord.com/assets/145dc557845548a36a82337912ca3ac5.svg"
                alt="pfp"
                id="pfp-login"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </a>`;
    } else {
      return html` <latt-link to="/settings">
        <div class="account">
          <div id="account">
            <span
              id="username"
              style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;"
            >
              ${localStorage.getItem("username")}
            </span>
            <img
              src="https://cdn.discordapp.com/avatars/${localStorage.getItem(
                "id"
              )}/${localStorage.getItem("avatar")}.png"
              alt="pfp"
              id="pfp"
              draggable="false"
            />
          </div>
        </div>
      </latt-link>`;
    }
  }

  getStatus() {
    var status = fetch(`https://api.itslaunchti.me/internal?auth=${process.env.API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        return data.status;
      });
    return html`<span>${until(status, html`<span>loading...</span>`)}</span>`;
  }

  getStories() {
    function cover(x) {
      const cover = fetch(`https://api.itslaunchti.me/internal?auth=${process.env.API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          return data.stories[x].cover;
        });
      return cover;
    }

    function title(x) {
      const title = fetch(`https://api.itslaunchti.me/internal?auth=${process.env.API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          return data.stories[x].title;
        });
      return title;
    }

    function net(x) {
      var net = fetch(`https://api.itslaunchti.me/internal?auth=${process.env.API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          var timestamp = parseInt(data.stories[x].net) * 1000;
          var s = `${new Date(timestamp).toLocaleDateString()} ${new Date(
            timestamp
          ).toLocaleTimeString()}`;
          return s;
        });
      return net;
    }

    return html`<latt-link to="/story/1"
        ><div class="story-1">
          <div id="stream-cover"></div>
          <div class="story-image">
            <img
              src="${until(
                cover(0),
                `https://via.placeholder.com/1920x1080c/o`
              )}"
              alt="cover-1"
              id="story-image"
              draggable="false"
            />
          </div>
          <br />
          <div id="story-title">
            ${until(title(0), html`<span>loading...</span>`)}
          </div>
          <br />
          <div id="story-net">
            ${until(net(0), html`<span>loading...</span>`)}
          </div>
        </div>
      </latt-link>
      <latt-link to="/story/2">
        <div class="story-2">
          <div id="stream-cover"></div>
          <div class="story-image">
            <img
              src="${until(
                cover(1),
                `https://via.placeholder.com/1920x1080c/o`
              )}"
              alt="cover-1"
              id="story-image"
              draggable="false"
            />
          </div>
          <br />
          <div id="story-title">
            ${until(title(1), html`<span>loading...</span>`)}
          </div>
          <br />
          <div id="story-net">
            ${until(net(1), html`<span>loading...</span>`)}
          </div>
        </div>
      </latt-link>
      <latt-link to="/story/3">
        <div class="story-3">
          <div id="stream-cover"></div>
          <div class="story-image">
            <img
              src="${until(
                cover(2),
                `https://via.placeholder.com/1920x1080c/o`
              )}"
              alt="cover-1"
              id="story-image"
              draggable="false"
            />
          </div>
          <br />
          <div id="story-title">
            ${until(title(2), html`<span>loading...</span>`)}
          </div>
          <br />
          <div id="story-net">
            ${until(net(2), html`<span>loading...</span>`)}
          </div>
        </div>
      </latt-link>
      <latt-link to="/story/4">
        <div class="story-4">
          <div id="stream-cover"></div>
          <div class="story-image">
            <img
              src="${until(
                cover(3),
                `https://via.placeholder.com/1920x1080c/o`
              )}"
              alt="cover-1"
              id="story-image"
              draggable="false"
            />
          </div>
          <br />
          <div id="story-title">
            ${until(title(3), html`<span>loading...</span>`)}
          </div>
          <br />
          <div id="story-net">
            ${until(net(3), html`<span>loading...</span>`)}
          </div>
        </div></latt-link
      >`;
  }

  getGIF() {
    let gif;
    let gifs = [
      "https://media.giphy.com/media/l4pTldWDec8WamJUc/source.gif",
      "https://media.giphy.com/media/3oz8xWCZ6eTnnGUsSY/giphy.gif",
      "https://media.giphy.com/media/495IkFoYYInS2Rt5Zr/giphy.gif",
      "https://media.giphy.com/media/l4pTfBQTLOecArqSs/source.gif",
      "https://media.giphy.com/media/ysjXaQVnZpr6OnVlNQ/giphy.gif",
      "https://raw.githubusercontent.com/itslaunchtime/resources/main/BB1goPLS.img.gif",
      "https://raw.githubusercontent.com/itslaunchtime/resources/main/rocket-lab-running-out-of-fingers.gif"
    ];
    let random = Math.floor(Math.random() * gifs.length);
    gif = gifs[random];
    return gif;
  }

  getStarshipStatus() {
    var starship = fetch(`https://api.itslaunchti.me/internal?auth=${process.env.API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        return data.vehicle.starship.active;
      });
    return starship;
  }

  getSuperheavyStatus() {
    var superheavy = fetch(`https://api.itslaunchti.me/internal?auth=${process.env.API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        return data.vehicle.superheavy.active;
      });
    return superheavy;
  }

  /*constructor() {
    super();
  }*/

  render() {
    if (window.location.pathname === "/") {
      document.title = "itslaunchtime! — home";
      return html`
      <div class="page">
        <div class="left">
          <div class="top">
          <latt-link to="/streams">
              <div class="stream">
                <div id="stream-cover"></div>
                <div id="stream-title">streams</div>
                <div id="stream">
                  <img src="${this.getGIF()}" id="iframe" alt="starship" />
                </div>
              </div>
            </latt-link>
            <latt-link to="/status">
              <div class="status">
                <div id="status">
                  <span id="status-title">status</span>
                  <div id="status-text">${this.getStatus()}</div>
                </div>
              </div>
              </latt-link>
            </div>
            <div class="bottom">
              <div id="bottom"><div id="status-title">coming soon...</div></div>
            </div>
          </div>
          <div class="right">
            <div class="account">
              ${this.getLoggedIn()}
            </div>
            <div class="starship-status">
              <latt-link to="/vehicle"><div id="starship-status">
              <div id="starship-status-title">vehicle</div>
              <div id="starship-wrapper">
                ${until(
                  this.getStarshipStatus().then((res) =>
                    res
                      ? html`<img
                          src="https://raw.githubusercontent.com/itslaunchtime/resources/8d18394f329661d8eaa8eb6fc30ab5a183a6841b/Starship_424242.svg"
                          alt="starship"
                          id="starship-status-starship"
                          draggable="false"
                        />`
                      : html`<img
                          src="https://raw.githubusercontent.com/itslaunchtime/resources/8d18394f329661d8eaa8eb6fc30ab5a183a6841b/Starship_696969.svg"
                          alt="starship"
                          id="starship-status-starship"
                          draggable="false"
                        />`
                  ),
                  html`<span></span>`
                )}
                ${until(
                  this.getSuperheavyStatus().then((res) =>
                    res
                      ? html`<img
                          src="https://raw.githubusercontent.com/itslaunchtime/resources/8d18394f329661d8eaa8eb6fc30ab5a183a6841b/Superheavy_424242.svg"
                          alt="starship"
                          id="starship-status-superheavy"
                          draggable="false"
                        />`
                      : html`<img
                          src="https://raw.githubusercontent.com/itslaunchtime/resources/8d18394f329661d8eaa8eb6fc30ab5a183a6841b/Superheavy_696969.svg"
                          alt="starship"
                          id="starship-status-superheavy"
                          draggable="false"
                        />`
                  ),
                  html`<span></span>`
                )}
                </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    } else {
      return undefined;
    }
  }
}
customElements.get("app-lander") || customElements.define("app-lander", Lander);

/* MAKE SURE TO CHANGE redirect_uri */

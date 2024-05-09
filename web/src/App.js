import { LitElement, html, css } from "lit-element";
import "latt";
//import { until } from "lit-html/directives/until.js";

class App extends LitElement {
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
      #menu {
        display: none;
        position: absolute;
        z-index: 10;
        width: 15vw;
        height: 35vh;
        background-color: #949494;
        border-radius: 5px;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.25);
      }

      #options {
        position: absolute;
        left: 1vw;
        top: 2vh;
        right: 1vw;
        bottom: 2vh;
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: min-content;
        gap: 2vh 1vw;
      }

      #option-title {
        padding-left: 1vh;
        font-weight: 600;
        font-size: 1.5vw;
        color: #424242;
        user-select: none;
      }

      #option {
        font-weight: 500;
        font-size: 1.25vw;
        color: #424242;
        padding: 1vh;
        border-radius: 5px;
        cursor: pointer;
        user-select: none;
      }

      #option:hover {
        background-color: #848484;
      }
    `;
  }
  firstUpdated() {
    var mobile = "ontouchstart" in window;
    if(!mobile){
      window.addEventListener("contextmenu", this.openmenu);
      window.addEventListener("click", this.closemenu);
    }
  }

  constructor() {
    super();
    this.x = 0;
    this.y = 0;
  }

  openmenu(e) {
    e.preventDefault();
    var menu = document
      .querySelector("app-root")
      .shadowRoot.getElementById("menu");
    menu.style.display = "block";
    this.x = e.clientX;
    this.y = e.clientY;
    let outsideX = false;
    let outsideY = false;
    if (e.clientX > window.innerWidth - window.innerWidth * 0.15) {
      outsideX = true;
    }
    if (e.clientY > window.innerHeight - window.innerHeight * 0.35) {
      outsideY = true;
    }
    if (!outsideX && !outsideY) {
      menu.style.left = `${this.x}px`;
      menu.style.top = `${this.y}px`;
    } else {
      if (outsideX && outsideY) {
        menu.style.left = `${window.innerWidth - window.innerWidth * 0.15}px`;
        menu.style.top = `${window.innerHeight - window.innerHeight * 0.35}px`;
      } else {
        if (outsideX) {
          menu.style.left = `${window.innerWidth - window.innerWidth * 0.15}px`;
          menu.style.top = `${this.y}px`;
        }
        if (outsideY) {
          menu.style.left = `${this.x}px`;
          menu.style.top = `${
            window.innerHeight - window.innerHeight * 0.35
          }px`;
        }
      }
    }
  }

  closemenu(e) {
    var menu = document
      .querySelector("app-root")
      .shadowRoot.getElementById("menu");
    if (menu.style.display === "block") {
      let insideX = this.x + window.innerWidth * 0.15;
      let insideY = this.y + window.innerHeight * 0.35;
      let inside = false;
      if (e.clientX >= this.x && e.clientX <= insideX) {
        if (e.clientY >= this.y && e.clientY <= insideY) {
          inside = true;
        }
      }
      if (!inside) {
        e.preventDefault();
        menu.style.display = "none";
      }
    }
  }

  title(x) {
    const title = fetch("https://devserver.dwnlnk.repl.co/internal")
      .then((response) => response.json())
      .then((data) => {
        return data.stories[x].title;
      });
    return title;
  }

  render() {
    var mobile = "ontouchstart" in window;
    return html`
      <latt-router>
      ${!mobile ?
        html`<div id="menu">
          <div id="options">
            <div id="option-title">Pages</div>
            ${window.location.pathname === "/"
              ? html`<latt-link to="/streams">
                    <div id="option">
                      streams
                    </div>
                  </latt-link>
                  <latt-link to="/status">
                    <div id="option">
                      status
                    </div>
                  </latt-link>
                  <latt-link to="/vehicle">
                    <div id="option">
                      vehicle
                    </div>
                  </latt-link>
                  <latt-link to="/settings">
                    <div id="option">
                      settings
                    </div>
                  </latt-link>`
              : html``}
            ${window.location.pathname === "/settings"
              ? html`<latt-link to="/">
                    <div id="option">
                      home
                    </div>
                  </latt-link>
                  <latt-link to="/streams">
                    <div id="option">
                      streams
                    </div>
                  </latt-link>
                  <latt-link to="/status">
                    <div id="option">
                      status
                    </div>
                  </latt-link>
                  <latt-link to="/settings">
                    <div id="option">
                      vehicle
                    </div>
                  </latt-link>`
              : html``}
            ${window.location.pathname === "/streams"
              ? html`<latt-link to="/">
                    <div id="option">
                      home
                    </div>
                  </latt-link>
                  <latt-link to="/vehicle">
                    <div id="option">
                      vehicle
                    </div>
                  </latt-link>
                  <latt-link to="/status">
                    <div id="option">
                      status
                    </div>
                  </latt-link>
                  <latt-link to="/settings">
                    <div id="option">
                      settings
                    </div>
                  </latt-link>`
              : html``}
            ${window.location.pathname === "/status"
              ? html`<latt-link to="/">
                    <div id="option">
                      home
                    </div>
                  </latt-link>
                  <latt-link to="/streams">
                    <div id="option">
                      streams
                    </div>
                  </latt-link>
                  <latt-link to="/vehicle">
                    <div id="option">
                      vehicle
                    </div>
                  </latt-link>
                  <latt-link to="/settings">
                    <div id="option">
                      settings
                    </div>
                  </latt-link>`
              : html``}
            ${window.location.pathname === "/vehicle"
              ? html`<latt-link to="/">
                    <div id="option">
                      home
                    </div>
                  </latt-link>
                  <latt-link to="/streams">
                    <div id="option">
                      streams
                    </div>
                  </latt-link>
                  <latt-link to="/status">
                    <div id="option">
                      status
                    </div>
                  </latt-link>
                  <latt-link to="/settings">
                    <div id="option">
                      settings
                    </div>
                  </latt-link>`
              : html``}
          </div>
        </div>` : html``}
        <latt-route path="/">
          ${!mobile ? html`<app-lander />` : html`<app-lander-mobile />`}
        </latt-route>
        <latt-route path="/store">
          <app-store />
        </latt-route>
        <latt-route path="/streams">
          ${!mobile ? html`<app-streams />` : html`<latt-router><latt-route path="/streams"><latt-redirect to="/" /></latt-route></latt-router>`}
        </latt-route>
        <latt-route path="/status">
          ${!mobile ? html`<app-status />` : html`<latt-router><latt-route path="/status"><latt-redirect to="/" /></latt-route></latt-router>`}
        </latt-route>
        <latt-route path="/vehicle">
          ${!mobile ? html`<app-vehicle />` : html`<latt-router><latt-route path="/vehicle"><latt-redirect to="/" /></latt-route></latt-router>`}
        </latt-route>
        <latt-route path="/settings">
          ${!mobile ? html`<app-settings />` : html`<latt-router><latt-route path="/settings"><latt-redirect to="/" /></latt-route></latt-router>`}
        </latt-route>
        <latt-route path="/contributors">
          ${!mobile ? html`<app-contributors />` : html`<latt-router><latt-route path="/contributors"><latt-redirect to="/" /></latt-route></latt-router>`}
        </latt-route>
        <latt-route path="/discord">
          <latt-redirect to="https://discord.com/invite/FVW5D4VhyK" />
        </latt-route>
        <latt-route path="/test">
          ${!mobile ? html`<app-test />` : html`<latt-router><latt-route path="/test"><latt-redirect to="/" /></latt-route></latt-router>`}
        </latt-route>
        <latt-catch to="/" />
      </latt-router>
    `;
  }
}
customElements.get("app-root") || customElements.define("app-root", App);

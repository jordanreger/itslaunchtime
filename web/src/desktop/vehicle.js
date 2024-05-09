import { LitElement, html, css } from "lit-element";
import "latt";
import { until } from "lit-html/directives/until.js";

class Vehicle extends LitElement {
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

      .content {
        font-size: 1vw;
        font-family: Inter;
        font-weight: 500;
        color: #696969;
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

      .diagram {
        position: absolute;
        left: 1vw;
        top: 2vh;
        right: 4.5vw;
        bottom: 2vh;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 0px 0px;
        grid-template-areas:
          "top"
          "bottom";
      }

      .top {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        grid-area: top;
        display: grid;
        grid-template-columns: 4fr 5fr;
        grid-template-rows: 1fr;
        gap: 0px 0px;
        grid-template-areas: "starship superheavy";
      }

      .starship {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        grid-area: starship;
      }

      .superheavy {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        grid-area: superheavy;
      }

      .bottom {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        grid-area: bottom;
        background-color: #a4a4a4;
        border-radius: 10px;
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

      #starship-status-starship {
        position: absolute;
        right: 50%;
        top: 50%;
        height: 150%;
        width: auto;
        transform: translate(50%, -50%) rotate(-90deg);
      }

      #starship-status-superheavy {
        position: absolute;
        right: 50%;
        top: 50%;
        height: 200%;
        width: auto;
        transform: translate(50%, -50%) rotate(-90deg);
      }

      #starship-status {
        font-family: Inter;
        font-size: 3vh;
        color: #696969;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 2vh;
        user-select: none;
      }
    `;
  }

  firstUpdated() {
    window.addEventListener("keydown", this.esc);
  }

  esc(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      if (window.location.pathname === "/vehicle") {
        window.location.href = "/";
      }
    }
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

  render() {
    if (window.location.pathname === "/vehicle") {
      document.title = "itslaunchtime! — vehicle";
      return html`
        <div class="page">
          <latt-link to="/"
            ><div id="close">×</div>
            <div id="close-subtext">ESC</div></latt-link
          >
          <div class="diagram">
            <div class="top">
              <div class="starship">
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
                  html``
                )}
                <div id="starship-status">
                  Starship:
                  ${until(
                    this.getStarshipStatus().then((res) =>
                      res ? html`Active` : html`Inactive`
                    ),
                    html``
                  )}
                </div>
              </div>
              <div class="superheavy">
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
                  html``
                )}
                <div id="starship-status">
                  Superheavy:
                  ${until(
                    this.getSuperheavyStatus().then((res) =>
                      res ? html`Active` : html`Inactive`
                    ),
                    html``
                  )}
                </div>
              </div>
            </div>
            <div class="bottom">
              <div id="status-title">coming soon...</div>
            </div>
          </div>
        </div>
      `;
    } else {
      return undefined;
    }
  }
}
customElements.get("app-vehicle") ||
  customElements.define("app-vehicle", Vehicle);

import { LitElement, html, css } from "lit-element";
import "latt";
import { until } from "lit-html/directives/until.js";

class Status extends LitElement {
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
        font-size: 3.5vw;
        font-family: Inter;
        font-weight: 600;
        color: #424242;
        user-select: none;
      }

      .content {
        font-size: 1.75vw;
        font-family: Inter;
        font-weight: 500;
        color: #696969;
      }

      #page {
        position: absolute;
        left: 1vw;
        top: 2vh;
        right: 0;
        bottom: 2vh;
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: min-content;
        gap: 2vh 1vw;
        /*overflow-y: scroll;*/
        overflow-x: hidden;
      }

      .section-1 {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto;
        gap: 0px 0px;
        grid-template-areas:
          "title"
          "content";
      }

      .section-2 {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto;
        gap: 0px 0px;
        grid-template-areas:
          "title"
          "content";
      }

      .section-3 {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto;
        gap: 0px 0px;
        grid-template-areas:
          "title"
          "content";
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
    `;
  }

  getStatus() {
    var status = fetch(`https://api.itslaunchti.me/internal?auth=${process.env.API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        return data.status;
      });
    return html`<span>${until(status, html`<span>loading...</span>`)}</span>`;
  }

  firstUpdated() {
    window.addEventListener("keydown", this.esc);
  }

  esc(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      if (window.location.pathname === "/status") {
        window.location.href = "/";
      }
    }
  }

  render() {
    if (window.location.pathname === "/status") {
      document.title = "itslaunchtime! — status";
      return html`
        <div class="page">
          <latt-link to="/"
            ><div id="close">×</div>
            <div id="close-subtext">ESC</div></latt-link
          >
          <div id="page">
            <div class="section-1">
              <div class="title">Status</div>
              <div class="content">${this.getStatus()}</div>
            </div>
            <div class="section-1">
              <div class="title">Coming soon...</div>
              <div class="content">
                More data is coming soon! Stay tuned. In the meantime,
                <latt-link to="/discord" id="link">join the Discord!</latt-link>
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
customElements.get("app-status") || customElements.define("app-status", Status);

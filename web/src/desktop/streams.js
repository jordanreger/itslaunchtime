import { LitElement, html, css } from "lit-element";
import "latt";

class Streams extends LitElement {
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
      .background {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: #424242;
      }

      .page {
        position: absolute;
        left: 1vw;
        top: 2vh;
        right: 1vw;
        bottom: 2vh;
        background-color: #323232;
        border-radius: 15px;
        /*border: 1px solid black;*/
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

      #close {
        position: absolute;
        z-index: 2;
        right: 1vw;
        top: 2vh;
        border: 2px solid #c4c4c4;
        border-radius: 100%;
        width: 2.5vw;
        height: 2.5vw;
        text-align: center;
        line-height: 2.25vw;
        font-family: Inter;
        font-size: 2vw;
        font-weight: 300;
        color: #c4c4c4;
        cursor: pointer;
        user-select: none;
        transition: 100ms background-color ease-in-out, 100ms color ease-in-out;
      }

      #close:hover {
        background-color: #c4c4c4;
        color: #424242;
        transition: 100ms background-color ease-in-out, 100ms color ease-in-out;
      }

      #close-subtext {
        color: #c4c4c4;
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

      .title {
        font-size: 2vw;
        font-family: Inter;
        font-weight: 600;
        color: #e0e0e0;
        user-select: none;
      }

      .content {
        font-size: 1vw;
        font-family: Inter;
        font-weight: 500;
        color: #c4c4c4;
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

      .grid-container {
        position: absolute;
        width: calc(100% - 5vw);
        height: calc(100% - 1vh);
        border-radius: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 2vh 1vw;
        grid-template-areas:
          "tl tr"
          "bl br";
      }

      .tl {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        grid-area: tl;
      }

      .tr {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        grid-area: tr;
      }

      .bl {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        grid-area: bl;
      }

      .br {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        grid-area: br;
      }

      #stream {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        outline: none;
        border: none;
      }
    `;
  }

  firstUpdated() {
    window.addEventListener("keydown", this.esc);
  }

  esc(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      if (window.location.pathname === "/streams") {
        window.location.href = "/";
      }
    }
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
    if (window.location.pathname === "/streams") {
      document.title = "itslaunchtime! — streams";
      return html`
        <div class="background"></div>
        <div class="page">
          <latt-link to="/"
            ><div id="close">×</div>
            <div id="close-subtext">ESC</div></latt-link
          >
          <div id="page">
            <div class="grid-container">
              <div class="tl">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/${this.getStreams(1)}?controls=1=mute=1&fs=1"
                  id="stream"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="tr">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/${this.getStreams(2)}?controls=1=mute=1&fs=1"
                  id="stream"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="bl">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/${this.getStreams(3)}?controls=1=mute=1&fs=1"
                  id="stream"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="br">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/${this.getStreams(4)}?controls=1=mute=1&fs=1"
                  id="stream"
                  allowfullscreen
                ></iframe>
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
customElements.get("app-streams") ||
  customElements.define("app-streams", Streams);

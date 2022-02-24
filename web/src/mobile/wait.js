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
      .page {
        position: absolute;
        width: 75%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        font-family: Inter;
        font-weight: 700;
        color: #424242;
        font-size: 6vw;
      }

      .link {
        border-bottom: 4px solid #a4a4a4;
      }
    `;
  }

  render() {
    return html`
      <div class="page">
        <div class="centered">
          Mobile is coming soon...
          <br/>
          <br/>
          <latt-link to="/discord" class="link">Join the Discord</latt-link><br/>for updates!
        </div>
      </div>
    `;
  }
}
customElements.get("app-lander-wait") ||
  customElements.define("app-lander-wait", Lander);

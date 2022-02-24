import { LitElement, html, css } from "lit-element";
import "latt";

class Contributors extends LitElement {
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
        background-color: #b4b4b4;
        border-radius: 15px;
      }

      #left {
        position: absolute;
        left: 1vw;
        top: 2vh;
        right: 0;
        bottom: 2vh;
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: min-content;
        gap: 2vh 1vw;
        overflow-y: scroll;
        overflow-x: hidden;
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
          "shortbar"
          "longbar";
      }

      .shortbar {
        position: absolute;
        width: 100%;
        height: 100%;
        grid-area: shortbar;
      }

      #shortbar {
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

      #shortbar:hover {
        height: 100%;
        width: 100%;
        background-color: #888;
        border-radius: 10px;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        transition: 150ms background-color ease-in-out;
      }

      #shortbar-text {
        font-family: Inter;
        font-size: 2.5vw;
        color: #696969;
        font-weight: 600;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        user-select: none;
        transition: 150ms color ease-in-out;
      }

      #shortbar:hover #shortbar-text {
        color: #424242;
      }

      .longbar {
        position: absolute;
        grid-area: longbar;
        width: 100%;
        height: 100%;
        background-color: #b4b4b4;
        border-radius: 10px;
        color: #888;
      }

      #longbar {
        position: absolute;
        left: 1vw;
        top: 0;
        right: 0;
        bottom: 0;
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: min-content;
        gap: 2vh 1vw;
        /*overflow-y: scroll;*/
        scrollbar-width: thin;
        scrollbar-color: #888888 #a4a4a4;
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

      input[type="text"] {
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

      input[type="text"]:hover {
        background-color: #888;
        color: #424242;
        transition: 150ms color ease-in-out, 150ms background-color ease-in-out;
      }

      input[type="text"]:focus {
        background-color: #888;
        color: #424242;
        transition: 150ms color ease-in-out, 150ms background-color ease-in-out;
      }

      textarea {
        max-width: 50%;
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

      textarea:hover {
        background-color: #888;
        color: #424242;
        transition: 150ms color ease-in-out, 150ms background-color ease-in-out;
      }

      textarea:focus {
        background-color: #888;
        color: #424242;
        transition: 150ms color ease-in-out, 150ms background-color ease-in-out;
      }

      input[type="date"] {
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

      input[type="date"]:hover {
        background-color: #888;
        color: #424242;
        transition: 150ms color ease-in-out, 150ms background-color ease-in-out;
      }

      input[type="date"]:focus {
        background-color: #888;
        color: #424242;
        transition: 150ms color ease-in-out, 150ms background-color ease-in-out;
      }

      input[type="time"] {
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

      input[type="time"]:hover {
        background-color: #888;
        color: #424242;
        transition: 150ms color ease-in-out, 150ms background-color ease-in-out;
      }

      input[type="time"]:focus {
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
    `;
  }

  getLoggedIn() {
    if (!localStorage.getItem("contributor")) {
      if (window.location.pathname === "/contributors") {
        window.location.href = "/";
      }
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
              )}/${localStorage.getItem("avatar")}.gif"
              alt="pfp"
              id="pfp"
              draggable="false"
            />
          </div>
        </div>
      </latt-link>`;
    }
  }

  render() {
    if (window.location.pathname === "/contributors") {
      document.title = "itslaunchtime! — contributors";
      this.getLoggedIn();
      return html`
        <div class="page">
          <div class="left">
            <div id="left">
              <div class="section-1">
                <div class="title">Status</div>
                <div class="content">
                  <form
                    action="https://devserver.dwnlnk.repl.co/update"
                    method="post"
                    enctype="application/json"
                  >
                    <input type="text" name="status" placeholder="new status" />
                    <input type="submit" value="submit" />
                  </form>
                </div>
              </div>
              <div class="section-2">
                <div class="title">Story</div>
                <div class="content">
                  <form
                    action="https://devserver.dwnlnk.repl.co/update"
                    method="post"
                    enctype="application/json"
                    id="story"
                  >
                    <input type="hidden" name="story" value="true" />
                    <input type="url" name="cover" placeholder="story cover" />
                    <br />
                    <br />
                    <input type="text" name="title" placeholder="story title" />
                    <br />
                    <br />
                    <textarea
                      name="description"
                      form="story"
                      placeholder="story content"
                    ></textarea>
                    <br />
                    <br />
                    <input type="date" name="date" />
                    <br />
                    <br />
                    <div id="content">Times must be in UTC!</div>
                    <input type="time" name="time" />
                    <input type="submit" value="submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <latt-link to="/settings">
              <div class="shortbar">
                <div id="shortbar">
                  <div id="shortbar-text">back</div>
                </div>
              </div>
            </latt-link>
            <div class="longbar">
              <div id="longbar"></div>
            </div>
          </div>
        </div>
      `;
    } else {
      return undefined;
    }
  }
}
customElements.get("app-contributors") ||
  customElements.define("app-contributors", Contributors);

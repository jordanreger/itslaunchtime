import { LitElement, html } from "lit-element";
import "latt";

class Store extends LitElement {
  render() {
    if (window.location.pathname === "/store") {
      function getUser() {
        const fragment = new URLSearchParams(window.location.hash.slice(1));
        const [accessToken, tokenType] = [
          fragment.get("access_token"),
          fragment.get("token_type")
        ];
        const response = fetch("https://discord.com/api/users/@me", {
          headers: {
            authorization: `${tokenType} ${accessToken}`
          }
        })
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("id", data.id);
            localStorage.setItem("avatar", data.avatar);
            localStorage.setItem("username", data.username);
            localStorage.setItem("discriminator", data.discriminator);
            window.location.href = "/";
          });
        //localStorage.setItem("access_token", accessToken);

        /*const guilds = fetch("https://discord.com/api/users/@me/guilds", {
          headers: {
            authorization: `${tokenType} ${accessToken}`
          }
        })
          .then((response) => response.json())
          .then((data) => {
            let launchy = false;

            for (var i = 0; i < data.length; i++) {
              if (data[i].name === "itslaunchtime!") {
                launchy = true;
              }
            }
            if (launchy) {
              const guildmember = fetch(
                `https://devserver.dwnlnk.repl.co/user/${localStorage.getItem(
                  "id"
                )}`
              )
                .then((response) => response.json())
                .then((data) => {
                  if (data.includes("821815991947362324")) {
                    localStorage.setItem("contributor", "true");
                    window.location.href = "/";
                  }
                });
            } else {
              window.location.href = "/";
            }
          });

        //console.log(guildmembers.data);*/
      }

      getUser();
      document.title = "itslaunchtime! | logging in...";
      return html`<div
        id="loading"
        style="font-family: Inter; font-size: 3vw; font-weight: 600; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); color: #424242;"
      >
        Logging in...
      </div>`;
    } else {
      return undefined;
    }
  }
}
customElements.get("app-store") || customElements.define("app-store", Store);

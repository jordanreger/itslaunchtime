/* IMPORT */

/* deno */
import { parse } from 'https://deno.land/std/flags/mod.ts';
import "https://deno.land/x/dotenv/load.ts";
import axiod from "https://deno.land/x/axiod/mod.ts";

/* server */
import { opine, json } from "https://deno.land/x/opine@1.4.0/mod.ts";
import { opineCors } from "https://deno.land/x/cors@v1.2.1/mod.ts";

/* mongo */
import { MongoClient } from "https://deno.land/x/mongo@v0.22.0/mod.ts";

/* INIT */

/* deno */
//const { DB_PASSWORD, API_KEY } = config();
let DB_PASSWORD = Deno.env.get('DB_PASSWORD');
let API_KEY = Deno.env.get('API_KEY');
let BOT_TOKEN = Deno.env.get('BOT_TOKEN');

/* server */
const app = opine();
app.use(opineCors());
app.use(json());

/* mongo */
const client = new MongoClient();
await client.connect({
  db: "db",
  tls: true,
  servers: [
    {
      host: "db-shard-00-01.s7upc.mongodb.net",
      port: 27017,
    },
  ],
  credential: {
    username: "j",
    password: `${DB_PASSWORD}`,
    db: "db",
    mechanism: "SCRAM-SHA-1",
  },
});
const db = client.database("itslaunchtime");
const api = db.collection("api");

app.get("/", function(req, res) {
  //res.redirect("https://itslaunchti.me/settings");
  res.send("up");
});

app.get("/v1", function(req, res) {
  res.redirect("https://github.com/itslaunchtime/api/tree/v1");
});

app.get("/v2/", function(req, res) {
  res.set('Content-Type','text/html');
  res.send("<h1>itslaunchtime! api v2</h1><p>read the docs @ <a href='https://itslaunchti.me/api/docs'>/api/docs</a></p>");
});

app.get("/internal", async function(req, res) {
  if(req.query.auth === API_KEY){
    let data = await api.findOne({document: "internal"}, { noCursorTimeout: false } as any).then(data => { return JSON.stringify(data) }).then(data => { return JSON.parse(data) });
    delete data.document;
    delete data._id;
    res.setStatus(200).json(data);
  } else {
    res.setStatus(401);
  }
});

app.post("/internal", async function(req, res) {
  if(req.query.auth === API_KEY){
    let key = Object.keys(req.body)[0];
    let insert = api.updateOne({document: "internal"}, { $set: {[key]: req.body[key]} }, { noCursorTimeout: false } as any);
    let data = await api.findOne({document: "internal"}, { noCursorTimeout: false } as any).then(data => { return JSON.stringify(data) }).then(data => { return JSON.parse(data) });
    delete data.document;
    delete data._id;
    console.log(req);
    res.setStatus(200).send(req);
  } else {
    res.setStatus(401);
  }
});

app.get("/contributor", async function(req, res) {
  if(req.query.auth === API_KEY){
    const response = await axiod.get(`https://discord.com/api/guilds/815955208067874816/members/${req.query.id}`, { headers: { authorization: `Bot ${BOT_TOKEN}`}
    }).then(response => { if(response.data.roles.includes('821815991947362324')){ return true } else { return false }});
    res.setStatus(200).json(response);
  } else {
    res.setStatus(401);
  }
});

const { args } = Deno;
const DEFAULT_PORT = 8000;
const argPort = parse(args).port;

app.listen(argPort ? Number(argPort) : DEFAULT_PORT, () => console.log(`#/running ~ http://localhost:${argPort ? Number(argPort) : DEFAULT_PORT}`));

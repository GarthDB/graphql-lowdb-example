import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphql/index.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static(__dirname));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

var server = app.listen(8080, () => {
  console.log(
    `Running a GraphQL API server at http://localhost:${
      server.address().port
    }/graphql`
  );
});

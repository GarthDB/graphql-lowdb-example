import { GraphQLID, GraphQLNonNull } from "graphql";

import articleType from "../../types/article.js";

import db from "./../../../db.js";

export default {
  type: articleType,
  args: {
    id: {
      name: "id",
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(root, params) {
    return db.data.articles.find((article) => article.id === params.id);
  },
};

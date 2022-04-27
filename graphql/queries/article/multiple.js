import { GraphQLList } from "graphql";

import articleType from "../../types/article.js";

import db from "./../../../db.js";

export default {
  type: new GraphQLList(articleType),
  args: {},
  resolve(root, params) {
    return db.data.articles;
  },
};

import { GraphQLNonNull, GraphQLBoolean } from "graphql";

import articleInputType from "../../types/article-input.js";

import db from "./../../../db.js";

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: "data",
      type: new GraphQLNonNull(articleInputType),
    },
  },
  async resolve(root, params) {
    db.data.articles.push(params.data);
    db.write();
    return true;
  },
};

import { GraphQLNonNull, GraphQLBoolean } from "graphql";

import channelInputType from "../../types/channel-input.js";

import db from "./../../../db.js";

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: "data",
      type: new GraphQLNonNull(channelInputType),
    },
  },
  async resolve(root, params, options) {
    db.data.channels.push(params.data);
    db.write();
    return true;
  },
};

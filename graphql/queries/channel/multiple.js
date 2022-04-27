import { GraphQLList } from "graphql";

import channelType from "../../types/channel.js";

import db from "./../../../db.js";

export default {
  type: new GraphQLList(channelType),
  args: {},
  resolve(root, params) {
    return db.data.channels;
  },
};

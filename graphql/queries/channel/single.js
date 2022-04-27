import { GraphQLID, GraphQLNonNull } from "graphql";

import channelType from "../../types/channel.js";

import db from "./../../../db.js";

export default {
  type: channelType,
  args: {
    id: {
      name: "id",
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(root, params) {
    return db.data.channels.find((channel) => channel.id === params.id);
  },
};

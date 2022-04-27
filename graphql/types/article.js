import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} from "graphql";

import ChannelType from "./channel.js";

import db from "./../../db.js";

export default new GraphQLObjectType({
  name: "Article",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    title: {
      type: GraphQLString,
    },
    body: {
      type: GraphQLString,
    },
    image: {
      type: GraphQLString,
    },
    url: {
      type: GraphQLString,
    },
    channel: {
      type: ChannelType,
      resolve(parent) {
        return db.data.channels.find(
          (channel) => channel.id === parent.channel_id
        );
      },
    },
    status: {
      type: GraphQLString,
    },
    date_published: {
      type: GraphQLString,
    },
    date_created: {
      type: GraphQLString,
    },
    date_updated: {
      type: GraphQLString,
    },
  },
});

import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from 'graphql';

import tagType from './tag';

import channelType from './channel';

import userType from './user';

export default new GraphQLObjectType({
  name: 'Article',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    body: {
      type: new GraphQLNonNull(GraphQLString),
    },
    image: {
      type: GraphQLString,
    },
    url: {
      type: new GraphQLNonNull(GraphQLString),
    },
    date_published: {
      type: GraphQLString,
    },
    tags: {
      type: new GraphQLList(tagType),
      resolve: article => article.tags.map(project => project.dataValues),
    },
    channel: {
      type: channelType,
      resolve: article => article.channel,
    },
    user: {
      type: userType,
      resolve: article => article.user,
    },
  },
});

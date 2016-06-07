import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'ChannelInput',
  fields: {
    name: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    project_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
});

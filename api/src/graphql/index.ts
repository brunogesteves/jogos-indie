import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_CATEGORIES } from "./Queries/Categories";
import { GET_ALL_POSTS_HOME } from "./Queries/PostsHome";
import { GET_ALL_IMAGES } from "./Queries/Images";
import { AUTHENTICATION } from "./Mutations/Authentication";
import {
  GET_POST_INFO,
  GET_LIST_POSTS,
  GET_ADMIN_POST_INFO,
  SEARCH_POSTS,
  GET_SIDEBAR,
  GET_POSTS_FROM_CATEGORY,
} from "./Queries/Posts";
import { UPDATE_INPUT_HOME } from "./Mutations/UpdateInputHome";
import { CREATE_CATEGORY, DELETE_CATEGORY } from "./Mutations/Categories";
import { DELETE_POST, UPDATE_POST, CREATE_POST } from "./Mutations/Posts";
import { DELETE_IMAGE, FILE_UPLOAD } from "./Mutations/Images";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllCategories: GET_ALL_CATEGORIES,
    getAllPostsHome: GET_ALL_POSTS_HOME,
    getInfoPost: GET_POST_INFO,
    getAdminInfoPost: GET_ADMIN_POST_INFO,
    getListPosts: GET_LIST_POSTS,
    searchPosts: SEARCH_POSTS,
    getPostsSideBar: GET_SIDEBAR,
    getPostsfromCategory: GET_POSTS_FROM_CATEGORY,
    getAllImages: GET_ALL_IMAGES,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createCategory: CREATE_CATEGORY,
    deleteCategory: DELETE_CATEGORY,
    updateInput: UPDATE_INPUT_HOME,
    deletePost: DELETE_POST,
    updatePost: UPDATE_POST,
    createPost: CREATE_POST,
    authentication: AUTHENTICATION,
    deleteImage: DELETE_IMAGE,
    fileUpload: FILE_UPLOAD
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

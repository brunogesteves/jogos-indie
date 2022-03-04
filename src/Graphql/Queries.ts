import { gql } from "@apollo/client";

export const GET_ALL_CATEGORIES = gql`
  query {
    getAllCategories {
      id
      name
    }
  }
`;

export const GET_ALL_POSTS_SLIDE = gql`
  query {
    getAllPostsHome(field: "slide", answer: true) {
      name
      thumb
      slug
    }
  }
`;

export const GET_ALL_POSTS_MIDDLE = gql`
  query {
    getAllPostsHome(field: "middle", answer: true) {
      name
      thumb
      slug
    }
  }
`;

export const GET_ALL_POSTS_GAMEPLAY = gql`
  query {
    getAllPostsHome(field: "gameplay", answer: true) {
      name
      thumb
      slug
    }
  }
`;

export const GET_ALL_POSTS_MIDSECTION = gql`
  query {
    getAllPostsHome(field: "midSection", answer: true) {
      name
      thumb
      slug
    }
  }
`;

export const GET_INFO_POST = gql`
  query getInfoPost($slug: String!) {
    getInfoPost(slug: $slug) {
      id
      name
      content
    }
  }
`;

export const GET_LIST_POSTS = gql`
  query {
    getListPosts {
      id
      name
      slide
      middle
      gameplay
      public
    }
  }
`;

export const GET_ADMIN_POST_INFO = gql`
  query getAdminInfoPost($id: ID!) {
    getAdminInfoPost(id: $id) {
      name
      content
      category
      slide
      middle
      gameplay
      public
      midSection
      thumb
    }
  }
`;

export const SEARCH_POSTS = gql`
  query searchPosts($search: String!) {
    searchPosts(search: $search) {
      name
      category
      slug
      thumb
    }
  }
`;

export const GET_SIDEBAR = gql`
  query {
    getPostsSideBar {
      slug
      thumb
    }
  }
`;

export const GET_POSTS_FROM_CATEGORY = gql`
  query getPostsfromCategory($nameCategory: String!) {
    getPostsfromCategory(nameCategory: $nameCategory) {
      slug
      thumb
    }
  }
`;

export const GET_ALL_IMAGES = gql`
  query {
    getAllImages {
      id
      name
    }
  }
`;

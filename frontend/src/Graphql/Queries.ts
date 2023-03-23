import { gql } from "@apollo/client";

export const GET_ALL_CATEGORIES = gql`
  query {
    getAllCategories {
      name
    }
  }
`;

export const GET_ALL_POSTS_SLIDE = gql`
  query {
    getAllSlides {
      name
      slug
      thumb
    }
  }
`;

export const GET_ALL_POSTS_MIDDLE = gql`
  query {
    getAllMiddle {
      name
      slug
      thumb
    }
  }
`;

export const GET_ALL_POSTS_GAMEPLAY = gql`
  query {
    getAllGameplay {
      name
      slug
      thumb
    }
  }
`;

export const GET_ALL_POSTS_MIDSECTION = gql`
  query {
    getMidSection {
      name
      slug
      thumb
    }
  }
`;

export const SIGN_IN = gql`
  query SignIn($input: SignInInput!) {
    signIn(input: $input) {
      email
      name
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
    getAllPosts {
      id
      middle
      name
      public
      slide
      slug
      schedule
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

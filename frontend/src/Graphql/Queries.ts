import { gql } from '@apollo/client';

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
      auth
      token
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
      midSection
      name
      public
      slide
      slug
      schedule
    }
  }
`;

export const GET_POST_TO_UPDATE = gql`
  query PostQuery($input: PostInput!) {
    postQuery(input: $input) {
      category
      content
      gameplay
      id
      midSection
      name
      public
      schedule
      scheduled
      slide
      slug
      thumb
    }
  }
`;

export const GET_POST_TO_SHOW_OFF = gql`
  query FrontPostQuery($input: NamePostInput!) {
    frontPostQuery(input: $input) {
      category
      content
      gameplay
      id
      midSection
      name
      public
      schedule
      scheduled
      slide
      slug
      thumb
    }
  }
`;

export const GET_RANDOM_POSTS = gql`
  query GetRandomPosts {
    getRandomPosts {
      thumb
      slug
    }
  }
`;

export const SEARCH_POSTS = gql`
  query SearchQuery($input: SearchInput!) {
    searchQuery(input: $input) {
      name
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
  query GetAllImages {
    getAllImages {
      name
    }
  }
`;

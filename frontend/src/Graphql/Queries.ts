import { gql } from '@apollo/client';

export const GET_ALL_CATEGORIES = gql`
  query GetAllCategories {
    getAllCategories {
      name
      id
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
  query GetAllGameplay {
    getAllGameplay {
      name
      thumb
      slug
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
  query GetAllPosts {
    getAllPosts {
      name
      slug
      slide
      midSection
      gameplay
      schedule
      scheduled
      id
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
      publicPost
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
      publicPost
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
      category
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
  query ($input: CategoryNameInput!) {
    categoryName(input: $input) {
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

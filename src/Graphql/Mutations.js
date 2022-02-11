import { gql } from "@apollo/client";

export const NEW_CATEGORY = gql`
  mutation createCategory($name: String!) {
    createCategory(name: $name) {
      successfull
    }
  }
`;

export const DELETE_CATEGORY = gql`
  mutation deleteCategory($id: ID!) {
    deleteCategory(id: $id) {
      successfull
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      successfull
    }
  }
`;

export const UPDATE_INPUT = gql`
  mutation updateInput($id: ID!, $input: String!, $info: Boolean) {
    updateInput(id: $id, input: $input, info: $info) {
      successfull
    }
  }
`;

export const UPDATE_ADMIN_POST_INFO = gql`
  mutation updatePost(
    $id: ID!
    $name: String!
    $content: String!
    $category: String!
    $slug: String!
    $slide: Boolean!
    $middle: Boolean!
    $gameplay: Boolean!
    $publicPost: Boolean!
    $midSection: Boolean!
    $thumb: String!
  ) {
    updatePost(
      id: $id
      name: $name
      content: $content
      category: $category
      slug: $slug
      slide: $slide
      middle: $middle
      gameplay: $gameplay
      publicPost: $publicPost
      midSection: $midSection
      thumb: $thumb
    ) {
      successfull
    }
  }
`;
export const CREATE_POST = gql`
  mutation createPost(
    $name: String!
    $content: String!
    $category: String!
    $slug: String!
    $scheduled: Boolean!
    $schedule: String!
    $slide: Boolean!
    $middle: Boolean!
    $gameplay: Boolean!
    $publicPost: Boolean!
    $midSection: Boolean!
    $thumb: String!
  ) {
    createPost(
      name: $name
      content: $content
      category: $category
      slug: $slug
      scheduled: $scheduled
      schedule: $schedule
      slide: $slide
      middle: $middle
      gameplay: $gameplay
      publicPost: $publicPost
      midSection: $midSection
      thumb: $thumb
    ) {
      id
    }
  }
`;

export const AUTHENTICATION = gql`
  mutation authentication($email: String!, $password: String!) {
    authentication(email: $email, password: $password) {
      token
      refresh
      successfull
      username
    }
  }
`;

export const DELETE_IMAGE = gql`
  mutation deleteImage($id: ID!) {
    deleteImage(id: $id) {
      successfull
    }
  }
`;

export const FILE_UPLOAD = gql`
  mutation fileUpload($file: Uploads!) {
    fileUpload(file: $file) {
      successfull

    }
  }
`;

import { gql } from '@apollo/client';

export const NEW_CATEGORY = gql`
  mutation CreateCategory($newCategoryName: String!) {
    createCategory(newCategoryName: $newCategoryName)
  }
`;

export const DELETE_CATEGORY = gql`
  mutation DeleteCategory($deleteCategoryId: Float!) {
    deleteCategory(deleteCategoryId: $deleteCategoryId)
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
  mutation Mutation($data: OptionPostInput!) {
    optionUpdatePost(data: $data)
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
export const CREATE_SAVe_POST = gql`
  mutation CreateSavePost($input: PostUpdateCreateInput!) {
    createSavePost(input: $input)
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
  mutation UploadFile($input: Upload!) {
    uploadFile(input: $input)
  }
`;

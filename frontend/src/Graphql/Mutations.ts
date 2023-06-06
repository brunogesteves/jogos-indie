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
export const CREATE_SAVE_POST = gql`
  mutation CreateSavePost($input: PostUpdateCreateInput!) {
    createSavePost(input: $input)
  }
`;

export const DELETE_IMAGE = gql`
  mutation DeleteImage($input: DeleteFileInput!) {
    deleteImage(input: $input)
  }
`;

export const FILE_UPLOAD = gql`
  mutation Mutation($input: FileInput!) {
    uploadFile(input: $input)
  }
`;

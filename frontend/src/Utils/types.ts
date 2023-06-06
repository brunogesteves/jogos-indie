export interface AllPosts {
  getAllPosts: [
    {
      id: number;
      name: string;
      schedule: string;
      slide: boolean;
      middle: boolean;
      gameplay: boolean;
      publicPost: boolean;
      midSection: boolean;
    }
  ];
}

export interface UserInfo {
  name: string;
  email: string;
}

export interface SearchProps {
  name: string;
  category: string;
  slug: string;
  thumb: string;
}

export interface PostRouteParams {
  slug: string;
}

export interface CategoryRouteParams {
  category: string;
}

export interface CategoryProps {
  categoryName: [
    {
      slug: string;
      thumb: string;
    }
  ];
}

export interface SlidesInfo {
  getAllSlides: [
    {
      name: string;
      thumb: string;
      slug: string;
    }
  ];
}

export interface MiddleProps {
  getAllMiddle: [
    {
      name: string;
      thumb: string;
      slug: string;
    }
  ];
}

export interface RamdonPostsProps {
  getRandomPosts: [
    {
      thumb: string;
      slug: string;
    }
  ];
}

export interface MiddleProps {
  getMidSection: [
    {
      thumb: string;
      name: string;
      slug: string;
    }
  ];
}

export interface GameplayProps {
  getAllGameplay: [
    {
      name: string;
      thumb: string;
      slug: string;
    }
  ];
}

export interface LoginProps {
  email: string;
  password: string;
}

export interface PostProps {
  id: string;
  name: string;
  content: string;
  category: string;
  slug: string;
  scheduled: boolean;
  schedule: Date;
  slide: boolean;
  middle: boolean;
  gameplay: boolean;
  publicPost: boolean;
  midSection: boolean;
  thumb: string;
}

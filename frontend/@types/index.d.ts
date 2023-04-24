interface AllPosts {
  id: number;
  name: string;
  schedule: string;
  slide: boolean;
  middle: boolean;
  gameplay: boolean;
  publicPost: boolean;
}

interface UserInfo {
  name: string;
  email: string;
}

interface SearchInfo {
  name: string;
  category: string;
  slug: string;
  thumb: string;
}

interface SearchProps {
  searchQuery: SearchInfo[];
}

interface PostRouteParams {
  post: string;
}

interface CategoryRouteParams {
  category: string;
}

interface CategoryInfo {
  slug: string;
  thumb: string;
}

interface CategoryData {
  getPostsfromCategory: CategoryInfo[];
}

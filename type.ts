export interface HighlightsType {
  _id: number;
  _base: string;
  title: string;
  name: string;
  image: string;
  color: string;
  buttonTitle: string;
}

export interface CategoryProps {
  _id: number;
  image: string;
  name: string;
  _base: string;
  description: string;
}

export interface ProductProps {
  _id: number;
  _base: string;
  reviews: number;
  rating: number;
  quantity: number;
  overView: string;
  name: string;
  isStock: boolean;
  isNew: boolean;
  images: [string];
  discountedPrice: number;
  regularPrice: number;
  description: string;
  colors: [string];
  category: string;
  brand: string;
}

export interface BlogProps {
  _id: number;
  image: string;
  title: string;
  description: string;
  _base: string;
}

export interface UserTypes {
  currentUser: {
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
    id: string;
    address: string;
  };
}

export interface OrderTypes {
  orderItems: [ProductProps];
  paymentId: string;
  paymentMethod: string;
  userEmail: string;
}
// export interface DiamondProps {
//   _id: number;
//   image: string;
//   name: string;
//   _base: string;
//   description: string;
// }
export interface EarringProps {
  _id: number;
  image: string;
  name: string;
  _base: string;
  description: string;
}
export interface RingProps {
  _id: number;
  image: string;
  name: string;
  _base: string;
  description: string;
}
export interface DigitalgoldProps {
  _id: number;
  image: string;
  name: string;
  _base: string;
  description: string;
}

export interface CollectionProps {
  _id: number;
  image: string;
  name: string;
  _base: string;
  description: string;
}

export interface WeddingProps {
  _id: number;
  image: string;
  name: string;
  _base: string;
  description: string;
}

export interface MoreProps {
  _id: number;
  image: string;
  name: string;
  _base: string;
  description: string;
}
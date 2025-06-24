import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'hats',
    imageUrl: 'https://res.cloudinary.com/ddm8ggiyi/image/upload/v1750800528/Jays%20E-Commerce%20Data%20lite/front_page-greenhats_ofpfec.webp',
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://res.cloudinary.com/ddm8ggiyi/image/upload/v1750800529/Jays%20E-Commerce%20Data%20lite/front_page-jackets_kkzgkx.webp',
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://res.cloudinary.com/ddm8ggiyi/image/upload/v1750800532/Jays%20E-Commerce%20Data%20lite/front_page-shoes_nzy4ns.webp',
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: 'https://res.cloudinary.com/ddm8ggiyi/image/upload/v1750800533/Jays%20E-Commerce%20Data%20lite/front_page-women-1_eiaawt.webp',
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: 'https://res.cloudinary.com/ddm8ggiyi/image/upload/v1750800530/Jays%20E-Commerce%20Data%20lite/front_page-shirt-men_h7s35e.webp',
    route: 'shop/mens',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;

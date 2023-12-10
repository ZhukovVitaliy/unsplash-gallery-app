//
import { Link } from 'react-router-dom';

import { Close } from '@material-ui/icons';
import { useState } from 'react';
import * as S from './gallery.styled';

// const mockData = [
//   {
//     src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
//     className: 'w-100 shadow-1-strong rounded mb-4',
//     alt: 'Boat on Calm Water',
//   },
//   {
//     src: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp',
//     className: 'w-100 shadow-1-strong rounded mb-4',
//     alt: 'Wintry Mountain Landscape',
//   },
//   {
//     src: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp',
//     className: 'w-100 shadow-1-strong rounded mb-4',
//     alt: 'Mountains in the Clouds',
//   },
//   {
//     src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
//     className: 'w-100 shadow-1-strong rounded mb-4',
//     alt: 'Boat on Calm Water',
//   },
//   {
//     src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp',
//     className: 'w-100 shadow-1-strong rounded mb-4',
//     alt: 'Waves at Sea',
//   },
//   {
//     src: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp',
//     className: 'w-100 shadow-1-strong rounded mb-4',
//     alt: 'Yosemite National Park',
//   },
//   {
//     src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
//     className: 'w-100 shadow-1-strong rounded mb-4',
//     alt: 'Boat on Calm Water',
//   },
//   {
//     src: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp',
//     className: 'w-100 shadow-1-strong rounded mb-4',
//     alt: 'Wintry Mountain Landscape',
//   },
//   {
//     src: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp',
//     className: 'w-100 shadow-1-strong rounded mb-4',
//     alt: 'Mountains in the Clouds',
//   },
//   {
//     src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
//     className: 'w-100 shadow-1-strong rounded mb-4',
//     alt: 'Boat on Calm Water',
//   },
//   {
//     src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp',
//     className: 'w-100 shadow-1-strong rounded mb-4',
//     alt: 'Waves at Sea',
//   },
//   {
//     src: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp',
//     className: 'w-100 shadow-1-strong rounded mb-4',
//     alt: 'Yosemite National Park',
//   },
// ];

export const Gallery = ({ data, columns = true }) => {
  // console.log('Gallery  data:', data);
  const [model, setModel] = useState(false);
  const [temtImgSrc, setTemtImgSrc] = useState('');

  const handleModelClose = () => {
    setModel(false);
    setTemtImgSrc('');
  };

  return (
    <>
      <div className={model ? 'model open' : 'model'}>
        <img src={temtImgSrc} alt="" />
        <Close onClick={() => handleModelClose()} />
      </div>
      <S.Gallery columns={columns}>
        {data.map(image => (
          <S.Pics
            key={image.id}
            // onClick={() => {
            //   getImg(image.urls.regular);
            // }}
          >
            <Link to={`/image-details/${image.id}`} state={{ image }}>
              <img
                alt={image.alt_description}
                src={image.urls.small}
                style={{ width: '100%' }}
              />
            </Link>
          </S.Pics>
        ))}
      </S.Gallery>
    </>
  );
};

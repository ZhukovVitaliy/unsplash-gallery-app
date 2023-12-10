import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import * as S from './image-details.styles';

const ImageDetails = ({ match }) => {
  const location = useLocation();
  const { image } = location.state;

  return (
    <div className="container">
      <Link to="/home">
        <Button className="m-1">back</Button>
      </Link>

      <S.ImageDetailsContainer>
        <S.ImageContainer>
          <S.Image src={image.urls.regular} alt={image.alt_description} />
        </S.ImageContainer>
        <S.DescriptionContainer>
          <S.ImageTitle>{image.alt_description}</S.ImageTitle>
          <p>
            <strong>Description:</strong> {image.description || 'Немає опису'}
          </p>
          <p>
            <strong>User name:</strong> {image.user.name}
          </p>
          <p>
            <strong>likes:</strong> {image.likes}
          </p>
          <S.TagsContainer>
            <strong>Теги:</strong>
            {image.tags.map((tag, index) => (
              <Link key={index} to="/home" state={{ tag: tag.title }}>
                <S.Tag key={index}>{tag.title}</S.Tag>
              </Link>
            ))}
          </S.TagsContainer>
        </S.DescriptionContainer>
      </S.ImageDetailsContainer>
    </div>
  );
};

export default ImageDetails;

// {
//     "image": {
//         "id": "ZCHj_2lJP00",
//         "slug": "white-and-brown-long-fur-cat-ZCHj_2lJP00",
//         "created_at": "2020-06-15T04:30:27Z",
//         "updated_at": "2023-12-10T12:15:07Z",
//         "promoted_at": "2020-06-15T08:16:29Z",
//         "width": 5304,
//         "height": 7952,
//         "color": "#a6d9d9",
//         "blur_hash": "LRJcqDIUL3s..mX8rXRPOZnirWXT",
//         "description": null,
//         "alt_description": "white and brown long fur cat",
//         "breadcrumbs": [
//             {
//                 "slug": "images",
//                 "title": "1,000,000+ Free Images",
//                 "index": 0,
//                 "type": "landing_page"
//             },
//             {
//                 "slug": "animals",
//                 "title": "Animals Images & Pictures",
//                 "index": 1,
//                 "type": "landing_page"
//             },
//             {
//                 "slug": "kitten",
//                 "title": "Kitten Images & Pictures",
//                 "index": 2,
//                 "type": "landing_page"
//             }
//         ],
//         "urls": {
//             "raw": "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixid=M3w1Mzg4NTF8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8fHx8MTcwMjIyMjQ0Nnww&ixlib=rb-4.0.3",
//             "full": "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1Mzg4NTF8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8fHx8MTcwMjIyMjQ0Nnww&ixlib=rb-4.0.3&q=85",
//             "regular": "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mzg4NTF8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8fHx8MTcwMjIyMjQ0Nnww&ixlib=rb-4.0.3&q=80&w=1080",
//             "small": "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mzg4NTF8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8fHx8MTcwMjIyMjQ0Nnww&ixlib=rb-4.0.3&q=80&w=400",
//             "thumb": "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mzg4NTF8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8fHx8MTcwMjIyMjQ0Nnww&ixlib=rb-4.0.3&q=80&w=200",
//             "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1592194996308-7b43878e84a6"
//         },
//         "links": {
//             "self": "https://api.unsplash.com/photos/white-and-brown-long-fur-cat-ZCHj_2lJP00",
//             "html": "https://unsplash.com/photos/white-and-brown-long-fur-cat-ZCHj_2lJP00",
//             "download": "https://unsplash.com/photos/ZCHj_2lJP00/download?ixid=M3w1Mzg4NTF8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8fHx8MTcwMjIyMjQ0Nnww",
//             "download_location": "https://api.unsplash.com/photos/ZCHj_2lJP00/download?ixid=M3w1Mzg4NTF8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8fHx8MTcwMjIyMjQ0Nnww"
//         },
//         "likes": 2075,
//         "liked_by_user": false,
//         "current_user_collections": [],
//         "sponsorship": null,
//         "topic_submissions": {
//             "animals": {
//                 "status": "approved",
//                 "approved_on": "2020-06-16T11:38:49Z"
//             },
//             "wallpapers": {
//                 "status": "approved",
//                 "approved_on": "2021-04-23T10:55:04Z"
//             }
//         },
//         "user": {
//             "id": "1LMzZNX562k",
//             "updated_at": "2023-11-24T11:02:41Z",
//             "username": "alvannee",
//             "name": "Alvan Nee",
//             "first_name": "Alvan",
//             "last_name": "Nee",
//             "twitter_username": "Alvan Nee",
//             "portfolio_url": null,
//             "bio": "I really love unsplash！！！！！",
//             "location": "Shanghai, China",
//             "links": {
//                 "self": "https://api.unsplash.com/users/alvannee",
//                 "html": "https://unsplash.com/@alvannee",
//                 "photos": "https://api.unsplash.com/users/alvannee/photos",
//                 "likes": "https://api.unsplash.com/users/alvannee/likes",
//                 "portfolio": "https://api.unsplash.com/users/alvannee/portfolio",
//                 "following": "https://api.unsplash.com/users/alvannee/following",
//                 "followers": "https://api.unsplash.com/users/alvannee/followers"
//             },
//             "profile_image": {
//                 "small": "https://images.unsplash.com/profile-1617947361627-4a8765a9b014image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
//                 "medium": "https://images.unsplash.com/profile-1617947361627-4a8765a9b014image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
//                 "large": "https://images.unsplash.com/profile-1617947361627-4a8765a9b014image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
//             },
//             "instagram_username": "alvan_nee",
//             "total_collections": 0,
//             "total_likes": 66,
//             "total_photos": 114,
//             "total_promoted_photos": 23,
//             "accepted_tos": true,
//             "for_hire": false,
//             "social": {
//                 "instagram_username": "alvan_nee",
//                 "portfolio_url": null,
//                 "twitter_username": "Alvan Nee",
//                 "paypal_email": null
//             }
//         },
//         "tags": [
//             {
//                 "type": "landing_page",
//                 "title": "animal",
//                 "source": {
//                     "ancestry": {
//                         "type": {
//                             "slug": "images",
//                             "pretty_slug": "Images"
//                         },
//                         "category": {
//                             "slug": "animals",
//                             "pretty_slug": "Animals"
//                         }
//                     },
//                     "title": "Animals images & pictures",
//                     "subtitle": "Download free animals images",
//                     "description": "Passionate photographers have captured the most gorgeous animals in the world in their natural habitats and shared them with Unsplash. Now you can use these photos however you wish, for free!",
//                     "meta_title": "Best 20+ Animals Pictures [HD] | Download Free Images on Unsplash",
//                     "meta_description": "Choose from hundreds of free animals pictures. Download HD animals photos for free on Unsplash.",
//                     "cover_photo": {
//                         "id": "YozNeHM8MaA",
//                         "slug": "selective-focus-photography-of-giraffe-YozNeHM8MaA",
//                         "created_at": "2017-04-18T17:00:04Z",
//                         "updated_at": "2023-11-29T05:01:57Z",
//                         "promoted_at": "2017-04-19T17:54:55Z",
//                         "width": 5184,
//                         "height": 3456,
//                         "color": "#f3f3c0",
//                         "blur_hash": "LPR{0ext~pIU%MRQM{%M%LozIBM|",
//                         "description": "I met this dude on safari in Kruger National park in northern South Africa. The giraffes were easily in my favorite creatures to witness. They seemed almost prehistoric the the way the graced the African plain.",
//                         "alt_description": "selective focus photography of giraffe",
//                         "breadcrumbs": [],
//                         "urls": {
//                             "raw": "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-4.0.3",
//                             "full": "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
//                             "regular": "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
//                             "small": "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
//                             "thumb": "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
//                             "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1492534513006-37715f336a39"
//                         },
//                         "links": {
//                             "self": "https://api.unsplash.com/photos/selective-focus-photography-of-giraffe-YozNeHM8MaA",
//                             "html": "https://unsplash.com/photos/selective-focus-photography-of-giraffe-YozNeHM8MaA",
//                             "download": "https://unsplash.com/photos/YozNeHM8MaA/download",
//                             "download_location": "https://api.unsplash.com/photos/YozNeHM8MaA/download"
//                         },
//                         "likes": 1533,
//                         "liked_by_user": false,
//                         "current_user_collections": [],
//                         "sponsorship": null,
//                         "topic_submissions": {
//                             "animals": {
//                                 "status": "approved",
//                                 "approved_on": "2021-06-09T15:10:40Z"
//                             }
//                         },
//                         "premium": false,
//                         "plus": false,
//                         "user": {
//                             "id": "J6cg9TA8-e8",
//                             "updated_at": "2023-09-13T12:18:11Z",
//                             "username": "judahlegge",
//                             "name": "Judah Legge",
//                             "first_name": "Judah",
//                             "last_name": "Legge",
//                             "twitter_username": null,
//                             "portfolio_url": null,
//                             "bio": null,
//                             "location": null,
//                             "links": {
//                                 "self": "https://api.unsplash.com/users/judahlegge",
//                                 "html": "https://unsplash.com/@judahlegge",
//                                 "photos": "https://api.unsplash.com/users/judahlegge/photos",
//                                 "likes": "https://api.unsplash.com/users/judahlegge/likes",
//                                 "portfolio": "https://api.unsplash.com/users/judahlegge/portfolio",
//                                 "following": "https://api.unsplash.com/users/judahlegge/following",
//                                 "followers": "https://api.unsplash.com/users/judahlegge/followers"
//                             },
//                             "profile_image": {
//                                 "small": "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
//                                 "medium": "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
//                                 "large": "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
//                             },
//                             "instagram_username": "khoziemusic",
//                             "total_collections": 0,
//                             "total_likes": 4,
//                             "total_photos": 1,
//                             "total_promoted_photos": 1,
//                             "accepted_tos": false,
//                             "for_hire": false,
//                             "social": {
//                                 "instagram_username": "khoziemusic",
//                                 "portfolio_url": null,
//                                 "twitter_username": null,
//                                 "paypal_email": null
//                             }
//                         }
//                     }
//                 }
//             },
//             {
//                 "type": "search",
//                 "title": "pet"
//             },
//             {
//                 "type": "search",
//                 "title": "china"
//             }
//         ]
//     }
// }

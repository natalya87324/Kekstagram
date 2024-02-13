import { createPhoto } from './data.js';

const picturesList = document.querySelector('.pictures');

const randomPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const userPhotos = createPhoto();

const renderPhoto = ({url, comments, likes}) => {
  const photoElement = randomPictureTemplate.cloneNode(true);

  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  photoElement.querySelector('.picture__likes').textContent = likes;

  return photoElement;
}

const renderPhotos = () => {
  const photoListFragment = document.createDocumentFragment();
  userPhotos.forEach((photo) => {
    photoListFragment.appendChild(renderPhoto(photo));
  });
  picturesList.appendChild(photoListFragment);
};

export {renderPhotos};









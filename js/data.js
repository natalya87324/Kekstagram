import { getRandomInt, getRandomArrayItem} from './util.js';

const PHOTO_COUNT = 25;

const LIKES_MIN = 15;
const LIKES_MAX = 200;

const COMMENTS_MIN = 1;
const COMMENTS_MAX = 5;

const ID_MIN = 1;
const ID_MAX = 100;

const AVATAR_NUM_MIN = 1;
const AVATAR_NUM_MAX = 6;

const photoDescription = 'Фотография пользователя';

const names = [
  'Алиса',
  'Геннадий',
  'Жора',
  'Иришка',
  'Димитрий',
  'Мадлен',
  'Аристарх',
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const addComment = () => {
  const comments = [];
  for (let i = 0; i < getRandomInt(COMMENTS_MIN, COMMENTS_MAX); i++) {
    comments.push({
      id: getRandomInt(ID_MIN, ID_MAX),
      avatar: `img/avatar-${getRandomInt(AVATAR_NUM_MIN, AVATAR_NUM_MAX)}.svg`,
      message: getRandomArrayItem(messages),
      name: getRandomArrayItem(names),
    });
  }
  return comments;
};

const createPhoto = () => {
  const photos = [];
  for (let i = 0; i < PHOTO_COUNT; i++) {
    photos.push({
      id: i + 1,
      url: `photos/${i + 1}.jpg`,
      description: photoDescription,
      likes: getRandomInt(LIKES_MIN, LIKES_MAX),
      comments: addComment(),
    });
  }
  return photos;
};

export {createPhoto};

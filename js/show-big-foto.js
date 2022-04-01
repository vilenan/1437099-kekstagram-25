import { bigPictureElement, bodyElement } from './make-fotos.js';
const showBigFoto = ({ url, description, likes, comments }) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  const commentsCountElement = document.querySelector('.social__comment-count');
  commentsCountElement.classList.add('hidden');
  const commentsLoaderElement = document.querySelector('.comments-loader');
  commentsLoaderElement.classList.add('hidden');

  const bigImageElement = bigPictureElement.querySelector('.big-picture__img img');
  bigImageElement.src = url;
  const likesNumberElement = bigPictureElement.querySelector('.likes-count');
  likesNumberElement.textContent = likes;
  const commentsNumberElement = bigPictureElement.querySelector('.comments-count');
  commentsNumberElement.textContent = comments.length;

  const commentsContainerElement = bigPictureElement.querySelector('.social__comments');
  const commentElement = commentsContainerElement.querySelector('.social__comment');

  const fragmentComments = document.createDocumentFragment();
  commentsContainerElement.innerHTML = '';
  comments.forEach((fotoComment) => {
    const commentTemplate = commentElement.cloneNode(true);
    const CommentElementAvatar = commentTemplate.querySelector('.social__picture');
    CommentElementAvatar.src = fotoComment.avatar;
    const bigPictureCommentElementText = commentTemplate.querySelector('.social__text');
    bigPictureCommentElementText.textContent = fotoComment.message;
    fragmentComments.appendChild(commentTemplate);
  });
  commentsContainerElement.appendChild(fragmentComments);

  const fotoDescriptionElement = bigPictureElement.querySelector('.social__caption');
  fotoDescriptionElement.textContent = description;
};

export { showBigFoto };

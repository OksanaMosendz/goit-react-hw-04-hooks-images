export const getImages = (searchWord, page) => {
  return fetch(
    `https://pixabay.com/api/?q=` +
      searchWord +
      `&page=` +
      page +
      `&key=22611406-1fc8dc647f338efc8b1d9d866&image_type=photo&orientation=horizontal&per_page=12`,
  )
    .then(resp => resp.json())
    .then(x => x.hits);
};

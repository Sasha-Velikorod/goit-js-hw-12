import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page) {
  const KEY_API = '51376932-00c07b39d8c117a87ed229cff';

  const options = {
    params: {
      key: KEY_API,
      q: query,
      page,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
    },
  };

  const resp = await axios.get('', options);

  return resp.data;
}

import { times, concat } from 'lodash';
import actions from '../actions';

const places = [{
  id: '1',
  en: 'Pak Tam Chung',
  tc: '北潭涌',
}, {
  id: '2',
  en: 'Lok Wu Country Trail',
  tc: '鹿湖郊遊徑',
}, {
  id: '3',
  en: 'Sai Wan Pavilion',
  tc: '西灣亭',
}, {
  id: '4',
  en: 'Sai Wan',
  tc: '西灣',
}, {
  id: '5',
  en: 'Ham Tin',
  tc: '鹹田',
}, {
  id: '6',
  en: 'Chek Keng',
  tc: '赤徑',
}, {
  id: '7',
  en: 'Wong Sek',
  tc: '黃石',
}, {
  id: '8',
  en: 'Tai Tan Country Trail',
  tc: '大灘郊遊徑',
}, {
  id: '9',
  en: 'Cheung Sheung Country Trail',
  tc: '嶂上郊遊徑',
}];

const fetchPlaces = () => {
  const fetchFunc = () => {
    const data = {
      items: places
    };
    return Promise.resolve(data);
  };
  const subreddit = 'PLACES';
  return actions.fetchAssetsIfNeeded(subreddit, fetchFunc);
};

const bibs = concat(
  times(200, index => String(index + 1)),
  times(50, index => `${index}A`),
  times(50, index => `${index}B`)
);
const fetchBibs = () => {
  const fetchFunc = () => {
    const data = { items: bibs };
    return Promise.resolve(data);
  };
  const subreddit = 'BIBS';
  return actions.fetchAssetsIfNeeded(subreddit, fetchFunc);
};

export default {
  fetchPlaces,
  fetchBibs,
};

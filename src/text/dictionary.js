const text = {
  en: {
    'photo--no-photo': 'No Photos recently!'
  },
  tc: {
    'photo--no-photo': '未有相片'
  }
};

const getDictionary = locale => text[locale];

export default getDictionary;

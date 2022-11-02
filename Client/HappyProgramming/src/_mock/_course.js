import { randomInArray } from './_funcs';
import _mock from './_mock';

export const _courseList = [...Array(24)].map((_, index) => ({
  id: _mock.id(index),
  thumbnail: _mock.image.thumbnail(index),
  title: _mock.text.title(index),
  description: _mock.text.description(index),
  paragraph: [...Array(3)]
    .map((_, index) => _mock.text.description(index))
    .join('. '),
  provider: _mock.company(index),
  rating: randomInArray([_mock.number.rating(index), undefined]),
  price: _mock.number.price(index),
  isOnline: _mock.boolean(index),
  process: randomInArray([1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7]),
  start: _mock.time(index),
  promote: randomInArray(['new', 'sale', 'hot', 'best', '', '']),
  learn: [
    'Define and explain key concepts involved in data analytics including data, data analysis, and data ecosystem',
    'Conduct an analytical thinking self assessment giving specific examples of the application of analytical thinking',
    'Discuss the role of spreadsheets, query languages, and data visualization tools in data analytic',
    'Describe the role of a data analyst with specific reference to jobs/positions',
  ],
  skills: [
    'Spreadsheet',
    'Data Cleansing',
    'Data Analysis',
    'Data Visualization (DataViz)',
    'SQL',
  ],
}));

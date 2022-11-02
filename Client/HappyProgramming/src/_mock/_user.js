import { randomInArray, randomNumberRange } from './_funcs';
import _mock from './_mock';

export const _userList = [...Array(24)].map((_, index) => ({
  id: _mock.id(index),
  avatarUrl: _mock.image.avatar(index),
  cover: _mock.image.cover(1),
  position: 'UI Designer',
  follower: randomNumberRange(999, 99999),
  following: randomNumberRange(999, 99999),
  quote:
    'Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer..',
  name: _mock.name.fullName(index),
  email: _mock.email(index),
  phoneNumber: _mock.phoneNumber(index),
  address: _mock.address.fullAddress(index),
  country: _mock.address.country(index),
  company: _mock.company(index),
  state: 'Virginia',
  city: 'Rancho Cordova',
  zipCode: '85807',
  school: _mock.company(index + 1),
  isVerified: _mock.boolean(index),
  status: randomInArray(['active', 'banned']),
  role: _mock.role(index),
  facebookLink: `https://www.facebook.com/caitlyn.kerluke`,
  instagramLink: `https://www.instagram.com/caitlyn.kerluke`,
  linkedinLink: `https://www.linkedin.com/in/caitlyn.kerluke`,
  twitterLink: `https://www.twitter.com/caitlyn.kerluke`,
}));

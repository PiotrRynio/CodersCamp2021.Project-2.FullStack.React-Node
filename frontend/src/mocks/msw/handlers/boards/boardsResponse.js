import PropTypes from 'prop-types';

const sampleAnnouncement1 = {
  id: 1,
  title: 'Skradziono rower!',
  boardName: 'Sobótka',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in risus eros. Morbi euismod magna ut lacus luctus tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce leo eros, pretium et blandit vestibulum, accumsan nec tellus. Pellentesque odio est, posuere at lectus ac, fermentum dignissim purus. Pellentesque convallis faucibus ex sed sollicitudin. Vestibulum sodales quis felis eget facilisis. Integer venenatis, tellus in consectetur eleifend, risus nulla feugiat nisl, a ornare diam urna sed risus. Maecenas a volutpat est. Maecenas mattis odio a ligula euismod, sit amet viverra massa aliquet.\n' +
    '\n' +
    'Phasellus maximus massa vel velit varius condimentum. Integer at ipsum nec est consequat mollis in quis orci. Maecenas vel elementum nunc. Curabitur sit amet magna lorem. Suspendisse fringilla magna ligula, at tempor odio rhoncus eget. Sed pharetra imperdiet tellus, in sodales mauris vehicula non. Fusce viverra justo vel luctus dictum. Aliquam a sem eu ante fermentum scelerisque. Proin mauris erat, consectetur vel consequat quis, porttitor eu diam. Nunc aliquam arcu in neque condimentum condimentum. Sed sed condimentum arcu.',
  comments: ['a', 'b', 'c'],
  date: new Date(1995, 11, 17, 3, 24, 0),
};

const sampleAnnouncement2 = {
  id: 2,
  title: 'Awaria prądu!',
  boardName: 'Sobótka',
  iconType: 'electricity',
  content:
    'AwariaLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in risus eros. Morbi euismod magna ut lacus luctus tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce leo eros, pretium et blandit vestibulum, accumsan nec tellus. Pellentesque odio est, posuere at lectus ac, fermentum dignissim purus. Pellentesque convallis faucibus ex sed sollicitudin. Vestibulum sodales quis felis eget facilisis. Integer venenatis, tellus in consectetur eleifend, risus nulla feugiat nisl, a ornare diam urna sed risus. Maecenas a volutpat est. Maecenas mattis odio a ligula euismod, sit amet viverra massa aliquet.\n' +
    '\n' +
    'Phasellus maximus massa vel velit varius condimentum. Integer at ipsum nec est consequat mollis in quis orci. Maecenas vel elementum nunc. Curabitur sit amet magna lorem. Suspendisse fringilla magna ligula, at tempor odio rhoncus eget. Sed pharetra imperdiet tellus, in sodales mauris vehicula non. Fusce viverra justo vel luctus dictum. Aliquam a sem eu ante fermentum scelerisque. Proin mauris erat, consectetur vel consequat quis, porttitor eu diam. Nunc aliquam arcu in neque condimentum condimentum. Sed sed condimentum arcu.',
  comments: ['a', 'b', 'c', 'd', 'e'],
  date: new Date(2022, 1, 13, 0, 0, 0),
};

const sampleAnnouncement3 = {
  id: 3,
  title: 'Brak wody.',
  boardName: 'Sobótka',
  iconType: 'water',
  content:
    'WodaLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in risus eros. Morbi euismod magna ut lacus luctus tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce leo eros, pretium et blandit vestibulum, accumsan nec tellus. Pellentesque odio est, posuere at lectus ac, fermentum dignissim purus. Pellentesque convallis faucibus ex sed sollicitudin. Vestibulum sodales quis felis eget facilisis. Integer venenatis, tellus in consectetur eleifend, risus nulla feugiat nisl, a ornare diam urna sed risus. Maecenas a volutpat est. Maecenas mattis odio a ligula euismod, sit amet viverra massa aliquet.\n' +
    '\n' +
    'Phasellus maximus massa vel velit varius condimentum. Integer at ipsum nec est consequat mollis in quis orci. Maecenas vel elementum nunc. Curabitur sit amet magna lorem. Suspendisse fringilla magna ligula, at tempor odio rhoncus eget. Sed pharetra imperdiet tellus, in sodales mauris vehicula non. Fusce viverra justo vel luctus dictum. Aliquam a sem eu ante fermentum scelerisque. Proin mauris erat, consectetur vel consequat quis, porttitor eu diam. Nunc aliquam arcu in neque condimentum condimentum. Sed sed condimentum arcu.',
  date: new Date(2022, 2, 3, 0, 0, 0),
};

const sampleAnnouncement4 = {
  id: 4,
  title: 'Znaleziono psa.',
  boardName: 'Chrząszczyżewoszyce',
  iconType: 'pets',
  content:
    'PiesLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in risus eros. Morbi euismod magna ut lacus luctus tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce leo eros, pretium et blandit vestibulum, accumsan nec tellus. Pellentesque odio est, posuere at lectus ac, fermentum dignissim purus. Pellentesque convallis faucibus ex sed sollicitudin. Vestibulum sodales quis felis eget facilisis. Integer venenatis, tellus in consectetur eleifend, risus nulla feugiat nisl, a ornare diam urna sed risus. Maecenas a volutpat est. Maecenas mattis odio a ligula euismod, sit amet viverra massa aliquet.\n' +
    '\n' +
    'Phasellus maximus massa vel velit varius condimentum. Integer at ipsum nec est consequat mollis in quis orci. Maecenas vel elementum nunc. Curabitur sit amet magna lorem. Suspendisse fringilla magna ligula, at tempor odio rhoncus eget. Sed pharetra imperdiet tellus, in sodales mauris vehicula non. Fusce viverra justo vel luctus dictum. Aliquam a sem eu ante fermentum scelerisque. Proin mauris erat, consectetur vel consequat quis, porttitor eu diam. Nunc aliquam arcu in neque condimentum condimentum. Sed sed condimentum arcu.',
  comments: ['a', 'b'],
  date: new Date(2022, 1, 1, 0, 0, 0),
};

const sampleAnnouncement5 = {
  id: 5,
  title: 'Co to za imprezka?!',
  boardName: 'Chrząszczyżewoszyce',
  content:
    'PiesLorem ipsum dolor sit amearius condimenum nunc. Curabitur sit amet magna lorem. Suspendisse fringilla magna ligula, at tempor odio rhoncus eget. Sed pharetra imperdiet tellus, in sodales mauris vehicula non. Fusce viverra justo vel luctus dictum. Aliquam a sem eu ante fermentum scelerisque. Proin mauris erat, consectetur vel consequat quis, porttitor eu diam. Nunc aliquam arcu in neque condimentum condimentum. Sed sed condimentum arcu.',
  comments: ['a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a'],
  date: new Date(2022, 2, 14, 0, 0, 0),
};

const sampleBoard1 = {
  id: 1,
  boardName: 'Sobótka',
  announcements: [sampleAnnouncement1, sampleAnnouncement2, sampleAnnouncement3],
};

const sampleBoard2 = {
  id: 2,
  boardName: 'Chrząszczyżewoszyce',
  announcements: [sampleAnnouncement4, sampleAnnouncement5],
};

export const boardsResponse = { boards: [sampleBoard1, sampleBoard2] };

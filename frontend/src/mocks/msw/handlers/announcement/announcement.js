import Announcement from 'components/Announcement/Announcement';

const board = 'Sobótka';
const title = 'Skradziono rower!';
const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in risus eros. Morbi euismod magna ut lacus luctus tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce leo eros, pretium et blandit vestibulum, accumsan nec tellus. Pellentesque odio est, posuere at lectus ac, fermentum dignissim purus. Pellentesque convallis faucibus ex sed sollicitudin. Vestibulum sodales quis felis eget facilisis. Integer venenatis, tellus in consectetur eleifend, risus nulla feugiat nisl, a ornare diam urna sed risus. Maecenas a volutpat est. Maecenas mattis odio a ligula euismod, sit amet viverra massa aliquet.\n' +
  '\n' +
  'Phasellus maximus massa vel velit varius condimentum. Integer at ipsum nec est consequat mollis in quis orci. Maecenas vel elementum nunc. Curabitur sit amet magna lorem. Suspendisse fringilla magna ligula, at tempor odio rhoncus eget. Sed pharetra imperdiet tellus, in sodales mauris vehicula non. Fusce viverra justo vel luctus dictum. Aliquam a sem eu ante fermentum scelerisque. Proin mauris erat, consectetur vel consequat quis, porttitor eu diam. Nunc aliquam arcu in neque condimentum condimentum. Sed sed condimentum arcu.';
const comments = ['a', 'b', 'c'];

<Announcement
  announcement={{
    title,
    boardName: board,
    content,
    iconType: 'electricity',
    comments,
  }}
/>;

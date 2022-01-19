import React from 'react';
import {
  Container,
  ChooseNotifications,
  LatestNotifications,
  SubscribedNotifications,
} from './Notifications.styled';

const Notifications = () => {
  return (
    <Container>
      <ChooseNotifications>
        <LatestNotifications>Latest Notifications</LatestNotifications>
        <SubscribedNotifications>Subscribed Notifications</SubscribedNotifications>
      </ChooseNotifications>
    </Container>
  );
};
export default Notifications;

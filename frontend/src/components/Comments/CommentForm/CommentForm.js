import { UserAvatar } from '../UserAvatar/UserAvatar';
import avatar1 from 'mocks/images/avatars/sample-avatar1.jpg';

export const CommentForm = () => {
  return (
    <div>
      <UserAvatar userAvatarImage={avatar1} />
      <form>
        <textarea id="" rows="3" cols="100" />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

import { UserComment } from '../UserComment/UserComment';
import { sampleComment1, sampleComment2 } from '../../mock/UserComment';

export const CommentSection = () => {
  return (
    <div>
      <div className="title">Comments</div>
      <div className="comments>">
        <UserComment comment={sampleComment1} />
        <UserComment comment={sampleComment2} />
      </div>
    </div>
  );
};

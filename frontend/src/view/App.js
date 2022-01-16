import { CommentList } from './UserCommentList/CommentList';
import { sampleCommentList } from '../mocks/UserCommentList';

function App() {
  return (
    <div className="App">
      <p></p>
      <CommentList comments={sampleCommentList} />
    </div>
  );
}

export default App;

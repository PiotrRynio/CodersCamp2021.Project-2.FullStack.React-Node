import { UserComment } from './UserComment/UserComment';
import { sampleComment } from '../mock/UserComment';

function App() {
  return (
    <div className="App">
      <UserComment commentObject={sampleComment} />
    </div>
  );
}

export default App;

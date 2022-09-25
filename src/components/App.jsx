import { Profile } from './Profile/Profile';
import user from './Profile/user.json';

const userN = user;
export const App = () => {
  return (
    <div>
      <Profile userN/>
    </div>
  );
};
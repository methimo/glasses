import { Link } from 'react-router-dom';
import LogoutButton from '../components/LogoutButton';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        <Link to="/hello">hello</Link>
      </p>
      <LogoutButton />
    </div>
  );
}

export default Home;

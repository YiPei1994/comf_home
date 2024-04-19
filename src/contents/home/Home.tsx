import { createPortal } from 'react-dom';
import Welcome from './Welcome';

function Home() {
  return <div className="">{createPortal(<Welcome />, document.body)}</div>;
}

export default Home;

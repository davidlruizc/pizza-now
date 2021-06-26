import { NavigationUrls } from 'constants/navigationURLS';
import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <div>embeces</div>
      <Link to={NavigationUrls.createPizza}>create pizza</Link>
      <button onClick={() => history.push('/asdf')}>a</button>
    </React.Fragment>
  );
};

export default Home;

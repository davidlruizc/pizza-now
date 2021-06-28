import React from 'react';
import App from './App';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import { MockProvider } from 'utils/tests/MockProvider';

describe('<App />', () => {
  test('invalid path should redirect to 404', () => {
    const wrapper = MockProvider('/random', <App />);

    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(NotFound)).toHaveLength(1);
  });

  test('render root app navigation', () => {
    const wrapper = MockProvider('/', <App />);

    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });
});

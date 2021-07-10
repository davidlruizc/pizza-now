import * as React from 'react';
import { create } from 'react-test-renderer';
import { MockProvider } from 'utils/tests/MockProvider';
import NotFound from '../index';
import { ContentLabel, ImageNotFound } from '../styles';
import NoFoundImage from 'assets/images/not-found.svg';

describe('<NotFound />', () => {
  const component = MockProvider('/random', <NotFound />);

  test('render content', () => {
    expect(component.length).toEqual(1);
  });

  test('verify main content', () => {
    expect(component.find(ContentLabel).text()).toEqual('404 Página no encontrada');
  });

  test('renders an image', () => {
    expect(component.find(ImageNotFound).prop('src')).toEqual(NoFoundImage);
  });
});

describe('NotFound snapshot', () => {
  test('match full UI content', () => {
    const component = create(<NotFound />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

import * as React from 'react';
import { MockProvider } from 'utils/tests/MockProvider';
import NotFound from '../index';
import { ContentLabel } from '../styles';

describe('<NotFound />', () => {
  const component = MockProvider('/random', <NotFound />);

  test('render content', () => {
    expect(component.length).toEqual(1);
  });

  test('verify main content', () => {
    expect(component.find(ContentLabel).text()).toEqual('404 Página no encontrada');
  });
});

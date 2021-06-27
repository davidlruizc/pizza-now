import React from 'react';
import BigCard from './index';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

// TODO: change test for children prop
describe('<BigCard />', () => {
  test('render big card', () => {
    const data = {
      title: 'Crea tu pizza',
      subtitle: 'Elige los sabores que más te gusten y arma una pizza a tu medida',
    };

    const component = render(
      <BigCard title={data.title} subtitle={data.subtitle}>
        Pizza Now
      </BigCard>
    );

    component.getByText('Crea tu pizza');
    component.getByText('Elige los sabores que más te gusten y arma una pizza a tu medida');

    const tree = renderer
      .create(
        <BigCard title={data.title} subtitle={data.subtitle}>
          Pizza Now
        </BigCard>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

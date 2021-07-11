import { mount, shallow } from 'enzyme';
import * as React from 'react';
import { FormatCurrency } from 'utils';
import Ingredient from '../index';
import { Content, SubContent } from '../styles';
// eslint-disable-next-line jest/no-mocks-import
import { IngredientMock } from '../__mocks__/IngredientMock';

describe('<Ingredient />', () => {
  const handlerAddMock = jest.fn();
  const handlerRemoveMock = jest.fn();

  const component = shallow(
    <Ingredient
      {...IngredientMock}
      addIngredient={handlerAddMock}
      removeIngredient={handlerRemoveMock}
    />
  );

  test('render component', () => {
    expect(component.length).toEqual(1);
  });

  test('render ingredient', () => {
    expect(component.find(Content).text()).toEqual('pizza');
  });

  test('render price', () => {
    const priceFormat = FormatCurrency(20000);
    expect(component.find(SubContent).text()).toEqual(priceFormat);
  });

  test('verify add ingredients button', () => {
    const b = component.find('.remove-btn');
    console.log(b.debug());
    expect(handlerAddMock).toHaveBeenCalledTimes(1);
  });

  // test('verify remove ingredients button', () => {
  //   component.find('#add-btn').simulate('click');
  //   expect(handlerRemoveMock).toHaveBeenCalledTimes(1);
  // });
});

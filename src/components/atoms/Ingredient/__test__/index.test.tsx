import { mount } from 'enzyme';
import * as React from 'react';
import { FormatCurrency } from 'utils';
import Ingredient from '../index';
import { Content, SubContent } from '../styles';
// eslint-disable-next-line jest/no-mocks-import
import { IngredientMock } from '../__mocks__/IngredientMock';

describe('<Ingredient />', () => {
  const handlerAddMock = jest.fn();
  const handlerRemoveMock = jest.fn();

  const component = mount(
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
    component.find('button').at(1).simulate('click');
    expect(handlerAddMock).toHaveBeenCalledTimes(1);
  });

  test('verify remove ingredients button', () => {
    component.find('button').at(0).simulate('click');
    expect(handlerRemoveMock).toHaveBeenCalledTimes(1);
  });
});

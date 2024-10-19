/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { shallow } from 'enzyme';
import ExcelColumn from '../../src/ExcelPlugin/elements/ExcelColumn';

// Mock localStorage before running the tests
beforeAll(() => {
    const mockLocalStorage = {
        getItem: jest.fn(),
        setItem: jest.fn(),
        clear: jest.fn(),
        removeItem: jest.fn(),
    };
    Object.defineProperty(global, 'localStorage', { value: mockLocalStorage });
});
  
describe('React Data Export unit test', () => {
    test('should render ExcelColumn', () => {
        const wrapper = shallow(<ExcelColumn
            label={'test'}
            value={'test'}
        />);
        expect(wrapper.html()).toMatchSnapshot();
    });
});

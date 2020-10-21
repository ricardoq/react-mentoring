import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../utils/constans';
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, configure } from "enzyme";
import { render, fireEvent, wait } from "@testing-library/react";

import EditMovie from './editMovie';

configure({ adapter: new Adapter() });

describe('Edit movie test', () => {

  it('should be rendered correctly', () => {
    shallow(<Provider store={store}><EditMovie/></Provider>);
  });

  it('should call add prop on submit', () => {
    /*
    const wrapper = render(<Provider store={store}><EditMovie/></Provider>);
    const title = wrapper.getByLabelText('TITLE');
    */
  });
});

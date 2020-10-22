import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../utils/constans';
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, configure } from "enzyme";
import { genresMovie } from '../../utils/constans';
import { act } from 'react-dom/test-utils';

import EditMovie from './editMovie';

configure({ adapter: new Adapter() });

describe('Edit movie test', () => {

  const fields = {
    title: 'Title',
    date: '2020-10-09',
    url: 'http://url.com',
    poster: 'http://poster.com',
    genre: genresMovie.ACTION,
    overview: 'lorem ipsum dolor sit amet',
    runtime: 154,
  };

  it('should be rendered correctly', () => {
    shallow(<Provider store={store}><EditMovie/></Provider>);
  });

  it('should call add prop on submit', async () => {
    const wrapper = mount(
      <Provider store={store}>
        <EditMovie isOpen={true}/>
      </Provider>
    );

    wrapper.setProps({isOpen: true});

    await setFormikFields(wrapper, fields);
    wrapper.update();

    for( const [key, value] of Object.entries(fields) ) {
      if (key !== 'genre') {
        expect(wrapper.find(`input#${key}`).prop('value')).toBe(value);
      } else {
        expect(wrapper.find(`select#${key}`).prop('value')).toBe(value);
      }
    }

  });

});

const setFormikFields = async (wrapper, values) => {
  for( const [key, value] of Object.entries(values) ) {
      if (key !== 'genre') {
        await act( async () => {
          wrapper.find(`input#${key}`).simulate('change', {target: {name: key, value}});
        });
      } else {
        await act( async () => {
          wrapper.find(`select#${key}`).simulate('change', {target: {name: key, value}});
        });
      }
  }
};

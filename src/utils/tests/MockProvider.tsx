import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MemoryRouter } from 'react-router-dom';
import rootReducer from 'states';
import { mount } from 'enzyme';
import { ToastProvider } from 'react-toast-notifications';

const store = createStore(rootReducer);

export const MockProvider = (path: string, component: React.ReactElement) =>
  mount(
    <MemoryRouter initialEntries={[path]}>
      <ToastProvider autoDismiss autoDismissTimeout={5000}>
        <Provider store={store}>{component}</Provider>
      </ToastProvider>
    </MemoryRouter>
  );

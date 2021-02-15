import React, { ReactNode } from 'react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';

export interface IRouterStubProps {
  children?: ReactNode;
}

const history = createMemoryHistory();

const RouterStub = ({ children }: IRouterStubProps): any => {
  return (
    <Router history={history}>
      {children}
    </Router>
  );
};

export { RouterStub };

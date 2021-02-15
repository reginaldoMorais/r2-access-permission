import React from 'react';
import { render, cleanup, RenderResult } from '@testing-library/react';

import PermissionRedirect from '../index';
import { RouterStub } from '.';

const authorities: string[] = ['ROLE_PRIMARY', 'ROLE_SECCONDARY'];

afterEach(cleanup)

describe("<PermissionRedirect />", () => {
  test(`should render child component if authorities are included`, () => {
    const { getByText }: RenderResult = render(<RouterStub>
      <PermissionRedirect authority="ROLE_SECCONDARY" authorities={authorities}>
        <div>Show component</div>
      </PermissionRedirect>
    </RouterStub>);

    const elementText = getByText(/Show component/i);
    expect(elementText).toBeTruthy();
  });

  test(`should redirect to other route if authorities are not included`, () => {
    const { container } = render(<RouterStub>
      <PermissionRedirect authority="ROLE_OTHER" authorities={authorities} redirect="/sign-in">
        <div>Show component</div>
      </PermissionRedirect>
    </RouterStub>);

    expect(container.innerHTML).toEqual(expect.stringContaining(''));
  });
});

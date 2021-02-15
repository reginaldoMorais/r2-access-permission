import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import PermissionView from '../index';

const authorities: string[] = ['ROLE_PRIMARY', 'ROLE_SECCONDARY'];

describe("<PermissionView />", () => {
  test(`should render child component if authorities are included`, () => {
    const { getByText }: RenderResult = render(<div>
      <PermissionView authority="ROLE_SECCONDARY" authorities={authorities}>
        <div>Show component</div>
      </PermissionView>
    </div>);

    const elementText = getByText(/Show component/i);
    expect(elementText).toBeTruthy();
  });

  test(`should render to other component if authorities are not included`, () => {
    const { getByText }: RenderResult = render(<div>
      <PermissionView authority="ROLE_OTHER" authorities={authorities} component={<div>Show other component</div>}>
        <div>Show component</div>
      </PermissionView>
    </div>);

    const elementText = getByText(/Show other component/i);
    expect(elementText).toBeTruthy();
  });

  test(`should render nothing if authorities are included and 'other component' are not defined`, () => {
    const { container }: RenderResult = render(<div>
      <PermissionView authority="ROLE_OTHER" authorities={authorities}>
        <div>Show component</div>
      </PermissionView>
    </div>);

    expect(container.innerHTML).not.toEqual(expect.stringContaining('Show other component'));
  });
});

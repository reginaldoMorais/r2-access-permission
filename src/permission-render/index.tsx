import React, { Component } from 'react';
import { IPermissionRenderProps } from './types';

class PermissionRender extends Component<IPermissionRenderProps> {
  render() {
    const { authorities = [''], authority = '', component, children } = this.props;
    if (authorities.includes(authority)) {
      return children;
    }

    return component || false;
  }
}

export default PermissionRender;

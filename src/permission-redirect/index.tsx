import React from 'react';
import { IPermissionRedirectProps } from './types';
import { Switch, Redirect } from 'react-router-dom';

const PermissionRedirect = ({
  authorities,
  authority,
  redirect = '/',
  children
}: IPermissionRedirectProps): any => {
  if (authorities.includes(authority)) {
    return children;
  }

  return (
    <Switch>
      <Redirect exact from="*" to={redirect} />
    </Switch>
  );
};

export default PermissionRedirect;

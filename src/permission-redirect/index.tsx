import React from 'react';
import { IPermissionRedirectProps } from './types';
import { Switch, Redirect } from 'react-router-dom';

export default ({
  authorities = [''],
  authority = '',
  redirect = '/',
  children
}: IPermissionRedirectProps) => {
  if (authorities.includes(authority)) {
    return children;
  }

  return (
    <Switch>
      <Redirect exact from="*" to={redirect} />
    </Switch>
  );
};

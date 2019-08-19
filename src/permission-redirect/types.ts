import { ReactNode } from 'react';

export interface IPermissionRedirectProps {
  authorities: [string];
  authority: string;
  redirect: string;
  children?: ReactNode;
}

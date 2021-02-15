import { ReactNode } from 'react';

export interface IPermissionRenderProps {
  authorities: string[];
  authority: string;
  component?: ReactNode;
  children?: ReactNode;
}

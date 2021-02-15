import { IPermissionRenderProps } from './types';

const PermissionView = ({
  authorities,
  authority,
  component,
  children
}: IPermissionRenderProps): any => {
  if (authorities.includes(authority)) {
    return children;
  }

  return component || false;
};

export default PermissionView;

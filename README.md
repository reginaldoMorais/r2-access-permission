# React Router Access Permission

This library makes React components available for display or redirect if user does not have access.

## Permission Redirect

If you need redirect the user to another uri, if he not have access, you could use ```<PermissionRedirect />```.

### Redirect Props

| Property        | Type            | Description                                             |
| --------------- | --------------- | ------------------------------------------------------- |
| **authorities** | Array of String | List of authorities to verify.                          |
| **authority**   | String          | Authority that user need to access the child component. |
| **redirect**    | String          | URI to send user if he not have permission to access.   |
| **children**    | String          | A child component to render.                            |

Example:

```code
const authorities = [
  'ROLE_FOO'
],

const Compoment = () => {
  return (
    <PermissionRedirect authorities={authorities} authority={'ROLE_BAR'} redirect="/logout">
      <div>You have access!</div>
    </PermissionRedirect>
  );
}
```

## Permission Render

If you need hide some component you could use ```<PermissionRender />```.

### Render Props

| Property        | Type            | Description                                                     |
| --------------- | --------------- | --------------------------------------------------------------- |
| **authorities** | Array of String | List of authorities to verify.                                  |
| **authority**   | String          | Authority that user need to access the child component.         |
| **compoment**   | React Component | Component rendered if user if he not have permission to access. |
| **children**    | React Component | A child component to render.                                    |

Example:

```code
const authorities = [
  'ROLE_FOO'
],

const Compoment = () => {
  return (
    <PermissionRender authorities={authorities} authority={'ROLE_BAR'} component={<div>You haven't access!</div>}>
      <div>You have access!</div>
    </PermissionRender>
  );
}
```

## Enjoy the library and Thank you for use it

[Reginaldo Morais](mailto:reginaldo.cmorais@gmail.com)

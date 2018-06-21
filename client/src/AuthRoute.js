import React from 'react';
import { Route, Redirect} from 'react-router-dom'

const PRIVATE_ROOT = '/';
const PUBLIC_ROOT = '/login';

const AuthRoute = ({component, ...props}) => {
  const { isPrivate } = component;

  if (props.user.isAuthenticated) {
    //El usuario esta autenticado
    if (isPrivate === true)
      //Si la ruta es privada, el usuario puede continuar
      return <Route { ...props } component={ component }/>
    else
      // Si la ruta es publica, el usuario es redireccionado a la ruta privada
      return <Redirect to={ PRIVATE_ROOT }/>;
  }
  else {
    //Si el usuario no esta autenticado
    if (isPrivate === true)
      //Si la ruta es privada, el usuario es redireccionada a la ruta publica
      return <Redirect to={ PUBLIC_ROOT }/>;
    else
      //Si la ruta es publica, el usuario puede continuar
      return <Route { ...props } component={ component }/>;
  }
};

export default AuthRoute;

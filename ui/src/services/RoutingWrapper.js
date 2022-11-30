// Source: https://stackoverflow.com/questions/70143135/how-to-use-react-router-dom-v6-navigate-in-class-component

import { useNavigate, useLocation } from 'react-router-dom';

export const RoutingWrapper = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
      <Component
        navigate={navigate}
        location={location}
        {...props}
        />
    );
  };
  
  return Wrapper;
};
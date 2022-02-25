import { Suspense } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Routes,
  Navigate
} from 'react-router-dom'; 

import { routes } from './routes';
 
import Logo from '../logo.svg';

export default function Navigation() {

  return (
    <Suspense fallback={<span>Loading...</span>} >
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img
              src={Logo}
              alt="Logotipo react-app"
            />
            <ul>
              {
                routes.map( ({to, name}) => (
                  <li
                    key={ to }
                  >
                    <NavLink
                      to={to}
                      className={({ isActive }) => isActive ? 'nav-active' : ''}
                    >
                      {name}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          <Routes>
            {
              routes.map( ({path, Component}) => (
                <Route
                  key={path}
                  path={path}
                  element={<Component />}
                />
              ))
            }  
            <Route path={"/*"} element={<Navigate to={routes[0].to} replace />} />
          </Routes>

        </div>
      </BrowserRouter>
    </Suspense>
  )
}
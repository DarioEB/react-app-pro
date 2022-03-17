import {
  BrowserRouter,
  Route, 
  NavLink,
  Routes,
  Navigate
} from 'react-router-dom';

import {
  FormikAbstractations,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterPage
} from '../03-forms/pages';

import Logo from '../logo.svg';



export default function Navigation() {

  return (
    <>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img
              src={Logo}
              alt="Logotipo react-app"
            />
            <ul>
              <li>
                <NavLink to={"/register"} className={({isActive}) => isActive ? 'nav-active' : '' } >Register Page</NavLink>
              </li>
              <li>
                <NavLink to={"/formik-basic"} className={({isActive}) => isActive ? 'nav-active' : '' } >Formik Basic</NavLink>
              </li> 
              <li>
                <NavLink to={"/formik-yup"} className={({isActive}) => isActive ? 'nav-active' : '' } >Formik Yup</NavLink>
              </li> 
              <li>
                <NavLink to={"/formik-components"} className={({isActive}) => isActive ? 'nav-active' : '' } >Formik Components</NavLink>
              </li> 
              <li>
                <NavLink to={"/formik-abstractations"} className={({isActive}) => isActive ? 'nav-active' : '' } >Formik Abstractations</NavLink>
              </li> 
              <li>
                <NavLink to={"/users"} className={({ isActive }) => isActive ? 'nav-active' : ''} >Users</NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path={"about"} element={ <h1>AboutPage</h1> } />
            <Route path={"formik-basic"} element={ <FormikBasicPage /> } />
            <Route path={"formik-yup"} element={ <FormikYupPage /> } />
            <Route path={"formik-components"} element={ <FormikComponents /> } />
            <Route path={"formik-abstractations"} element={ <FormikAbstractations /> } />
            <Route path={"register"} element={ <RegisterPage /> } />
            <Route path={"/*"} element={<Navigate to={"/register"} replace />} />
          </Routes> 
        </div>
      </BrowserRouter>
    </>
  )
}
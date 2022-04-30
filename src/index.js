import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes as ReactRoutes} from 'react-router-dom';

import { Routes }  from './constants/routes';
import EarthQuakes from './containers/earth-quakes';
import Profile from './containers/profile';
import Details from "./containers/details";

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
      <ReactRoutes>
         <Route
          exact
          path='/'
          element={<EarthQuakes/>}
        />
        <Route
          exact
          path={Routes.profile}
          element={<Profile/>}
        />
        <Route
          exact
          path={Routes.details}
          element={<Details/>}
        />
      </ReactRoutes>
    </BrowserRouter>,
  document.getElementById('root')
);

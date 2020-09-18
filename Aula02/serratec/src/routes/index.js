import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Tarefas from '../pages/Tarefas';


const Routes = () => (

    <Switch>
        <Route path='/' component={Dashboard} exact />
        <Route path='/tarefas' component={Tarefas} />
    </Switch>

);

export default Routes;
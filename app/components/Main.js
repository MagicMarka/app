import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import News from "./News";
import NewCalendar from "./Calendar";
import Email from './Email'
import Calls from './Calls'
import Settings from './Settings'
import Login from './Login'
import Operations from "./Operations";
export default() =>{
    return (
    <main>
        <Switch>
            <Route exact path='/' render={(props)=><Operations data={'data.json'}/>} />
            <Route path='/news' component={News}/>
            <Route path='/calendar' component={NewCalendar}/>
            <Route path='/calls' component={Calls}/>
            <Route path='/settings' component={Settings}/>
            <Route path='/mail' component={Email}/>
            <Route path='/login' component={Login}/>
        </Switch>
    </main>
)}

import React from 'react';
import { Link } from 'react-router-dom'

export default() =>{

 return (
    <div class="main-sidebar-nav dark-navigation">
        <div class="sidebar-nav">
            <ul class="nav flex-column" id="menu">
                <div class="nav-profile">
                    <img alt="profile" class="rounded-circle margin-b-10 circle-border " src="https://verstkaidesign.ru/wp-content/uploads/2017/04/sozdat-avatar-dlya-youtube-sharg.png" width="80"/>
                        <p class="name">Клиент</p>
                </div>
                <li class="nav-item"><Link className="nav-link" to='/news'>Новости</Link></li>
                <li class="nav-item"><Link className="nav-link" to='/'>Операции</Link></li>
                <li class="nav-item"><Link className="nav-link" to='/calendar'>Календарь</Link></li>
                <li class="nav-item"><Link className="nav-link" to='/calls'>Звонки и чаты</Link></li>
                <li class="nav-item"><Link className="nav-link" to='/mail'>Почта</Link></li>
                <li class="nav-item"><Link className="nav-link" to='/settings'>Настройки</Link></li>
                <li class="nav-item"><Link className="nav-link" to='/login'>Выйти</Link></li>
            </ul>
        </div>
    </div>
)};
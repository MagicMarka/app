import React from 'react';
import Modal from './Modal';
function Top() {
	return ( 
		<div className="page-heading">
              <h2>Операции</h2>
              <a href="#" className="btn btn-primary btn-rounded">Валюта: UAH <i className="fa fa-ellipsis-v" aria-hidden="true"></i></a>
              <button className="btn btn-primary btn-rounded">Новая операция + </button>
                <form>
                    <input className="form-control search-form" placeholder="Поиск" type="text"/><button type="submit" className="search-btn"><i className="fa fa-search" aria-hidden="true"></i></button>
                </form>
        </div>
     );
}

export default Top;
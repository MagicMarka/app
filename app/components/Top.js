import React from 'react';
import { Modal, Button, ButtonToolbar, Popover, Tooltip, OverlayTrigger, Col, FieldGroup, ButtonGroup } from 'react-bootstrap';
import ModalPopup from './ModalPopup';

export default class Top extends React.Component {
  render() {
	return ( 
		<div className="page-heading">
              <h2>Операции</h2>
              <a href="#" className="btn btn-primary btn-rounded">Валюта: UAH <i className="fa fa-ellipsis-v" aria-hidden="true"></i></a>
              <button className="btn btn-primary btn-rounded" onClick={this.props.showModal}>Новая операция + </button>
              {this.ModalPopup} 
                <form>
                    <input className="form-control search-form" placeholder="Поиск" type="text"/><button type="submit" className="search-btn"><i className="fa fa-search" aria-hidden="true"></i></button>
                </form>
                <ModalPopup state = {this.state} />
        </div>
     );
}
}



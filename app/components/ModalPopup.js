import React from 'react';
import { Modal, Button, ButtonToolbar, Popover, Tooltip, OverlayTrigger, Col, FieldGroup, ButtonGroup } from 'react-bootstrap';

export default class ModalPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false};
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal() {
        this.setState({showModal: true});
    }

    hideModal() {
        this.setState({showModal: false});
    }

    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = (
            <Tooltip id="modal-tooltip">
                wow.
            </Tooltip>
        );

        return (
        <Modal show={this.state.showModal} onHide={this.hideModal}>
                    <Modal.Header>
                        <Modal.Title><h3>Операция № 131/4 от 27.19.2017 </h3></Modal.Title>
                        <span onClick={this.hideModal}>Закрыть</span>
                    </Modal.Header>
                    <Modal.Body>
                    <Col md={6}>
                    <h4>Направление операции:</h4>
                    <ButtonGroup>
                    <Button bsStyle="primary">Отдаю</Button>
                    <Button>Получаю</Button>
                    </ButtonGroup>
                    <h4>Форма оплаты:</h4>
                    <ButtonGroup>
                    <Button>Нал</Button>
                    <Button>Безнал</Button>
                    </ButtonGroup>
                    </Col>
                    <Col  md={6} >
                      <form>
                        <input className="form-control " type="text" placeholder="A108.8"/>
                      </form>
                    </Col>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary"><i className="fa fa-info-circle" aria-hidden="true"></i> Добавить задачу </Button>
                        <Button bsStyle="primary"><i className="fa fa-envelope-o" aria-hidden="true"></i> Поставить задачу </Button>
                    </Modal.Footer>
                </Modal>
    );
    }
}
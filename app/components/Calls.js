import React from 'react';
import Chat from './chat';
export default class Calls extends React.Component {
    render() {
        return (
            <div>
                    <div className="col-sm-4 col-xs-12">
                        <div className="col-inside-lg chat"  >
                            <div className="chat-list">
                                <h6>Список чатов</h6>
                                <div className="list-item">
                                    <div className="number">Операция № 123-56</div>
                                    <div className="desc">Обмен валют</div>
                                </div>
                                <div className="list-item">
                                    <div className="number">Операция № 127-54</div>
                                    <div className="desc">Обмен валют</div>
                                </div>
                                <div className="list-item">
                                    <div className="number">Операция № 129-06</div>
                                    <div className="desc">Обмен валют</div>
                                </div>
                                <div className="list-item">
                                    <div className="number">Операция № 143-56</div>
                                    <div className="desc">Обмен валют</div>
                                </div>
                                <div className="list-item">
                                    <div className="number">Операция № 123-13</div>
                                    <div className="desc">Обмен валют</div>
                                </div>
                                <div className="list-item">
                                    <div className="number">Операция № 193-59</div>
                                    <div className="desc">Обмен валют</div>
                                </div>
                                <div className="list-item">
                                    <div className="number">Операция № 103-36</div>
                                    <div className="desc">Обмен валют</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8 col-xs-12 chat" >
                        <Chat />
                    </div>
            </div>
        );
    }
}



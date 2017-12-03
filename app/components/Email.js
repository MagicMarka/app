import React, { Component } from 'react';

export default() => {

        return (
            <div className="email">
                <dl className="meta dl-horizontal">
                    <dt>From</dt>
                    <dd>Name</dd>

                    <dt>To</dt>
                    <dd>Name</dd>

                    <dt>Subject</dt>
                    <dd>Subject</dd>
                </dl>
                <div className="body"></div>
            </div>
        );

};
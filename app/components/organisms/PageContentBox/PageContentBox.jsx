import React, { Component } from 'react';
import './PageContentBox.less';

const PageContentBox = (props) =>
    <div className={'page-content-box__box' + (props.noPadding ? " page-content-box__box--no-padding" : "")}>
        {props.children}
    </div>;

export default PageContentBox;
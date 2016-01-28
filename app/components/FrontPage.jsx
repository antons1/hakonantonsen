"use strict";

import React from "react";

class WhoAmI extends React.Component {
    render() {
        return(
            <div className="col-xs-12">
        
            </div>
        )
    }
};

class FrontPage extends React.Component {
    
    render() {
        return(
            <div className="row">
                <div className="col-xs-12">
                    <div className="container">
                        <div className="row">
                            <h1 className="col-xs-12 col-md-offset-6 col-md-6">
                                TUR OVER HARDANGER II
                            </h1>
                        </div>
                    </div>
                </div>
                <WhoAmI />
            </div>
        );
    }
};

export default FrontPage;
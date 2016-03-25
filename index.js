"use strict";

let React = require('react');
let PropTypes = React.PropTypes;

class ReactDDP extends React.Component {

    constructor(props) {
        super(props);
    }
}

ReactDDP.propTypes = {
    url: PropTypes.string.is.Required   
};



module.exports = ReactDDP;
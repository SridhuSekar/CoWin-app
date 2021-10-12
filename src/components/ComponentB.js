import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class ComponentB extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {
        const fetchedProps = this.props.data;
        console.log(fetchedProps)
    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return true
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
            
 {this.props.data.length ?(this.props.data.map(e=>(
                       
                        <>
                        <p>{e.district_name}</p>
                        
                        </>
                    ))):"empty"}
            </div>
        );
    }
}

// ComponentB.propTypes = {

// };

export default ComponentB;
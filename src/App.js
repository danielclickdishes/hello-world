import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import './App.css';

import * as actions from './actions';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { employess: [] }
  }

  componentDidMount() {

    this.props.fetchEmployees((res) => {

      this.setState({ employees: res.employees })
    })
  }


  renderEmployee(employee) {
    return <div key={employee.id} className='employee-item'>
      <div>
        First Name:
         </div>
      <div>
        {employee.firstName}
      </div>
      <div>
        Last Name:
         </div>
      <div>
        {employee.lastName}
      </div>
    </div>
  }

  render() {
    return (
      <div className="App">

        {_.map(this.state.employees, this.renderEmployee.bind(this))}
      </div>
    );
  }
}

export default connect(null, actions)(App);

// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SqlClient } from 'msnodesqlv8';
import routes from '../constants/routes.json';
import styles from './Home.css';

const sql: SqlClient = require('msnodesqlv8');

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  componentDidMount() {
    const connectionString = 'server=.;Database=Master;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}';
    const query = 'SELECT name FROM sys.databases';
    sql.query(connectionString, query, (err, rows) => {
      console.log(rows);
    });
  }

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
      </div>
    );
  }
}

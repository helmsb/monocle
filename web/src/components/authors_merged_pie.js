// Monocle.
// Copyright (C) 2019-2020 Monocle authors

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published
// by the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.

// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import React from 'react'

import { connect } from 'react-redux'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { withRouter } from 'react-router-dom'

import {
  LoadingBox,
  ErrorBox,
  BaseQueryComponent,
  mapDispatchToProps,
  addMap
} from './common'

import Pie from './pie'

class AuthorsMergedPie extends BaseQueryComponent {
  constructor (props) {
    super(props)
    this.state.name = 'authors_top_merged'
    this.state.graph_type = 'authors_top_merged'
  }

  render () {
    if (!this.props.authors_top_merged_loading) {
      if (this.props.authors_top_merged_error) {
        return <ErrorBox
          error={this.props.authors_top_merged_error}
        />
      }
      if (!this.props.authors_top_merged_result) {
        return <ErrorBox
          error={{ data: 'No data for AuthorsMergedPie', status: 0 }}
        />
      }
      return (
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title>Merged Changes per author</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>
                    <Pie
                      data={this.props.authors_top_merged_result}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )
    } else {
      return <LoadingBox />
    }
  }
}

const mapStateToProps = state => addMap({}, state.QueryReducer, 'authors_top_merged')

const CAuthorsMergedPie = withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthorsMergedPie))

export default CAuthorsMergedPie
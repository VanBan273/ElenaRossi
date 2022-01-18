import React, { Component, Fragment } from 'react'

import Project from './Project'
import { NavLink, Route } from 'react-router-dom'

export default class Portfolio extends Component {
    render () {
        const { projects, match } = this.props
        return (
            <Fragment>
                <h1>Mis trabajos</h1>
                { Object.keys(projects).map(id=> {
                    return (
                        <Fragment>
                            <NavLink key={id} to={`/portfolio/${id}`}>{projects[id].title}</NavLink>
                            <br/>
                        </Fragment>
                    )
                }) }
            </Fragment>
        )
    }
}

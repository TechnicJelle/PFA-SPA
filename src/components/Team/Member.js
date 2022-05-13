import React from "react";

export default class TeamMember extends React.Component {
    render() {
        return(
            <div className="column is-one-quarter">
                <div className="card">
                    <div className="card-image">
                        <figure className="is-4by3 image">
                            <img src={this.props.image} alt="" />
                        </figure>
                    </div>

                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{this.props.name}</p>
                                <p className="subtitle is-6">{this.props.title}</p>
                            </div>
                        </div>

                        <div className="content">
                            {this.props.message}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import React from 'react';
import Icon from '@mdi/react';

export default class FeatureCard extends React.Component {
    render() {
        return(
        <div className="card feature-card">
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <Icon path={this.props.icon}/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{this.props.title}</p>
                    </div>
                </div>

                <div className="content">
                    {this.props.description}
                </div>
            </div>
        </div>
        )
    }
}
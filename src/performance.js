import React from 'react';
import "./performance.css";

class Performance extends React.Component {
    render() {
        return (
            <div class="listing list event gray">
            <div class="event-left">
                <div class="event-title">{this.props.title}</div>
                <div class="event-date">{this.props.date}</div>
            </div>
            <div class="event-description">
                {this.props.description}
                <br /><br />
                <i>repertoire:</i><br />
                {this.props.repertoire}

            </div>
        </div>
        )
    }
}

export default Performance;
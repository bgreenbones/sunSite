import React from 'react';
import { load_content } from "./script.js";
import "./header.css";

class SunHeader extends React.Component {
    render() {
        return (
        <div class="header-container">
			<div class="header">
				<div>
					<div style={{
                        fontSize: '150%'}}>
						<button class="link" onClick={load_content.bind(this, 'home')}>Sun Chang</button>
					</div>
					<div style={{
                                fontSize: '80%',
                                marginTop: '10px'}}>
						PIANIST & HARPSICHORDIST
					</div>
				</div>
				<table>
					<tr>
						<td>
							<button class="link" onClick={load_content.bind(this, 'listen')}>Listen</button>
						</td>
						<td>
							<button class="link" onClick={load_content.bind(this, 'about')}>About</button>
						</td>
						<td>
							<button class="link" onClick={load_content.bind(this, 'performances')}>Performances</button>
						</td>
						<td>
                            <button class="link" onClick={load_content.bind(this, 'repertoire')}>Repertoire</button>
						</td>
					</tr>
				</table>
			</div>
        </div>
        )
    }
}

export default SunHeader;
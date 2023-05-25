import React from "react";
import { marked } from "marked";


class Preview extends React.Component {
    
    render() {
        return(
            <div>
                <h3>Previewer</h3>
                <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.props.markdown)}}></div>
            </div>
        )
    }
}

export default Preview;
import React from "react";
import Preview from "./Preview";


const markdownDefault = `# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

### Lists

- list one
- list two
- list three

### Links

[FreeCodeCamp](https://www.freecodecamp.org)

[Google](https://www.google.com "World's Most Popular Search Enginee")

### Images

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

### Nice Work`;
class Textarea extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            markdown : markdownDefault 
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({markdown : e.target.value});
    }
    render(){
        return (
            <div>
                <div className="edit-prev">
                    <div>
                    <h3>Enter Markdown</h3>
                    <textarea id="editor" onChange={this.handleChange} value={this.state.markdown}></textarea>
                    </div>
                    <Preview markdown={this.state.markdown}/>
                </div>
            </div>
        )
    }
}

export default Textarea;
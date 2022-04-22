import React from 'react'

export default class Example extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <>
                <p>My favorite show is {this.props.show}, and my favorite character from it is {this.props.character}.</p>
            </>
        )
        
    }
}
import React from "react";
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

class EditWidget extends React.Component {
    state = {
        property: {},
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    editBooking = (e) => {
        if (e) { e.preventDefault(); }
        const { property } = this.state;
        fetch(`/api/properties/${this.props.property_id}`, safeCredentials({
            method: 'PUT',
            body: JSON.stringify({
                property: {
                    // fill er in
                }
            })
        }))
            .then(handleErrors)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render () {
        const { property } = this.state;

        return (
             <React.Fragment>
                 <form onSubmit={this.editBooking}>
                    <h2>fill er in!</h2>
                </form>
                <hr />
                <p className="mb-0">Want to <a className="text-primary" onClick={this.props.toggle}>add</a> a property instead?</p>
             </React.Fragment>
        )
    }
}

export default EditWidget;
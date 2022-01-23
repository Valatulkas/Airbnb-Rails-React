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
            <div className="border p-4 mb-3">
                <form onSubmit={this.editBooking}>
                    <h2>fill er in!</h2>
                </form>
            </div>
        )
    }
}

export default EditWidget;
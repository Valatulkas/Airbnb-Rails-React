import React from "react";
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

class AddWidget extends React.Component {
    state = {
        property: {},
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    addBooking = (e) => {
        if (e) { e.preventDefualt(); }
        const { property } = this.state;
        fetch(`/api/properties/${this.props.property_id}`, safeCredentials({
            method: 'POST',
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
                <form onSubmit={this.addBooking}>
                    <h2>fill er in!</h2>
                </form>
            </div>
        )
    }
}

export default AddWidget;
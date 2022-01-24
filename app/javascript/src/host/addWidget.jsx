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
        fetch('/api/properties', safeCredentials({
            method: 'POST',
            body: JSON.stringify({
                property: {
                    title: this.state.title,
                    description: this.state.description,
                    city: this.state.city,
                    country: this.state.country,
                    property_type: this.state.property_type,
                    price_per_night: this.state.price_per_night,
                    max_guests: this.state.max_guests,
                    bedrooms: this.state.bedrooms,
                    beds: this.state.beds,
                    baths: this.state.baths,
                    image_url: this.state.image_url,
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
        const { id, title, description, city, country, property_type, price_per_night, max_guests, bedrooms, beds, baths, image_url, user, } = property;

        return (
            <React.Fragment>
                <h3>Hello {user}! <br />Fill in the below to share your place with the world!</h3>
                 <form onSubmit={this.addBooking}>
                    <input name='title' className="form-control form-control-lg mb-3" type='text' placeholder="Property Title" value={title} onChange={this.handleChange} required />
                    <input name='description' className="form-control form-control-lg mb-3" type='text' placeholder="Description" value={description} onChange={this.handleChange} required />
                    <input name='city' className="form-control form-control-lg mb-3" type='text' placeholder="City" value={city} onChange={this.handleChange} required />
                    <input name='country' className="form-control form-control-lg mb-3" type='text' placeholder="Country" value={country} onChange={this.handleChange} required />
                    <input name='property_type' className="form-control form-control-lg mb-3" type='text' placeholder="Property Type" value={property_type} onChange={this.handleChange} required />
                    <input name='price_per_night' className="form-control form-control-lg mb-3" type='number' placeholder="Price per night" value={price_per_night} onChange={this.handleChange} required />
                    <input name='max_guests' className="form-control form-control-lg mb-3" type='number' placeholder="Max # of guests" value={max_guests} onChange={this.handleChange} required />
                    <input name='bedrooms' className="form-control form-control-lg mb-3" type='number' placeholder="Bedrooms" value={bedrooms} onChange={this.handleChange} required />
                    <input name='beds' className="form-control form-control-lg mb-3" type='number' placeholder="Beds" value={beds} onChange={this.handleChange} required />
                    <input name='baths' className="form-control form-control-lg mb-3" type='number' placeholder="Baths" value={baths} onChange={this.handleChange} required />
                    <input name='image_url' className="form-control form-control-lg mb-3" type='text' placeholder="Image URL" value={image_url} onChange={this.handleChange} required />
                    <h2>fill er in!</h2>
                </form>
                <p className="mb-0">Want to <a className="text-primary" onClick={this.props.toggle}>edit</a> a property instead?</p>
            </React.Fragment>
        )
    }
}

export default AddWidget;
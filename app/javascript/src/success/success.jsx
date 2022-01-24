import React from "react";
import Layout from "../layout";
import './success.scss';

class Success extends React.Component {
    state = {
        property: {},
        loading: true,
        user: '',
    }

    componentDidMount() {
        fetch(`/api/properties/${this.props.property_id}`)
            .then(handleErrors)
            .then(data=> {
                this.setState({
                    property: data.property,
                    loading: false,
                })
            })
    }

    render () {
        const { property, loading, user } = this.state;

        if (loading) {
            return <p>Loading ...</p>
        }
        const { id, title, description, city, country, property_type, price_per_night, max_guests, bedrooms, beds, baths, image_url, user, } = property;

        return (
            <Layout>
                <div className="property-image mb-3" style={{ backgroundImage: `url(${image_url})` }} />
                <div className="container">
                    <div className="row">
                        <div className="info col-12 col-lg-7">
                            <div className="mb-3">
                                <h3 className="mb-0">{title}</h3>
                                <p className="text-uppercase mb-0 text-secondary"><small>{city}</small></p>
                                <p className="mb-0"><small>Hosted by <b>{user.username}</b></small></p>
                            </div>
                            <div>
                                <p className="mb-0 text-capitalize"><b>{property_type}</b></p>
                                <p>
                                <span className="mr-3">{max_guests} guests</span>
                                <span className="mr-3">{bedrooms} bedroom</span>
                                <span className="mr-3">{beds} bed</span>
                                <span className="mr-3">{baths} bath</span>
                                </p>
                            </div>
                            <hr />
                            <p>{description}</p>
                        </div>
                        <div className='col-12 col-lg-5'>
                            <div className="border">
                                <h3>Congratulations {user}! You're stay at {title} is confirmed!</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Success;
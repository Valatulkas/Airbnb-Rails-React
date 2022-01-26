import React from "react";
import Layout from "../layout";
import { handleErrors, safeCredentials } from '@utils/fetchHelper';
import './patron.scss';

class Patron extends React.Component {
    state = {
        bookings: [],
        authenticated: false,
        loading: true,
    }

    componentDidMount() {
        fetch('/api/authenticated')
        .then(handleErrors)
        .then(data => {
            this.setState({
            authenticated: data.authenticated,
            })
        })
        this.fetchProperties();
    }

    fetchProperties = () => {
        fetch(`api/bookings/${this.props.username}`)
            .then(handleErrors)
            .then(data => {
                console.log(data)
                this.setState({
                    properties: data.properties,
                    loading: false,
                })
            })
    }

    // build out indexing of booking per user

    render () {
        const { authenticated, loading, bookings } = this.state;

        if (!authenticated) {
            return (
                <Layout>
                    <div className="container">
                        <div className="row">
                            <div className="info col-12 col-md-9 col-lg-6 mx-auto my-4">
                                <div className="border p-4 mb-4">
                                    Please <a href={`/login?redirect_url=${window.location.pathname}`}>log in</a> to manage bookings.
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            )
        }

        if (loading) {
            return <p>Loading ...</p>
        }

        return (
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9 col-lg-6 mx-auto my-4">
                            {bookings.map(booking => {
                                return (
                                    <div key={booking.id} className="booking">
                                        <div>{booking.start_date}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Patron;
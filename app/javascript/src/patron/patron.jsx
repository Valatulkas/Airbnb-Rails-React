import React from "react";
import reactDom from "react-dom";
import Layout from "../layout";
import { handleErrors, safeCredentials } from '@utils/fetchHelper';

class Patron extends React.Component {
    state = {
        authenticated: false,
    }

    componentDidMount() {
        fetch('/api/authenticated')
        .then(handleErrors)
        .then(data => {
            this.setState({
            authenticated: data.authenticated,
            })
        })
    }

    // build out indexing of booking per user

    render () {
        const { authenticated } = this.state;

        if (!authenticated) {
            return (
                <Layout>
                    <div className="container">
                        <div className="row">
                            <div className="info col-12">
                                <div className="border p-4 mb-4">
                                    Please <a href={`/login?redirect_url=${window.location.pathname}`}>log in</a> to manage bookings.
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            )
        }
        return (
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="info col-12">
                            <div className="border p-4 mb-4">
                                Please <a href={`/login?redirect_url=${window.location.pathname}`}>log in</a> to start.

                            
                            </div>
                            
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Patron;
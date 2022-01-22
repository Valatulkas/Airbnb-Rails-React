import React from "react";
import reactDom from "react-dom";
import Layout from "../layout";
import { handleErrors, safeCredentials } from '@utils/fetchHelper';

class Host extends React.Component {
    state = {
        authenticated: false,
        newProperty: {},
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
    }

    submitProperty = (e) => {
        if (e) {e.preventDefault(); }
        const { newProperty } = this.state;

        fetch(`api/properties`, safeCredentials({
            method: 'POST',
            body: JSON.stringify({
                property : {
                    // fill criteria in
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
        const { authenticated } = this.state;

        if (!authenticated) {
            return (
                <Layout>
                    <div className="container">
                        <div className="row">
                            <div className="info col-12">
                                <div className="border p-4 mb-4">
                                    Please <a href={`/login?redirect_url=${window.location.pathname}`}>log in</a> to start hosting.
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            )
        }

        // model edit and add widgets off login and signup widgets from login.jsx
        
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

export default Host;
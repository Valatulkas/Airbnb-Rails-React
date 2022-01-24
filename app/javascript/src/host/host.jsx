import React from "react";
import Layout from "../layout";
import EditWidget from "./editWidget";
import AddWidget from "./addWidget";
import { handleErrors, safeCredentials } from '@utils/fetchHelper';
import './host.scss'

class Host extends React.Component {
    state = {
        authenticated: false,
        show_add: true,
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

    toggle = () => {
        this.setState({
            show_add: !this.state.show_add,
        })
    }

    render () {
        const { authenticated, show_add } = this.state;

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
                                {show_add ? <AddWidget toggle={this.toggle} /> : <EditWidget toggle={this.toggle} />}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Host;
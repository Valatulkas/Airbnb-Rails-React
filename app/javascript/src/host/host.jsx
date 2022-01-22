import React from "react";
import reactDom from "react-dom";
import Layout from "../layout";
import { handleErrors } from '@utils/fetchHelper';

class Host extends React.Component {
    state = {
        authenticated: false,
        property: {},
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

    render () {

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
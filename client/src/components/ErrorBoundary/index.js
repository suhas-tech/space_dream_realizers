import React from "react";

import ErrorView from "./Error";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError() {
        return {error: true};
    }

    componentDidCatch(error, info) {
        // TODO Report this to GA
        this.setState({
            error,
            errorInfo: info,
        });
    }

    render() {
        const {children} = this.props;
        const {error, errorInfo} = this.state;
        if (error) {
            return <ErrorView error={error} info={errorInfo} />;
        }
        return children;
    }
}

export default ErrorBoundary;

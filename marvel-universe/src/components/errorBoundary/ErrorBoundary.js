import { Component } from "react/cjs/react.production.min";
import ErrorMassage from "../errorMessage/ErrorMessage";

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        this.state({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMassage/>
        }

        return this.props.children;
    }

 
}

export default ErrorBoundary;
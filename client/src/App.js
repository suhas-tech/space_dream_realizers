import React from "react";
import { Router } from "react-router-dom";
import Routes from "./router";
import history from "./history";
import { ThemeProvider } from "styled-components";
import theme from "@theme/theme";
import { Provider } from "react-redux";
import { store } from "./store";
import ErrorBoundary from "@components/ErrorBoundary";
import { GlobalStyle } from "@theme/globalStyles";

const App = () => {
    return (
        <ErrorBoundary>
            <Provider store={store}>
                <Router history={history}>
                    <ThemeProvider theme={theme}>
                        <GlobalStyle />
                        <Routes />
                    </ThemeProvider>
                </Router>
            </Provider>
        </ErrorBoundary>
    );
};

export default App;

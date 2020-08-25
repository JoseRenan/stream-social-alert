import React from "react";
import { Router } from "@reach/router"
import Admin from "./pages/Admin";
import CallToActionOverlay from "./pages/CallToActionOverlay";

const App = () => (
    <Router>
        <Admin path="/" />
        <CallToActionOverlay path="/overlay" />
    </Router>
);

export default App;

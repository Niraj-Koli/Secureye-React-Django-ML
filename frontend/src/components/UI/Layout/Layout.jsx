import { Helmet } from "react-helmet";

import Navbar from "components/UI/Navbar/Navbar";

function Layout(props) {
    return (
        <>
            <Helmet>
                <title>{props.title}</title>
                <meta
                    name="keywords"
                    content="Secureye, Military, Detection, Camera"
                />
            </Helmet>

            <Navbar />
            <div>{props.children}</div>
        </>
    );
}

export default Layout;

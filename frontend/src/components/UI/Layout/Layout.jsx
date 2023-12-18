import { useEffect } from "react";

import { Helmet } from "react-helmet";

import { useDispatch } from "react-redux";

import { checkAuthenticated, loadUser } from "features/authActions";

function Layout(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAuthenticated());
        dispatch(loadUser());
    }, [dispatch]);

    return (
        <>
            <Helmet>
                <title>{props.title}</title>
                <meta
                    name="keywords"
                    content="Secureye, Military, Detection, Camera"
                />
            </Helmet>

            <div>{props.children}</div>
        </>
    );
}

export default Layout;

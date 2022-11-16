import * as React from "react";
import Button from '@mui/material/Button';
import BackgroundImage from "../components/BackgroundImage";
import CenterImage from "../components/CenterImage";


class UserHomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            username: "",
            password: "",
            error: false
        }
    }


    render () {
        return (
            <React.Fragment>
                <BackgroundImage/>
                <CenterImage/>
                <div>
                    <h1>User Home Page</h1>
                </div>
            </React.Fragment>
        )
    }
}

export default UserHomePage;
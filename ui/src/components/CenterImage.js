import * as React from "react";
import Box from "@mui/material/Box";


export default function CenterImage () {
    return (
        <Box
            component="img"
            display="flex"
            justifyContent="center"
            sx={{
                height: 400,
                width: 400,
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 10,
                marginBottom: 5
            }}

            src="https://play-lh.googleusercontent.com/UrY7BAZ-XfXGpfkeWg0zCCeo-7ras4DCoRalC_WXXWTK9q5b0Iw7B0YQMsVxZaNB7DM"
        />
    )
}
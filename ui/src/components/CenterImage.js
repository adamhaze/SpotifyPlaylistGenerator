import * as React from "react";
import Box from "@mui/material/Box";


export default function CenterImage () {
    return (
        <Box
            component="img"
            display="flex"
            justifyContent="center"
            sx={{
                height: 300,
                width: 300,
                marginLeft: "auto",
                marginRight: "auto"
            }}

            src="https://play-lh.googleusercontent.com/UrY7BAZ-XfXGpfkeWg0zCCeo-7ras4DCoRalC_WXXWTK9q5b0Iw7B0YQMsVxZaNB7DM"
        />
    )
}
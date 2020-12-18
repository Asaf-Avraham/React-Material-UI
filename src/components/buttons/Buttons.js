import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function ContainedButtons() {
    const classes = useStyles();
    const [state, setState] = React.useState("");

    const handleChange = (e) => {

        setState(e.target.value);

    };
    console.log("button was clicked");
    return (
        <div className={classes.root}>
            <Button onClick={handleChange} variant="contained" color="primary">Share invoice</Button>
            <Button variant="contained">Primary</Button>

        </div>
    );
}

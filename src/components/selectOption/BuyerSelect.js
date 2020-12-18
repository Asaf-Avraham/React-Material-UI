import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';




const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function App() {
    const classes = useStyles();
    const [state, setState] = React.useState("");

    const handleChange = (e) => {

        setState(e.target.value);

    };
    console.log(`buyer ${state} was selected`);



    return (
        <div className="App">
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Buyer</InputLabel>
                <Select state={state.value} onChange={handleChange}
                    native

                >
                    <option aria-label="None" value="" />
                    <option value={"1"}>Buyer1</option>
                    <option value={"2"}>Buyer2</option>
                    <option value={"3"}>Buyer3</option>
                </Select>
            </FormControl>


        </div>
    );
}

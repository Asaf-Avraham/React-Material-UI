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

export default function NativeSelects() {
    const classes = useStyles();
    const [state, setState] = React.useState("");

    const handleChange = (e) => {

        setState(e.target.value);

    };
    console.log(`you selected ${state}`);



    return (
        <div className="center">
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Vendor</InputLabel>
                <Select state={state.value} onChange={handleChange}
                    native



                >
                    <option aria-label="None" value="" />
                    <option value={"MacBook"}>MacBook</option>
                    <option value={"HpOmen"}>HpOmen</option>
                    <option value={"Levevo"}>Levevo</option>
                </Select>
            </FormControl>


        </div>
    );
}


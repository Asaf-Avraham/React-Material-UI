import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';






export default function FormControlLabelPlacement() {
    const [state, setState] = React.useState("");

    const handleChange = (e) => {

        setState(e.target.value);

    };
    console.log(`buyer selected ${state} `);

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Payment Option</FormLabel>
            <RadioGroup className="color" row aria-label="position" name="position" defaultValue="top">

                <FormControlLabel state={state.value} onChange={handleChange} value="Due date" control={<Radio color="primary" />} label="Due date" />

                <FormControlLabel state={state.value} onChange={handleChange} value="Milestones" control={<Radio color="primary" />} label="Milestones" />

                <FormControlLabel state={state.value} onChange={handleChange} value="installments" control={<Radio color="primary" />} label="installments" />
            </RadioGroup>
        </FormControl>
    );
}

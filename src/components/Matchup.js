import * as React from 'react';
import { MenuItem, Select } from "@mui/material" 
import './Matchup.css';

function Matchup(props) {
    var [winner, setWinner] = React.useState('');

    const pickWinner = (event) => {
        setWinner(event.target.value)
        props.updateBracket(props.id1, event.target.value)
    }
    return (
        <div>
            <Select id={props.id1} className="matchup" disabled={props.val1 === undefined || props.val2 === undefined}  value={winner} onChange={pickWinner} style={{backgroundColor: props.round == 1 ? 'aquamarine' : props.round == 2 ? 'goldenrod' : props.round == 3 ? 'greenyellow' : props.round == 4 ? 'lightcoral' : props.round == 5 ? 'thistle' : 'gold'}}>
                <MenuItem value={props.val1} key={props.val1}>{props.val1}</MenuItem>
                <MenuItem value={props.val2} key={props.val2}>{props.val2}</MenuItem>
            </Select>
        </div>
    )
}

export default Matchup;
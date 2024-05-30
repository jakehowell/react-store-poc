import './CollapsibleRow.css';
import {Box, TableCell, TableRow, IconButton, Collapse} from '@mui/material';
import React, {useState } from 'react';
import { ReactComponent as UpArrow } from '../../assets/up-arrow.svg';
import { ReactComponent as DownArrow } from '../../assets/down-arrow.svg';

function CollapsibleRow(props) {
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'none' }}} key={props.uniqueKey}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <UpArrow /> : <DownArrow />}
                    </IconButton>
                </TableCell>
                {props.cells}
            </TableRow>
            <TableRow className='collapsed-row' key={props.uniqueKey + 'a'}>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={props.cells.length + 1}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            {props.collapsedContent}
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default CollapsibleRow;

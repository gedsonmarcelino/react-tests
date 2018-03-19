import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import ActionBar from './ActionBar/ActionBar';
import Check from '../../../ui/Check/Check';
import Paper from 'material-ui/Paper';

import classes from './List.css';

let id = 0;
function createData( title, sun, mon, tue, wed, thu, fri, sat ) {
    id += 1;
    return { id, title, sun, mon, tue, wed, thu, fri, sat };
}

const data = [
    createData('Ride Bike', true, false, false, true, false, true, false),
    createData('Read Book', false, true, true, true, false, true, false),
    createData('Developer', false, true, true, true, true, true, false),
];

const List = (props) => {
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Habits</TableCell>
                        <TableCell>Sun</TableCell>
                        <TableCell>Mon</TableCell>
                        <TableCell>Tue</TableCell>
                        <TableCell>Wed</TableCell>
                        <TableCell>Thu</TableCell>
                        <TableCell>Fri</TableCell>
                        <TableCell>Sat</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(n => {
                        return (
                            <TableRow key={n.id}>
                                <TableCell>{n.title}</TableCell>
                                <TableCell>
                                    <Check value={n.sun} />
                                </TableCell>
                                <TableCell>
                                    <Check value={n.mon} />
                                </TableCell>
                                <TableCell>
                                    <Check value={n.tue} />
                                </TableCell>
                                <TableCell>
                                    <Check value={n.wed} />
                                </TableCell>
                                <TableCell>
                                    <Check value={n.thu} />
                                </TableCell>
                                <TableCell>
                                    <Check value={n.fri} />
                                </TableCell>
                                <TableCell>
                                    <Check value={n.sat} />
                                </TableCell>
                            </TableRow>
                        );
                    })}

                    <ActionBar />

                </TableBody>
            </Table>
        </Paper>
    )
}

export default List;
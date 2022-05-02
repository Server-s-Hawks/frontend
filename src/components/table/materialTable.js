import { Grid } from "@mui/material";
import MaterialTable from "material-table";
import tableIcons from "./materialTableIcons";

export const MyTable = ({ title, columns, data, handleRowAdd, handleRowUpdate, handleRowDelete }) => {
    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={1}></Grid>
                <Grid item xs={12}>
                    <MaterialTable
                        title={title}
                        columns={columns}
                        data={data}
                        icons={tableIcons}
                        options={{
                            sorting: true,
                            actionsColumnIndex: -1
                        }}
                        editable={{
                            onRowUpdate: (newData, oldData) =>
                                new Promise((resolve) => {
                                    handleRowUpdate(newData, oldData, resolve);
                                }),
                            onRowAdd: (newData) =>
                                new Promise((resolve) => {
                                    handleRowAdd(newData, resolve)
                                }),
                            onRowDelete: (oldData) =>
                                new Promise((resolve) => {
                                    handleRowDelete(oldData, resolve)
                                }),
                        }}
                    />
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </div>
    );
};
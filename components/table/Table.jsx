import styles from '../../styles/table.module.css';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React from 'react'
import Image from 'next/image'


const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Chest",
      
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Arms",
      
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Legs",
      
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Upper chest",
      
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ABS",
      
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className={styles.table}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={styles.tableCell}>Tracking ID</TableCell>
            <TableCell className={styles.tableCell}>Product</TableCell>
            <TableCell className={styles.tableCell}>Customer</TableCell>
            <TableCell className={styles.tableCell}>Date</TableCell>
            <TableCell className={styles.tableCell}>Amount</TableCell>
            <TableCell className={styles.tableCell}>Payment Method</TableCell>
            <TableCell className={styles.tableCell}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
             <TableCell className={styles.tableCell}>{row.id}</TableCell>
             <TableCell className={styles.tableCell}>
                <div className={styles.cellWrapper}>
                
                  {row.product}
                </div>
              </TableCell>
              <TableCell className={styles.tableCell}>{row.customer}</TableCell>
              <TableCell className={styles.tableCell}>{row.date}</TableCell>
              <TableCell className={styles.tableCell}>{row.amount}</TableCell>
              <TableCell className={styles.tableCell}>{row.method}</TableCell>
              <TableCell className={styles.tableCell}>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;

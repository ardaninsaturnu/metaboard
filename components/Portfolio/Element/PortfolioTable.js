import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useRouter} from "next/router";

const columns = [
  { id: 'token', label: 'Token', minWidth: 160 },
  {
    id: 'portfolio',
    label: 'Portfolio',
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'price',
    label: 'Price',
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'balance',
    label: 'Balance',
    align: 'left',
    format: (value) => value.toFixed(2),
  },
];

const rows = [
  {
    token: 'MANA',
    description: 'Something will be good',
    portfolio: '76.12',
    price: '0.59',
    balance: '68.02'
  },
  {
    token: 'ETHERIUM',
    description: 'Etherium',
    portfolio: '76.12',
    price: '1.682,02',
    balance: '68.02'
  }
];

export default function PortfolioTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const router = useRouter();
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  return (
    <>
    <div>
      <p className="text-start font-medium text-lg my-3">Assets <MoreVertIcon/></p>
    </div>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell>
                      <div className="flex items-center gap-5" onClick={ () => router.push('/')}>
                        <div className="h-[24px] w-[24px] bg-gray-900 rounded-3xl"></div>
                        <div>
                          <div>{row.token}</div>
                          <div>{row.description}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {row.portfolio}
                    </TableCell>
                    <TableCell>
                      {row.price}
                      <p>+ {row.portfolio}</p>
                    </TableCell>
                    <TableCell>
                      {row.balance}
                      <p>+ 45 {row.token}</p>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
}

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  RiDeleteBin7Line,
  RiPencilLine,
  RiPlayListAddLine,
} from '@remixicon/react';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableFoot,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';

// This example requires @tanstack/react-table

// This example requires @tailwind/forms

// // tailwind.config.js
// module.exports = {
//   // ...
//   plugins: [
//     // ...
//     require('@tailwindcss/forms'),
//   ],
// }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function IndeterminateCheckbox({ indeterminate, className, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <input
      type="checkbox"
      ref={ref}
      className={classNames(
        'size-4 rounded border-tremor-border text-tremor-brand shadow-tremor-input focus:ring-tremor-brand-muted dark:border-dark-tremor-border dark:bg-dark-tremor-background dark:text-dark-tremor-brand dark:shadow-dark-tremor-input dark:focus:ring-dark-tremor-brand-muted',
        className,
      )}
      {...rest}
    />
  );
}

const users: {
  id: string;
  name: string;
  email: string;
  online: boolean;
  github: string;
  role: string;
  lastEdited: string;
}[] = [
  {
    id: '1',
    name: 'Jane Cooper',
    email: 'jane.cooper@example.com',
    online: true,
    github: 'https://github.com/jane-cooper',
    role: 'Admin',
    lastEdited: '23/09/2023 13:00',
  },
  {
    id: '2',
    name: 'John Doe',
    email: 'john.doe@example.com',
    online: true,
    github: 'https://github.com/john-doe',
    role: 'User',
    lastEdited: '23/09/2023 13:00',
  },
  {
    id: '3',
    name: 'Alice Smith',
    email: 'alice.smith@example.com',
    online: false,
    github: 'https://github.com/alice-smith',
    role: 'User',
    lastEdited: '23/09/2023 13:00',
  },
];

export function ListOfUsers() {
  const [rowSelection, setRowSelection] = useState({});

  useEffect(() => {
    // Pre-select the 2nd row for demo purpose
    setRowSelection({ 2: true });
  }, []);

  const usersColumns = useMemo(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
            className="-translate-y-[1px]"
          />
        ),
        cell: ({ row }) => (
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
            className="-translate-y-[1px]"
          />
        ),
        enableSorting: false,
        meta: {
          align: 'text-left',
        },
      },
      {
        header: 'ID',
        accessorKey: 'id',
        enableSorting: true,
        meta: {
          align: 'text-left',
        },
      },
      {
        header: 'Name',
        accessorKey: 'name',
        enableSorting: true,
        meta: {
          align: 'text-left',
        },
      },
       {
        header: 'Email',
        accessorKey: 'email',
        enableSorting: false,
        meta: {
          align: 'text-left',
        },
      },
      {
        header: 'Online',
        accessorKey: 'online',
        enableSorting: false,
        meta: {
          align: 'text-left',
        },
      },
      {
        header: 'GitHub',
        accessorKey: 'github',
        enableSorting: false,
        meta: {
          align: 'text-left',
        },
      },
      {
        header: 'Role',
        accessorKey: 'role',
        enableSorting: false,
        meta: {
          align: 'text-right',
        },
      },
      {
        header: 'Last edited',
        accessorKey: 'lastEdited',
        enableSorting: false,
        meta: {
          align: 'text-right',
        },
        cell: ({ getValue }) => (
          <div className="relative">
            <span>{getValue()}</span>
            <div className="absolute right-0 top-1/2 hidden h-full -translate-y-1/2 items-center bg-tremor-background-muted group-hover:flex dark:bg-dark-tremor-background-muted">
              <div className="inline-flex items-center rounded-tremor-small shadow-tremor-input dark:shadow-dark-tremor-input">
                <button
                  type="button"
                  className="relative inline-flex items-center rounded-l-tremor-small bg-tremor-background px-4 py-2 text-tremor-content-emphasis ring-1 ring-inset ring-tremor-ring hover:text-tremor-content-strong focus:z-10 dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-emphasis dark:ring-tremor-content-emphasis hover:dark:text-dark-tremor-content-strong"
                  onClick={
                    // add stopPropagation to avoid row selection when clicking button
                    (e) => {
                      e.stopPropagation();
                    }
                  }
                >
                  <RiPencilLine
                    className="size-4"
                    aria-hidden={true}
                    aria-label="Edit"
                  />
                </button>
                <button
                  type="button"
                  className="relative -ml-px inline-flex items-center bg-tremor-background px-4 py-2 text-tremor-content-emphasis ring-1 ring-inset ring-tremor-ring hover:text-tremor-content-strong focus:z-10 dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-emphasis dark:ring-tremor-content-emphasis hover:dark:text-dark-tremor-content-strong"
                  onClick={
                    // add stopPropagation to avoid row selection when clicking button
                    (e) => {
                      e.stopPropagation();
                    }
                  }
                >
                  <RiPlayListAddLine
                    className="size-4"
                    aria-hidden={true}
                    aria-label="Add"
                  />
                </button>
                <button
                  type="button"
                  className="relative -ml-px inline-flex items-center rounded-r-tremor-small bg-tremor-background px-4 py-2 text-tremor-content-emphasis ring-1 ring-inset ring-tremor-ring hover:text-tremor-content-strong focus:z-10 dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-emphasis dark:ring-tremor-content-emphasis hover:dark:text-dark-tremor-content-strong"
                  onClick={
                    // add stopPropagation to avoid row selection when clicking button
                    (e) => {
                      e.stopPropagation();
                    }
                  }
                >
                  <RiDeleteBin7Line
                    className="size-4"
                    aria-hidden={true}
                    aria-label="Delete"
                  />
                </button>
              </div>
            </div>
          </div>
        ),
      },
    ],
    [],
  );

  const table = useReactTable({
    data: users,
    columns: usersColumns,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      rowSelection,
    },
  });

  return (
    <>
      <Table>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className="border-b border-tremor-border dark:border-dark-tremor-border"
            >
              {headerGroup.headers.map((header) => (
                <TableHeaderCell
                  key={header.id}
                  className={classNames(header.column.columnDef.meta.align)}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </TableHeaderCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              onClick={() => row.toggleSelected(!row.getIsSelected())}
              className="group select-none hover:bg-tremor-background-muted hover:dark:bg-dark-tremor-background-muted"
            >
              {row.getVisibleCells().map((cell, index) => (
                <TableCell
                  key={cell.id}
                  className={classNames(
                    row.getIsSelected()
                      ? 'bg-tremor-background-muted dark:bg-dark-tremor-background-muted'
                      : '',
                    cell.column.columnDef.meta.align,
                    'relative',
                  )}
                >
                  {index === 0 && row.getIsSelected() && (
                    <div className="absolute inset-y-0 left-0 w-0.5 bg-tremor-brand dark:bg-dark-tremor-brand" />
                  )}
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFoot>
          <TableRow>
            <TableHeaderCell colSpan={1}>
              <IndeterminateCheckbox
                {...{
                  checked: table.getIsAllPageRowsSelected(),
                  indeterminate: table.getIsSomePageRowsSelected(),
                  onChange: table.getToggleAllPageRowsSelectedHandler(),
                }}
                className="-translate-y-[1px]"
              />
            </TableHeaderCell>
            <TableHeaderCell colSpan={7} className="font-normal tabular-nums">
              {Object.keys(rowSelection).length} of{' '}
              {table.getRowModel().rows.length} Page Row(s) selected
            </TableHeaderCell>
          </TableRow>
        </TableFoot>
      </Table>
    </>
  );
}
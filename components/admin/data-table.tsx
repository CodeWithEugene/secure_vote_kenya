"use client"

import type React from "react"

interface Column {
  header: string
  accessor: string
  cell?: (value: any) => React.ReactNode
}

interface DataTableProps {
  data: any[]
  columns: Column[]
}

export function DataTable({ data, columns }: DataTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-900">
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900">
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-4 py-2 text-sm">
                  {column.cell ? column.cell(row[column.accessor]) : row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


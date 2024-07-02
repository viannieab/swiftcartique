"use client"
import { Checkbox } from "@/components/ui/checkbox"
import DateColumn from "@/components/DataTableColumns/DateColumn"
import ActionColumn from "@/components/DataTableColumns/ActionColumn"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "fname",
    header: ({column})=>{
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          First Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  },
  {
    accessorKey: "lname",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Contact",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "orderNumber",
    header: "Order Number",
  },
  {
    accessorKey: "orderStatus",
    header: "Status",
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({row}) => (<DateColumn row={row} accessorKey="createdAt"/>)
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const farmer = row.original
      return (<ActionColumn row={row} 
        // editEndpoint={`orders/update/${order.id}`}
        // endpoint={`orders/${order.id}`} 
        title="Order"
      />)
    }
  },
] 

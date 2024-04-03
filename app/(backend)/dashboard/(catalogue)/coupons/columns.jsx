"use client"

import Image from "next/image"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import ActionColumn from "@/components/DataTableColumns/ActionColumn"
import DateColumn from "@/components/DataTableColumns/DateColumn"
import SortableColumn from "@/components/DataTableColumns/SortableColumn"

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
    accessorKey: "title",
    header: ({ column }) => (<SortableColumn column={column} title="Title"/>),
  },
  {
    accessorKey: "couponCode",
    header: "Coupon Code",
    cell: ({row}) =>{
      const couponCode = row.getValue("couponCode")
      return(
        <div className="">
          {couponCode}
        </div>
      )
    }
  },
  {
    accessorKey: "expiryDate",
    header: "Expiry Date",
    cell: ({row}) => (<DateColumn row={row} accessorKey="expiryDate"/>)
  },
  {
    accessorKey: "isActive",
    header: "Active",
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({row}) => (<DateColumn row={row} accessorKey="createdAt"/>)
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const coupon = row.original
      return (<ActionColumn row={row} 
        editEndpoint={`coupons/update/${coupon.id}`}
        endpoint={`coupons/${coupon.id}`} 
        title="Coupon"
      />)
    }
  }
] 

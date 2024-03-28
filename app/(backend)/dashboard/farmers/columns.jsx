"use client"
import Image from "next/image"
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
    accessorKey: "title",
    header: ({column})=>{
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  },
  {
    accessorKey: "profileImageUrl",
    header: "Profile Picture",
    cell: ({ row }) => {
      const profileImageUrl = row.getValue("profileImageUrl")
      return (
        <div className="shrink-0">
          <Image src={profileImageUrl} 
            alt="profilePic" 
            width={240} 
            height={240} 
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
    )
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
  },
  {
    accessorKey: "mainCrop",
    header: "Main Crop",
  },
  // {
  //   accessorKey: "products",
  //   header: "Other Products",
  // },
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
    cell: ({ row }) => (<ActionColumn row={row} title="Farmer"/>),
  },
] 

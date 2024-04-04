"use client"
import Image from "next/image"
import { Checkbox } from "@/components/ui/checkbox"
import DateColumn from "@/components/DataTableColumns/DateColumn"
import SortableColumn from "@/components/DataTableColumns/SortableColumn"
import ActionColumn from "@/components/DataTableColumns/ActionColumn"

const truncateSentence = (sentence, maxLength) => {
  if (sentence.length <= maxLength) {
    return sentence;
  } else {
    return sentence.slice(0, maxLength) + '...';
  }
};

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
    accessorKey: "imageUrl",
    header: "Market Logo",
    cell: ({ row }) => {
      const imageUrl = row.getValue("imageUrl")
      return (
        <div className="shrink-0">
          <Image src={imageUrl} 
            alt="logo" 
            width={240} 
            height={240} 
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
    )
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({row}) =>{
      const description = row.getValue("description")
      const maxLength = 30
      const truncatedDescription = truncateSentence(description, maxLength);

      return (
        <div className="line-clamp-1">
          {truncatedDescription}
        </div>
      )
    }
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
      const market = row.original
      return (<ActionColumn row={row}
        editEndpoint={`markets/update/${market.id}`} 
        endpoint={`markets/${market.id}`} 
        title="Market"
      />)
    }
  },
] 

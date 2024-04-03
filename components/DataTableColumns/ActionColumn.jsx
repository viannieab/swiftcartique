import React from 'react'
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import DeleteBtn from '../Actions/DeleteBtn'
import EditBtn from '../Actions/EditBtn'

export default function ActionColumn({row, title, endpoint, editEndpoint}) {
  const isActive = row.isActive
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem><EditBtn title={title} editEndpoint={editEndpoint}/></DropdownMenuItem>
          <DropdownMenuItem><DeleteBtn title={title} endpoint={endpoint}/></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
}

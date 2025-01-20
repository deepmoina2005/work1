import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Checkbox } from "../ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { BsSliders } from "react-icons/bs";
import { Ellipsis, Tag } from "lucide-react";
import PropTypes from 'prop-types';

const MemoryTable = ({ 
 memories = [
  {
    title: "First Memory",
    createdby: "Admin",
    updated: "Today",
    goal: "Learn New Language",
  },
  {
    title: "Second Memory",
    createdby: "Admin",
    updated: "Today",
    goal: "Learn New Language",
  },
  {
    title: "Third Memory",
    createdby: "Admin",
    updated: "Today",
    goal: "Learn New Language",
  },
  {
    title: "Fourth Memory",
    createdby: "Admin",
    updated: "Today",
    goal: "Learn New Language",
  },
  {
    title: "Fifth Memory",
    createdby: "Admin",
    updated: "Today",
    goal: "Learn New Language",
  }
]
}) => {
  if (!memories || memories.length === 0) {
    return <p>Memory not available</p>
  }

  return (
    <div className="px-6 py-3">
      <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/3 text-left text-[#4B4B4B] font-semibold">
                      <p className="text-[14px] font-semibold">
                        Memories for this Goal
                      </p>
                  </TableHead>
                  <TableHead className="w-1/6 text-[14px] text-[#4B4B4B] text-semibold font-semibold text-center justify-between items-center">
                    Created By
                  </TableHead>
                  <TableHead className="w-1/6 text-[14px] text-[#4B4B4B] text-semibold font-semibold text-center justify-between items-center">
                    Updated
                  </TableHead>
                  <TableHead className="w-1/6  text-[14px] text-[#4B4B4B] text-semibold font-semibold text-center justify-between items-center">
                    Goal
                  </TableHead>
                  <TableHead className="w-1/12 text-[14px] text-[#4B4B4B] text-semibold font-semibold text-center justify-between items-center">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {memories.map((item, index) => (
                  <TableRow key={`${item.memory}-${index}`}>
                    <TableCell className="w-1/3  text-left justify-between items-center">
                      <div className="flex flex-row gap-2 items-center space-x-2">
                        <Tag className="rounded-full w-[18px] h-[18px]" id="terms" />
                        {item.title}
                      </div>
                    </TableCell>
                    <TableCell className="w-1/6 text-[#727272]  text-center justify-between items-center">
                      {item.createdby}
                    </TableCell>
                    <TableCell className="w-1/6 text-[#727272]  text-center justify-between items-center">
                      {item.updated}
                    </TableCell>
                    <TableCell className="w-1/6 text-[#727272]  text-center justify-between items-center">
                      {item.goal}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="w-1/6 ml-10 text-[#727272]  text-center justify-between items-center">
                          <Ellipsis className="w-[24px] h-[24px] text-black" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-40">
                          <DropdownMenuItem>Mark as Completed</DropdownMenuItem>
                          <DropdownMenuItem>Edit Task Remainder</DropdownMenuItem>
                          <DropdownMenuItem>Add Remainder</DropdownMenuItem>
                          <DropdownMenuItem>Remove Remainder</DropdownMenuItem>
                          <DropdownMenuItem>Remove To-Do</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
    </div>
  )
}
MemoryTable.propTypes = {
  memories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      createdby: PropTypes.string.isRequired,
      updated: PropTypes.string.isRequired,
      goal: PropTypes.string.isRequired,
    })
  ),
};

export default MemoryTable;
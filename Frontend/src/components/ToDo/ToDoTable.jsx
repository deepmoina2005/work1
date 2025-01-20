import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Checkbox } from "../ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { BsSliders } from "react-icons/bs";
import { Ellipsis } from "lucide-react";
import PropTypes from 'prop-types';

const ToDoTable = ({ 
  todos = [
    {
      title: "Learn New Language",
      duedate: "Today",
      memory: (
        <div className="flex items-center gap-2">
          <span>First Memory</span>
        </div>
      ),
      impact: "Low",
      goal: "Learn New Language",
    },
    {
      title: "Learn New Language",
      duedate: "Today",
      memory: (
        <div className="flex items-center gap-2">
          <span>First Memory</span>
        </div>
      ),
      impact: "Low",
      goal: "Learn New Language",
    },
    {
      title: "Learn New Language",
      duedate: "Today",
      memory: (
        <div className="flex items-center gap-2">
          <span>First Memory</span>
        </div>
      ),
      impact: "Low",
      goal: "Learn New Language",
    },
    {
      title: "Learn New Language",
      duedate: "Today",
      memory: (
        <div className="flex items-center gap-2">
          <span>First Memory</span>
        </div>
      ),
      impact: "Low",
      goal: "Learn New Language",
    },
    {
      title: "Learn New Language",
      duedate: "Today",
      memory: (
        <div className="flex items-center gap-2">
          <span>First Memory</span>
        </div>
      ),
      impact: "Low",
      goal: "Learn New Language",
    },
    {
      title: "Learn New Language",
      duedate: "Today",
      memory: (
        <div className="flex items-center gap-2">
          <span>First Memory</span>
        </div>
      ),
      impact: "Low",
      goal: "Learn New Language",
    },
  ]
}) => {
  if (!todos || todos.length === 0) {
    return <p>No todos available.</p>;
  }

  return (
    <div className="px-6 py-3">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3 text-left text-[#4B4B4B] font-semibold">
              <span className="flex flex-row gap-3 items-center">
                <p className="text-[14px] font-semibold">To-dos for this Goal</p>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center">
                      <BsSliders className="w-[22px] h-[22px] text-black" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-40">
                    <DropdownMenuItem>To-dos Completed</DropdownMenuItem>
                    <DropdownMenuItem>To-dos Pending</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </span>
            </TableHead>
            <TableHead className="w-1/6 text-center">Due Date</TableHead>
            <TableHead className="w-1/6 text-start pl-10">Memory</TableHead>
            <TableHead className="w-1/6 text-center">Impact</TableHead>
            <TableHead className="w-1/6 text-center">Goal</TableHead>
            <TableHead className="w-1/12 text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((item, index) => (
            <TableRow key={`todo-${index}`}>
              <TableCell className="w-1/3 text-left">
                <div className="flex flex-row gap-2 items-center">
                  <Checkbox className="rounded-full" id={`checkbox-${index}`} />
                  {item.title}
                </div>
              </TableCell>
              <TableCell className="w-1/6 text-[#727272] text-center">{item.duedate}</TableCell>
              <TableCell className="w-1/6 text-[#727272] text-start pl-10">{item.memory}</TableCell>
              <TableCell className="w-1/6 text-[#727272] text-center">{item.impact}</TableCell>
              <TableCell className="w-1/6 text-[#727272] text-center">{item.goal}</TableCell>
              <TableCell className="w-1/12 text-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button>
                      <Ellipsis className="w-[24px] h-[24px] text-black" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-40">
                    <DropdownMenuItem>Mark as Completed</DropdownMenuItem>
                    <DropdownMenuItem>Edit Task Reminder</DropdownMenuItem>
                    <DropdownMenuItem>Add Reminder</DropdownMenuItem>
                    <DropdownMenuItem>Remove Reminder</DropdownMenuItem>
                    <DropdownMenuItem>Remove To-Do</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
ToDoTable.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      duedate: PropTypes.string.isRequired,
      memory: PropTypes.node.isRequired,
      impact: PropTypes.string.isRequired,
      goal: PropTypes.string.isRequired,
    })
  ),
};

export default ToDoTable;
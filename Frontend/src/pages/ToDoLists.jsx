import { ArrowDownUp, Bell, Ellipsis, ListTodo } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CiStickyNote } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";

const ToDoLists = () => {
  const todos = [
    {
      id: 1,
      title: "Running",
      dueDate: "Today",
      memory: "Untitled",
      impact: "High",
      goal: "Workout To Times",
      description: "Your task description goes here.",
    },
    {
      id: 2,
      title: "Reading",
      dueDate: "Yesterday",
      memory: "Untitled",
      impact: "Low",
      goal: "Reads To Books",
      description: "Focus on flexibility and mindfulness.",
    },
  ];

  const handleNewTodo = () => {
    console.log("New To-Do clicked!");
    // Add functionality to create a new To-Do
  };

  const handleEditTask = (id) => {
    console.log(`Edit task with id: ${id}`);
    // Add functionality to edit a task
  };

  const handleMoveToArchive = (id) => {
    console.log(`Move task with id ${id} to archive.`);
    // Add functionality to archive a task
  };

  return (
    <div className="mt-4">
      <div className="flex items-center gap-2">
        <ListTodo className="text-[25.33px]" />
        <p className="text-[25.33px] font-medium text-[#393939]">To-Do Lists</p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <p className="text-gray-600">{`${todos.length} To-Do${
          todos.length > 1 ? "s" : ""
        }`}</p>
        <div className="flex items-center gap-4">
          <button
            onClick={handleNewTodo}
            className="flex items-center gap-2 text-blue-500 hover:text-blue-700 font-medium"
          >
            <ListTodo className="text-[20px]" />
            <span>New To-Do</span>
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center text-gray-500 hover:text-gray-700">
                <ArrowDownUp />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <p className="px-4 py-2 text-sm font-medium text-gray-500">SORT BY</p>
              <DropdownMenuItem>Title</DropdownMenuItem>
              <DropdownMenuItem>Due Date</DropdownMenuItem>
              <DropdownMenuItem>Created</DropdownMenuItem>
              <DropdownMenuItem>Updated</DropdownMenuItem>
              <DropdownMenuItem>Impact</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="p-4">
            <div className="flex items-center border border-slate-300 rounded-md p-2">
              <IoIosSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 bg-transparent text-black placeholder-gray-400 focus:outline-none w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Title</TableHead>
              <TableHead className="text-right">Due Date</TableHead>
              <TableHead className="text-right">Memory</TableHead>
              <TableHead className="text-right">Impact</TableHead>
              <TableHead className="text-right">Goal</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {todos.map((todo) => (
              <TableRow key={todo.id}>
                <TableCell className="font-medium">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2">
                      <Checkbox className="rounded-full" id={`todo-${todo.id}`} />
                      <label
                        htmlFor={`todo-${todo.id}`}
                        className="text-sm font-medium"
                      >
                        {todo.title}
                      </label>
                      <Bell className="w-4 h-4 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-500">{todo.description}</p>
                  </div>
                </TableCell>
                <TableCell className="text-right">{todo.dueDate}</TableCell>
                <TableCell className="text-right flex items-center justify-end gap-1">
                  <CiStickyNote className="w-4 h-4 text-gray-400" />
                  {todo.memory}
                </TableCell>
                <TableCell className="text-right">{todo.impact}</TableCell>
                <TableCell className="text-right">{todo.goal}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button>
                        <Ellipsis className="w-5 h-5 text-gray-500" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuItem onClick={() => handleNewTodo()}>
                        Add New Task
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleEditTask(todo.id)}>
                        Edit Task
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleMoveToArchive(todo.id)}
                      >
                        Move To Archive
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ToDoLists;

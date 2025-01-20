import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { BsSliders } from "react-icons/bs";
import { Ellipsis, EllipsisVertical, Tag } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const GoalsTable = () => {
  const invoices = [
    {
      title: "Learn New Language",
      duedate: "Today",
      memory: (
        <div className="flex items-center gap-2">
          <Tag className="w-[14px] h-[14px]" />
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
          <Tag className="w-[14px] h-[14px]" />
          <span>Second Memory</span>
        </div>
      ),
      impact: "High",
      goal: "Learn New Language",
    },
    {
      title: "Learn New Language",
      duedate: "Today",
      memory: "_",
      impact: "High",
      goal: "Learn New Language",
    },
    {
      title: "Learn New Language",
      duedate: "Today",
      memory: (
        <div className="flex items-center gap-2">
          <Tag className="w-[14px] h-[14px]" />
          <span>First Memory</span>
        </div>
      ),
      impact: "Low",
      goal: "Learn New Language",
    },
    {
      title: "Learn New Language",
      duedate: "Today",
      memory: "_",
      impact: "High",
      goal: "Learn New Language",
    },
  ];

  const memories = [
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

  return (
    <Tabs defaultValue="to-dos" className="w-full mr-6">
      <TabsList className="grid w-[200px] grid-cols-2">
        <TabsTrigger value="to-dos">To-dos</TabsTrigger>
        <TabsTrigger value="memories">Memories</TabsTrigger>
      </TabsList>
      <TabsContent value="to-dos">
        <Card>
          <div className="px-6 py-3">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/3 text-left text-[#4B4B4B] font-semibold">
                    <span className="flex flex-row gap-3 items-center">
                      <p className="text-[14px] font-semibold">
                        To-dos for this Goal
                      </p>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="items-center flex">
                            <BsSliders  className="w-[22px] h-[22px] text-black" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-40">
                          <DropdownMenuItem>To-dos Completed</DropdownMenuItem>
                          <DropdownMenuItem>To-dos Pending</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </span>
                  </TableHead>
                  <TableHead className="w-1/6 text-[14px] text-[#4B4B4B] text-semibold font-semibold text-center justify-between items-center">
                    Due Date
                  </TableHead>
                  <TableHead className="w-1/6 text-[14px] pl-16 text-[#4B4B4B] text-semibold font-semibold text-start justify-between items-center">
                    Memory
                  </TableHead>
                  <TableHead className="w-1/6 text-[14px] text-[#4B4B4B] text-semibold font-semibold text-center justify-between items-center">
                    Impact
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
                {invoices.map((item, index) => (
                  <TableRow key={`${item.memory}-${index}`}>
                    <TableCell className="w-1/3  text-left justify-between items-center">
                      <div className="flex flex-row gap-2 items-center space-x-2">
                        <Checkbox className="rounded-full" id="terms" />
                        {item.title}
                      </div>
                    </TableCell>
                    <TableCell className="w-1/6 text-[#727272]  text-center justify-between items-center">
                      {item.duedate}
                    </TableCell>
                    <TableCell className="w-1/6 text-[#727272]  text-start pl-10 justify-between items-center">
                      {item.memory}
                    </TableCell>
                    <TableCell className="w-1/6 text-[#727272]  text-center justify-between items-center">
                      {item.impact}
                    </TableCell>
                    <TableCell className="w-1/6 text-[#727272]  text-center justify-between items-center">
                      {item.goal}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="w-1/12 ml-2 text-center justify-between items-center">
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
        </Card>
      </TabsContent>
      <TabsContent value="memories">
      <Card>
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
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default GoalsTable;
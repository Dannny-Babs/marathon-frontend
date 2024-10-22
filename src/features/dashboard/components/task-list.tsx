"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { MoreHorizontal, Plus } from "lucide-react"

type Task = {
  id: number
  description: string
  dueDate: string
  priority: "High" | "Medium" | "Low"
  status: "Pending" | "In Progress" | "Completed"
}

const initialTasks: Task[] = [
  {
    id: 1,
    description: "Follow up with ABC Corp regarding proposal",
    dueDate: "October 22, 2024",
    priority: "High",
    status: "Pending",
  },
  {
    id: 2,
    description: "Schedule demo for DEF Ltd.",
    dueDate: "October 23, 2024",
    priority: "Medium",
    status: "In Progress",
  },
  {
    id: 3,
    description: "Prepare sales report for Q3",
    dueDate: "October 25, 2024",
    priority: "Low",
    status: "Pending",
  },
  {
    id: 4,
    description: "Update CRM with new leads",
    dueDate: "October 21, 2024",
    priority: "High",
    status: "Completed",
  },
  {
    id: 5,
    description: "Send thank-you emails to recent clients",
    dueDate: "October 24, 2024",
    priority: "Medium",
    status: "Pending",
  },
  {
    id: 6,
    description: "Review marketing campaign performance",
    dueDate: "October 26, 2024",
    priority: "Low",
    status: "Pending",
  },
]

export default function TaskSummary() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  const handleTaskCompletion = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, status: task.status === "Completed" ? "Pending" : "Completed" }
          : task
      )
    )
  }

  const getPriorityColor = (priority: Task["priority"]) => {
    switch (priority) {
      case "High":
        return "-red-600"
      case "Medium":
        return "-yellow-600"
      case "Low":
        return "-green-600"
      default:
        return "-gray-500"
    }
  }

  return (
    <Card className="w-full max-w-4xl  border rounded-xl py-0 ">
      <CardHeader className="flex flex-row  items-center justify-between">
        <CardTitle className="text-sm  text-gray-700">Task Summary</CardTitle>
    

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
              <span className="sr-only">More options</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View All Tasks</DropdownMenuItem>
            <DropdownMenuItem>
              <Plus className="mr-2 h-4 w-4" />
              Add New Task
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <h2 className="text-2xl text-text-dark font-bold">{tasks.length} tasks to do</h2>
        <p className="text-xs text-muted-foreground mt-1">
          Next task due on {tasks[0].dueDate}
        </p>
        <Table className="mt-3">
          <TableHeader>
            <TableRow>
              <TableHead className="w-4 px-2 text-xs">Status</TableHead>
              <TableHead className=" text-xs">Description</TableHead>
              <TableHead className="hidden md:table-cell text-xs">Due Date</TableHead>
              <TableHead className="hidden sm:table-cell text-xs px-2">Priority</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id} className="">
                <TableCell className="px-2">
                  <Checkbox
                    checked={task.status === "Completed"}
                    onCheckedChange={() => handleTaskCompletion(task.id)}
                  />
                </TableCell>
                <TableCell className="font-medium text-sm">
                  {task.description}
                  <div className="md:hidden text-xs text-muted-foreground">{task.dueDate}</div>
                </TableCell>
                <TableCell className="hidden md:table-cell text-xs">{task.dueDate}</TableCell>
                <TableCell className="hidden sm:table-cell sm:px-1">
                  <Badge className={`bg-opacity-20 bg${getPriorityColor(task.priority)}  text${getPriorityColor(task.priority)} text-xs font-medium`}>
                    {task.priority}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
import Spinner from "@/components/Spinner";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Pen, Trash } from "lucide-react"
import { Button } from "./ui/button"
import { ITodo } from "@/interfaces"
import { Badge } from "./ui/badge"
import { deleteTodoAction } from "@/actions/todo.actions"
import { useState } from "react"
import TodosTableActions from "./TodosTodoActions";
  
  export default function TodosTable({todos}: {todos: ITodo[]}) {

    return (
      <Table>
        <TableCaption>A list of your recent todos.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Completed</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell className="font-medium">{todo.id}</TableCell>
              <TableCell>{todo.title}</TableCell>
              <TableCell>{todo.completed ? <Badge>Completed</Badge> : <Badge variant={'secondary'}>Uncompleted</Badge>}</TableCell>
              <TableCell className="flex items-center justify-end space-x-2">
                <TodosTableActions todo={ todo }/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{!todos.length ? "YOU DON'T HAVE ANY TODO YET" : todos.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  
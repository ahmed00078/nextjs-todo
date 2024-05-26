'use client'

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
  
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]
  
  export default function TodosTable({todos}: {todos: ITodo[]}) {
    const [loading, setLoading] = useState(false);
    return (
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
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
                <Button variant="secondary" size={'icon'}><Pen size={16}/></Button>
                <Button variant="destructive" size={'icon'} onClick={async () => {
                  setLoading(true);
                  await deleteTodoAction({id: todo.id});
                  setLoading(false);
                }}>
                  {loading? <Spinner />: <Trash size={16}/>}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{invoices.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  
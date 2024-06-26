'use client';

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Pen, Trash } from "lucide-react";
import Spinner from "./Spinner";
import { deleteTodoAction } from "@/actions/todo.actions";
import EditTodoForm from "./EditTodoForm";
import { ITodo } from "@/interfaces";

const TodosTableActions = ({todo}: {todo: ITodo}) => {
    const [loading, setLoading] = useState(false);

  return (
    <>
      <EditTodoForm todo={ todo }/>
      <Button
        variant="destructive"
        size={"icon"}
        onClick={async () => {
          setLoading(true);
          await deleteTodoAction({ id: todo?.id as string});
          setLoading(false);
        }}
      >
        {loading ? <Spinner /> : <Trash size={16} />}
      </Button>
    </>
  );
};

export default TodosTableActions;

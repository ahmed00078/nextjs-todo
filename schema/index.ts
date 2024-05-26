import { z } from "zod"

export const todoFormSchema = z.object({
    title: z
      .string()
      .min(4, {
        message: "title must be at least 4 characters.",
      })
      .max(30, {
        message: "title must not be longer than 30 characters.",
      }),
    body: z
      .string()
      .max(80, {
        message: "body must not be longer than 80 characters.",
      }).optional(),
    completed: z.boolean()
  })

  export type TodoFormValues = z.infer<typeof todoFormSchema>
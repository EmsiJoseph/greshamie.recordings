"use client"

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import type { TLoginFormValues } from '@/lib/schema/authentication-schema';
import { LoginSchema } from '@/lib/schema/authentication-schema';
import { loginUserAction } from '@/lib/services/server-actions/authentication';
import { useRouter } from "next/navigation";
import { useAction } from "next-safe-action/hooks";
import { z } from "zod";
import { extractStringValues } from '@/lib/handlers/extract-string-values-in-nested-objs';
import { useState } from 'react';


export function LoginForm() {
  const [error, setError] = useState<string | undefined>("");
  const { executeAsync, isExecuting, hasSucceeded } = useAction(loginUserAction);
  const form = useForm<TLoginFormValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    const result = await executeAsync(values);
    const data = result?.data;
    const errors = data?.errors;

    if (errors) {
      const errorArray = extractStringValues(errors);
      setError(errorArray.join(", "));
      return;
    }

    router.replace("/call-logs");
    form.reset();
  }

  return (
    <div className="w-full flex items-center justify-center bg-white">
      <div className="w-full max-w-2xl bg-white p-4 md:p-12">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mt-6">
            <FormField
              disabled={!isExecuting ? undefined : isExecuting}
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='dark:text-black'>Username</FormLabel>
                  <FormControl>
                    <Input className="dark:bg-white dark:text-black" type="text" {...field} placeholder="Enter your username from Clarify.go" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={!isExecuting ? undefined : isExecuting}
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='dark:text-black'>Password</FormLabel>
                  <FormControl>
                    <Input className="dark:bg-white dark:text-black" type="password" {...field} placeholder="Enter your password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
            <Button
              type="submit"
              className="w-full bg-lime-600 dark:bg-lime-600 dark:text-white dark:hover:bg-lime-700 text-white py-3 rounded-md mt-4 text-lg font-medium hover:bg-lime-700 transition"
              disabled={isExecuting || hasSucceeded}
            >
              {isExecuting || hasSucceeded ? "Logging in" : "Log in"}
            </Button>
          </form>
        </Form>
        {/* <div className="flex justify-center text-sm mt-2">
          <a href="/forgot-password" className="text-blue-600 hover:underline">Forgot your password?</a>
        </div> */}
      </div>
    </div>
  );
}
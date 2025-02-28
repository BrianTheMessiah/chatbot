"use client";
 
import type { ReactNode } from "react";
import {
  AssistantRuntimeProvider,
  useLocalRuntime,
  type ChatModelAdapter,
} from "@assistant-ui/react";

const MyModelAdapter: ChatModelAdapter = {
  async run({ messages, abortSignal }) {
        const message = JSON.stringify(messages)
        const result = await fetch(`http://localhost:5000/call_chatbot?messages=${message}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            signal: abortSignal,
        });
    
        const data = await result.json();
        console.log(data)
        return {
        content: [
            {
            type: "text",
            text: data,
            },
        ],
        };
    },
};
 
export function MyRuntimeProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const runtime = useLocalRuntime(MyModelAdapter);
 
  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {children}
    </AssistantRuntimeProvider>
  );
}

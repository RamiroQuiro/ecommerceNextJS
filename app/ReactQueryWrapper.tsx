"use client"

import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import { type } from "os";

const useQueryClient=new QueryClient()

type Props={
    children:React.ReactNode;
};

const ReactQueryWrapper=({children}:Props)=>(
    <QueryClientProvider client={useQueryClient}>
        {children}
    </QueryClientProvider>
)

export default ReactQueryWrapper
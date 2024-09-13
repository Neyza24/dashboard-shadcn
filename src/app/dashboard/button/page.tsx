'use client';

import { Button } from "@/components/ui/button";
import { ChevronRightIcon, RocketIcon } from "@radix-ui/react-icons";
import { Loader2, Mail } from "lucide-react";

export default function Page() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">destructive</Button>
            <Button variant="ghost">ghost</Button>
            <Button variant="link">link</Button>
            <Button disabled>disabled</Button>
            <Button onClick={() => console.log('Hola mundo')}>Click me</Button>
            <Button capitalize={false}>capitalize false</Button>
            <Button variant="success">
                <RocketIcon className="mr-2 h-4 w-4" /> Success Button
            </Button>
            <Button variant="outline" size="icon">
                <ChevronRightIcon className="h-4 w-4" />
            </Button>
            <Button>
                <Mail className="mr-2 h-4 w-4" /> Login with Email
            </Button>
            <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
            </Button>
        </div>
    );
}
'use client'

import { Button } from "@/components/ui/button";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";


export default function Page() {
    const { toast } = useToast();

    return (
        <div className="grid grid-cols-3 gap-4">
            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        title: "Scheduled: Catch up ",
                        description: "Friday, February 10, 2023 at 5:57 PM",
                        action: (
                            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                        ),
                    })
                }}
            >
                Add to calendar
            </Button>

            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        variant: 'destructive',
                        description: "Your message has been sent.",
                    })
                }}
            >
                only description
            </Button>


            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        variant: 'success',
                        title: "Uh oh! Something went wrong.",
                        description: "There was a problem with your request.",
                        action: <ToastAction altText="Try again" className="hover:bg-emerald-700">Try again</ToastAction>,
                    })
                }}
            >
                Show Toast Action
            </Button>


        </div>
    );
}
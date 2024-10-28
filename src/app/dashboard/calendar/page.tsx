'use client';

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function Page() {
    const [date, setDate] = useState<Date | undefined>(new Date());

    //for multiple dates []
    const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([]);

    const smallDate = date?.toLocaleDateString('es-ES', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    });

    return (
        <div className="flex flex-wrap gap-4">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
            />
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
            />
            <Calendar
                mode="multiple"
                selected={multipleDates}
                onSelect={setMultipleDates}
                className="rounded-md border"
            />

            <div>
                <h1 className="text-3xl">Information</h1>
                <div className="border-b"></div>
                <p>{smallDate}</p>
            </div>

            <div>
                <h1 className="text-3xl">Multiple dates</h1>
                <div className="border-b"></div>
                <p>{multipleDates?.map( date => date.toLocaleDateString()).join(", ")}</p>
            </div>
        </div>
    );
}
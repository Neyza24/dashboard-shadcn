'use client';

import { useState } from "react";

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"



export default function Page() {

    const [value, setValue] = useState('');

    console.log(value);
    return (
        <div className="flex flex-col justify-center items-center">
            <InputOTP maxLength={6} value={value} onChange={setValue}>
                <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                </InputOTPGroup>
            </InputOTP>

            <h5>
                this value opt is {value}
            </h5>
        </div>
    );
}
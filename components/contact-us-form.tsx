'use client';

import { useState, useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import API_URL_V1 from "@/lib/axios-config";
import { cn } from "@/lib/utils";

export const ContactUsForm = () => {

    const [username, setUsername] = useState<string>('');
    const [useremail, setUseremail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [pending, startTransition] = useTransition();

    const maxCharacters = 1024;

    const resetForm = () => {
        setUsername('');
        setUseremail('');
        setSubject('');
        setMessage('');
    }

    const handleMessage = (value: string) => {
        if (value.length <= maxCharacters) {
            setMessage(value)
        }
    }

    const handleSubmit = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!username.trim()) {
            toast.error("Please Enter Name");
            return;
        }

        if (!useremail.trim()) {
            toast.error("Please Enter Email");
            return;
        } else if (!regex.test(useremail.trim())) {
            toast.error("Please Enter Valid Email");
            return;
        }

        if (!subject.trim()) {
            toast.error("Please Enter Subject");
            return;
        }

        if (!message.trim()) {
            toast.error("Please Enter Message");
            return;
        }

        startTransition(async () => {
            const formValues = {
                username,
                useremail,
                subject,
                message
            };

            try {
                await API_URL_V1.post('/user/contact-us', { formValues });
                toast.success("Thank you for your message. We will get back to you soon.");
            } catch (error) {
                toast.error("Something went wrong. Please try again later.");
                console.error('Error generating title:', error);
            }
        });
    }

    return (
        <div className="w-full flex flex-col items-center gap-3 pt-3">
            <div className="w-full md:w-2/3 flex flex-col gap-3">
                <div className="w-full flex flex-col md:flex-row items-center gap-4">
                    <div className="w-full flex gap-1 flex-col">
                        <Label htmlFor="username">Your Name</Label>
                        <Input
                            id="username"
                            type="text"
                            placeholder="Enter your name"
                            className="w-full"
                            autoFocus
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="w-full flex gap-1 flex-col">
                        <Label htmlFor="useremail">Your Email</Label>
                        <Input
                            id="useremail"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full"
                            value={useremail}
                            onChange={(e) => setUseremail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-full flex gap-1 flex-col">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                        id="subject"
                        type="text"
                        placeholder="Enter subject"
                        className="w-full"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
                <div className="w-full flex gap-1 flex-col">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                        id="message"
                        placeholder="Enter your message"
                        className="w-full"
                        rows={7}
                        value={message}
                        onChange={(e) => handleMessage(e.target.value)}
                    />
                </div>
                <p className={cn(
                    "text-right text-xs font-normal text-secondary-foreground dark:text-gray-400 -mt-2",
                    message.length === maxCharacters && "text-primary font-semibold dark:text-primary"
                )}>
                    {maxCharacters - message.length}&nbsp;characters remaining
                </p>

                <div className="w-full flex items-center justify-end gap-2">
                    <Button
                        variant="outline"
                        disabled={!username && !useremail && !subject && !message}
                        onClick={resetForm}
                    >
                        Reset
                    </Button>
                    <Button
                        disabled={!username || !useremail || !subject || !message}
                        onClick={handleSubmit}
                    >
                        {pending ? "Submitting..." : "Submit"}
                    </Button>
                </div>
            </div>
        </div>
    )
}
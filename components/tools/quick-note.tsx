'use client';

import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";

const QuickNote = () => {

    const [note, setNote] = useState<string>("");

    useEffect(() => {
        // get note from local storage
        const note = localStorage.getItem("tubetool-quick-note");
        if (note) {
            setNote(JSON.parse(note));
        }
    }, []);

    return (
        <div className="w-full flex flex-col space-y-1.5">
            <p className="text-base font-semibold">Quick Note</p>

            <Textarea
                placeholder="Write a quick note..."
                className="w-full"
                rows={10}
                value={note}
                onChange={(e) => {
                    setNote(e.target.value);
                    localStorage.setItem("tubetool-quick-note", JSON.stringify(e.target.value));
                }}
            />
        </div>
    )
};

export default QuickNote;
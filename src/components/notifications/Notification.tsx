import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Bell, BellSlash } from "@phosphor-icons/react";
import { useState } from "react";

export default function Notification() {

    const [notification, setNotification] = useState(false);

    return (
        <section className="w-full h-[calc(100dvh_-_4rem)]">
            <div className="w-full h-full p-6 flex flex-col gap-5 relative">
                <div className="absolute top-5 right-5 cursor-pointer hover:bg-secondary p-2 rounded-sm transition-all duration-300" onClick={() => setNotification(!notification)}>
                    {notification ? <Bell size={20} /> : <BellSlash size={20} />}
                </div>
                <div className="overflow-y-auto scrollbar-hide">
                    {Array.isArray(new Array(30).fill(0)) && new Array(30).fill(0).map((_, index) => (
                        <div key={index} className="w-[40dvw] h-[10dvh] hover:bg-secondary/50 transition-all duration-300 rounded-sm mx-auto border-b border-b-border flex items-center">
                            <div className="flex flex-row items-center gap-2 text-accent-foreground text-sm">
                                <Avatar className="rounded-sm">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="flex flex-row gap-3 items-center">
                                        <h1>Kleuber Silva</h1>
                                        <span>-</span>
                                        <span className="text-accent-foreground/50 text-xs">20s ago</span>
                                    </div>
                                    <div>
                                        <span className="text-xs text-accent-foreground/80">Curtiu sua publicação.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
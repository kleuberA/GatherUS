"use client"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import Notification from "@/components/notifications/Notification";
import { SignOut } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import ItensSideMenu from "./ItensSideMenu";
import { useState } from "react";
import Link from "next/link";
import SettingsComponent from "@/components/settings/SettingsComponent";
import HomeComponent from "@/components/home/HomeComponent";
import Messages from "@/components/messages/Messages";
import MessagesComponent from "@/components/messages/Messages";
import ExploreComponent from "@/components/explore/ExploreComponent";
import ProfileComponent from "@/components/profile/Profile";
import SearchComponent from "@/components/search/Search";

export default function SideMenu() {

    const [size, setSize] = useState<number>();
    const itensSideMenu = ItensSideMenu;
    const pathname = usePathname();

    return (
        <div className="h-screen overflow-hidden w-full">
            <ResizablePanelGroup
                direction="horizontal"
                className="h-screen max-w-full rounded-lg border"
            >
                <ResizablePanel defaultSize={17} minSize={5} maxSize={17} onResize={(size) => setSize(size)}>
                    <div className="h-full w-full p-5 flex-col gap-5">
                        <div className="flex flex-col gap-5 h-[80dvh]">
                            {itensSideMenu.map((item, index) => (
                                size && size > 9 ? (
                                    <Link href={item.path} key={index} className={`p-2 ${pathname === item.path ? "bg-primary text-accent hover:bg-primary/50" : "bg-secondary hover:bg-secondary/50"} transition-all duration-300 items-center w-full rounded-sm flex flex-row gap-3`}>
                                        {item.icon}
                                        <span className="">{item.title}</span>
                                    </Link>
                                ) : (
                                    <Link href={item.path} key={index} className={`p-2 ${pathname === item.path ? "bg-primary text-accent hover:bg-primary/50" : "bg-secondary hover:bg-secondary/50"} transition-all duration-300 items-center w-full rounded-sm flex flex-row gap-3`}>
                                        <TooltipProvider>
                                            <Tooltip >
                                                <TooltipTrigger asChild>
                                                    {item.icon}
                                                </TooltipTrigger>
                                                <TooltipContent >
                                                    <p>{item.title}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                )
                            )
                            )}
                        </div>
                        <div className="w-full">
                            {size && size > 9 ? (
                                <Button variant="secondary" className="w-full flex flex-row gap-2 items-center">
                                    <SignOut size={20} />
                                    Logout
                                </Button>
                            ) : (
                                <Button variant="secondary" size={size && size > 9 ? "default" : "icon"} className="w-full flex flex-row gap-2 items-center">
                                    <TooltipProvider>
                                        <Tooltip >
                                            <TooltipTrigger asChild>
                                                <SignOut size={20} />
                                            </TooltipTrigger>
                                            <TooltipContent >
                                                <p>Logout</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Button>
                            )}
                        </div>
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={75}>
                    {pathname === "/home" && (
                        <HomeComponent />
                    )}
                    {pathname === "/search" && (
                        <SearchComponent />
                    )}
                    {pathname === "/messages" && (
                        <MessagesComponent />
                    )}
                    {pathname === "/explore" && (
                        <ExploreComponent type={1} />
                    )}
                    {pathname === "/profile" && (
                        <ProfileComponent />
                    )}
                    {pathname === "/notifications" && (
                        <Notification />
                    )}
                    {pathname === "/settings" && (
                        <SettingsComponent />
                    )}
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}
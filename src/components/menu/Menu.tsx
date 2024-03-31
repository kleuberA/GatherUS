"use client"
import Link from "next/link";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import ItensMenu from "./itensMenu"

export default function Menu() {

    const itens = ItensMenu;

    return (
        <div className="bg-background w-full h-14 fixed bottom-0 border-t border-t-border">
            <div className="flex justify-center flex-row gap-10 items-center h-full">
                {itens.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <TooltipProvider>
                            <Tooltip>
                                <div>
                                    <TooltipTrigger asChild className={item.title === 'Create Post' ? 'bg-background rotate-45 -translate-y-7' : ''}>
                                        <Button size="menuItem" variant="buttonMenu">{item.icon}</Button>
                                    </TooltipTrigger>
                                </div>
                                <TooltipContent>
                                    <p>{item.title}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                ))}
            </div>
        </div>
    )
}
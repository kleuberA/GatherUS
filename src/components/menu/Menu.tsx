"use client"
import Link from "next/link";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import ItensMenu from "./itensMenu"

export default function Menu() {

    const itens = ItensMenu;

    return (
        <div className="bg-background/80 w-full h-16 fixed bottom-0 border-t border-t-border">
            <div className="flex justify-center flex-row gap-10 items-center h-full">
                {itens.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild className={item.title === 'Create Post' ? 'bg-background rotate-45 -translate-y-8 scale-125' : ''}>
                                    {item.title === 'Create Post' ? (
                                        <Button size="menuItem" variant="outline">{item.icon}</Button>
                                    ) : (
                                        <Button size="menuItem" variant="outline">
                                            <Link href={item.path} className="w-full h-full flex items-center justify-center">
                                                {item.icon}
                                            </Link>
                                        </Button>
                                    )}
                                </TooltipTrigger>
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
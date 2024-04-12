"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Chat, DotsThree, DotsThreeVertical, ExclamationMark, Heart, PencilSimple, SquareHalf, SquaresFour, TrashSimple } from "@phosphor-icons/react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import Image from "next/image";
import { useState } from "react";

interface ExploreProps {
    type: number;
}

export default function ExploreComponent(props: ExploreProps) {

    const [viewPosts, setViewPosts] = useState(false);

    return (
        <section className="w-full h-full p-5 relative">
            <div className="absolute top-5 right-5 cursor-pointer p-2 bg-secondary rounded-sm" onClick={() => setViewPosts(!viewPosts)}>
                {!viewPosts && (
                    <SquaresFour size={20} />
                )}
                {viewPosts && (
                    <SquareHalf size={20} />
                )}
            </div>
            {viewPosts && (
                <div className="flex flex-row pt-5 gap-5 flex-wrap justify-start overflow-y-auto h-full pb-32 scrollbar-hide">
                    <div className="bg-secondary rounded-sm w-[20dvw] min-h-[45dvh] flex flex-col gap-3 cursor-pointer">
                        <div className="flex-1 p-2 text-justify">
                            <Image src="https://source.unsplash.com/random/800x600" width={800} height={600} alt={""} className="rounded-md" />
                        </div>
                        <div className="p-2 flex flex-row justify-between ">
                            <div className="flex flex-row gap-3">
                                <Avatar className="rounded-sm">
                                    <AvatarImage src="https://source.unsplash.com/random/800x600" />
                                    <AvatarFallback>KS</AvatarFallback>
                                </Avatar>
                                <span className="text-sm">Kleuber Silva</span>
                            </div>
                            <div>
                                <Button size="sm" variant="outline">Seguir</Button>
                            </div>
                        </div>
                    </div>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div className="bg-secondary rounded-sm w-[20dvw] min-h-[45dvh] flex flex-col gap-3 cursor-pointer">
                            <div className="flex-1 p-2 text-justify">
                                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, magni atque, est officia libero debitis, nisi iste velit incidunt mollitia qui. Aliquid ea dolorem dolor porro nostrum est dolorum error?</span>
                            </div>
                            <div className="p-2 flex flex-row justify-between border-t border-t-border">
                                <div className="flex flex-row gap-3">
                                    <Avatar className="rounded-sm">
                                        <AvatarImage src="https://source.unsplash.com/random/800x600" />
                                        <AvatarFallback>KS</AvatarFallback>
                                    </Avatar>
                                    <span className="text-sm">Aguiar</span>
                                </div>
                                <div>
                                    <Button size="sm" variant="outline">Seguir</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {!viewPosts && (
                <div className="bg-secondary rounded-lg p-4 mx-auto border border-border text-accent-foreground w-[40dvw] min-h-[35dvh]">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row items-center gap-2 text-accent-foreground text-sm">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <h1>Kleuber Silva</h1>
                                <span>-</span>
                                <span className="text-accent-foreground/50">20s ago</span>
                            </div>
                            <div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button size="icon">
                                            <DotsThreeVertical size={20} />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <DropdownMenuLabel>Settings</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem className="gap-2">
                                                <PencilSimple size={20} />
                                                <span>Edit</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="gap-2 text-red-500 hover:text-red-400">
                                                <TrashSimple size={20} />
                                                <span>Delete</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="text-yellow-500 gap-2">
                                                <ExclamationMark size={20} />
                                                <span>Report</span>
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                        {props.type === 1 && (
                            <>
                                <div className="text-justify">
                                    <span className="text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</span>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <span className="hover:text-red-500 cursor-pointer"><Heart size={20} /></span>
                                    <span className="hover:text-blue-500 cursor-pointer"><Chat size={20} /></span>
                                </div>
                                <div className="w-full h-auto bg-primary p-3 text-accent rounded-md flex flex-col gap-1">
                                    <span className="text-accent text-xs">Comments</span>
                                    <div className="flex flex-row justify-between gap-4">
                                        <div className="flex flex-row gap-2 items-center">
                                            <Avatar className="rounded-md w-6 h-6">
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <div className="flex flex-row gap-1">

                                                    <span className="text-accent text-xs"><span className="text-accent text-xs font-bold">Silva </span> - reader will be distracted distracted distracted distractedby the readable content of a page</span></div>
                                                <div className="flex flex-row gap-3 items-center">
                                                    <span className="text-xs text-accent">1s</span>
                                                    <span className="text-xs text-accent">2 Likes</span>
                                                    <Dialog>
                                                        <DialogTrigger>
                                                            <DotsThree size={20} className="cursor-pointer" />
                                                        </DialogTrigger>
                                                        <DialogContent>
                                                            <DialogHeader>
                                                                <DialogTitle>Info</DialogTitle>
                                                                <DialogDescription>
                                                                    <Button variant="destructive" className="w-full">Report</Button>
                                                                </DialogDescription>
                                                            </DialogHeader>
                                                            <DialogClose>
                                                                <Button variant="ghost" className="w-full">Cancel</Button>
                                                            </DialogClose>
                                                        </DialogContent>
                                                    </Dialog>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="hover:text-red-500 cursor-pointer"><Heart size={15} /></span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        {props.type === 2 && (
                            <>
                                <div>
                                    <Image src="https://source.unsplash.com/random/800x600" width={800} height={600} alt={""} className="rounded-md" />
                                </div>
                                <div className="flex flex-row gap-3">
                                    <span className="hover:text-red-500 cursor-pointer"><Heart size={20} /></span>
                                    <span className="hover:text-blue-500 cursor-pointer"><Chat size={20} /></span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </section>
    )
}
import { Chat, DotsThreeVertical, ExclamationMark, Heart, PencilSimple, TrashSimple } from "@phosphor-icons/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import Image from "next/image";

interface PostProps {
    type: number;
}
export default function Post(props: PostProps) {
    return (
        <section>
            <div className="bg-secondary rounded-lg p-4 border border-border text-accent-foreground w-[40dvw] min-h-[35dvh]">
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
        </section>
    )
}
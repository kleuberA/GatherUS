import { PaperPlaneRight, Paperclip } from "@phosphor-icons/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface MessagesProps {

}
export default function Messages(props: MessagesProps) {
    return (
        <section className="w-full h-[calc(100dvh_-_4rem)]">
            <div className="w-full h-full flex flex-row">
                <div className="w-96 h-full border-r border-border p-6">
                    <h1 className="text-accent-foreground text-xl tracking-wider">Friends</h1>
                    <div className="flex flex-col gap-3 pt-3 overflow-y-auto h-full pb-5 scrollbar-hide">
                        {Array.isArray(new Array(20).fill(0)) && new Array(10).fill(0).map((_, index) => (
                            <div key={index} className="flex flex-row gap-2 items-center cursor-pointer hover:bg-secondary transition-all duration-300 p-2 rounded-md">
                                <Avatar className="rounded-md w-7 h-7">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <h1 className="text-accent-foreground text-sm font-bold">Shad</h1>
                                    <p className="text-accent-foreground/50 text-xs">Hey, how are you?</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-6 w-full h-full flex flex-col gap-2">
                    <div className="w-full flex flex-row items-center p-2 bg-secondary rounded-sm h-12">
                        <div className="flex flex-row items-center gap-3">
                            <div>
                                <Avatar className="rounded-sm w-7 h-7">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="flex flex-col w-full">
                                <h1 className="text-accent-foreground text-sm font-bold">Shad</h1>
                                <p className="text-emerald-500 text-xs">Online</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full relative flex flex-col">
                        <div className='flex flex-col p-3 gap-2'>
                            <div className="flex justify-start">
                                <span className="text-accent-foreground bg-secondary rounded-t-sm rounded-br-sm text-xs p-2 flex max-w-[35dvw]">
                                    Hello.
                                </span>
                            </div>
                            <div className="flex justify-end">
                                <span className="text-accent text-xs p-2 flex bg-primary rounded-t-sm rounded-bl-sm max-w-[35dvw]">
                                    Hey, How are you ?
                                </span>
                            </div>
                            <div className="flex justify-end">
                                <span className="text-accent text-xs p-2 flex bg-primary rounded-t-sm rounded-bl-sm max-w-[35dvw]">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat asperiores similique voluptatum quis, animi iure doloribus quasi et ea ipsa consequatur ullam repudiandae ipsum a corporis quod unde, enim sequi?
                                </span>
                            </div>
                            <div className="flex justify-start">
                                <span className="text-accent-foreground bg-secondary rounded-t-sm rounded-br-sm text-xs p-2 flex max-w-[35dvw]">
                                    Hello, Placeat asperiores similique voluptatum quis, animi iure doloribus quasi et ea ipsa consequatur ullam repudiandae ipsum a corporis quod unde, enim sequi?
                                </span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 w-full min-h-20 p-3 bg-secondary rounded-md">
                            <div className="flex flex-row items-center gap-2">
                                <div contentEditable className="min-h-10 w-full items-center p-2 max-w-full break-words overflow-y-auto">Send Message...</div>
                                <Button size="icon">
                                    <PaperPlaneRight size={20} />
                                </Button>
                                <Button size="icon">
                                    <Paperclip size={20} />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
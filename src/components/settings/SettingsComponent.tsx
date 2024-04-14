import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";

export default function SettingsComponent() {
    return (
        <section className="w-full h-[calc(100dvh_-_4rem)]">
            <div className="w-full h-full flex flex-row">
                <div className="w-96 h-full border-r border-border p-6">
                    <h1 className="text-accent-foreground text-xl tracking-wider">Settings</h1>
                    <div className="flex w-full flex-col gap-3 pt-3 overflow-y-auto h-full pb-5 scrollbar-hide">
                        <Link href="" className="text-sm p-2 rounded-sm bg-secondary hover:bg-transparent transition-all duration-300">Editar Perfil</Link>
                        <Link href="" className="text-sm p-2 rounded-sm hover:bg-secondary transition-all duration-300">Segurança</Link>
                        <Link href="" className="text-sm p-2 rounded-sm hover:bg-secondary transition-all duration-300">Notificações</Link>
                        <Link href="" className="text-sm p-2 rounded-sm hover:bg-secondary transition-all duration-300">Privacidade</Link>
                        <Link href="" className="text-sm p-2 rounded-sm hover:bg-secondary transition-all duration-300">Ajuda</Link>
                        <Link href="" className="text-sm p-2 rounded-sm hover:bg-secondary transition-all duration-300 text-destructive">Encerrar Sessão</Link>
                    </div>
                </div>
                <div className="p-6 w-full h-full flex flex-col gap-2">
                    <h1>Editar</h1>
                    <div className="bg-secondary w-full gap-2 p-2 flex flex-row items-center justify-between h-20 rounded-sm">
                        <div className="flex flex-row gap-2">
                            <div>
                                <Avatar className="rounded-sm">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="John Doe" />
                                    <AvatarFallback>KS</AvatarFallback>
                                </Avatar>
                            </div>
                            <div>
                                <h1 className="text-accent-foreground">John Doe</h1>
                                <p className="text-accent-foreground text-xs">@johndoe</p>
                            </div>
                        </div>
                        <div>
                            <Button>Alterar Foto</Button>
                        </div>
                    </div>
                    <div>
                        <h1>Nome</h1>
                        <Input type="text" className="w-full p-2 rounded-sm" />
                    </div>
                    <div>
                        <h1>Bio</h1>
                        <Textarea className="w-full resize-none overflow-y-auto h-20 p-2 rounded-sm"></Textarea>
                    </div>
                    <div className="mt-2 flex flex-row justify-end">
                        <Button>Salvar</Button>
                    </div>
                </div>

            </div>
        </section>
    )
}
import { HouseLine, PlusCircle, User } from "@phosphor-icons/react";

const ItensMenu = [
    {
        title: 'Home',
        path: '/home',
        icon: <HouseLine size={22} />
    },
    {
        title: 'Create Post',
        path: '',
        icon: <PlusCircle size={22} className="rotate-45" />
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <User size={22} />
    }
]

export default ItensMenu;
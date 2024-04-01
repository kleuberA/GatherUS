import { Bell, Binoculars, Chats, GearSix, MagnifyingGlass } from "@phosphor-icons/react";

const ItensSideMenu = [
    {
        title: "Search",
        path: "/search",
        icon: <MagnifyingGlass size={20} />
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <Chats size={20} />
    },
    {
        title: 'Explore',
        path: '/explore',
        icon: <Binoculars size={20} />
    },
    {
        title: 'Notifications',
        path: '/notifications',
        icon: <Bell size={20} />
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <GearSix size={20} />
    }
];

export default ItensSideMenu;
import React from 'react';
import Link from "next/link";
import { Button98 } from "@shared/ui";
interface Item {
    name: string;
    path: string
}
interface ItemObject {
    items: Item[];
}
const Navigation = ({items}: ItemObject) => {
    return (
        <nav>
            {items.map((item, index) => (
                <Link href={item.path} key={index}>
                    <Button98 text={item.name}/>
                </Link>
            ))}
        </nav>
    );
};

export default Navigation;
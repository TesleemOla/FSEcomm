"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function CurrentPage() {

    const location = usePathname()
    return (
        <Link href="{location}" className="font-normal">{location}</Link>
    )
}
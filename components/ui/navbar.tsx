"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import ExLogo from '../icons/ExLogo'
import { Burger, Cart, Love, Profile, Search } from '../icons'
import { supabase } from '@/utils/supabase/client'
import Alert from './toast'
import { redirect } from 'next/navigation'

const Navbar = () => {

  const [open,setOpen] = useState(false)

  const [ openDrpDwn, setOpenDrpDwn ] = useState<boolean>(false)
  const handleLogOut=async()=>{
    const { error } = await supabase.auth.signOut()
    if(error){
      Alert(error.message, "error")
    }
    else{
      redirect("/login")
    }
  }
  return (
    <header className="flex p-4 shadow-2xl w-full justify-between sticky top-0 z-10 bg-white">
        <Link href="/" className='pl-4'>
          <ExLogo />
        </Link>
        
          
        
        <nav className="hidden sm:flex cursor-pointer flex-wrap sm:justify-between w-1/2">
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            <Link href="/register">Sign Up</Link>
        <div className="flex gap-5 w-1/2">
              <div className="relative border-2 rounded-lg  bg-gray-300">
                <input type="search" name="search" id="search" className="bg-gray-300 border-none outline-none" />
                <div className="absolute right-0 top-0 text-white" >
                  <Search />
                </div>
              </div>

              <Love />
              <Cart />
              <span onClick={() => setOpenDrpDwn(!openDrpDwn)} className="relative">
                <Profile />
                {openDrpDwn && 
                <div className="bg-drpbg w-40 h-50 text-white font-light z-10 border-red-400 border-2 absolute top-8 right-0.5">
                  <ul className="flex flex-col list-none">
                    <Link href="/User">Manage Accounts</Link>
                    <Link href="/User/orders">My Orders</Link>
                    <Link href="/User/Cancellations">My Cancellations</Link>
                    <Link href="/User/Reviews">My Reviews</Link>
                    <li onClick={handleLogOut}>Logout</li>
                  </ul>
                </div>
                }
              </span>
              
            </div>
        </nav>
      <nav className={`flex flex-col px-2 items-end absolute right-0 top-3 cursor-pointer sm:hidden`} onClick={()=>setOpen(!open)}>
          <Burger open={open} />
        <span className={`transition-[opacity] ease-in-out bg-white shadow-lg px-10 ${open ? "opacity-100" : "opacity-0"}`}>
          <span className="grid text-2xl font-bold gap-5">
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            <Link href="/User/register">Sign Up</Link>
          </span>
          <span className="grid grid-cols-2 my-5">
       

          <Love />
          <Cart />
          <Profile />
          </span>
          </span>
        </nav>
       
       
    </header>
  )
}

export default Navbar
import Link from "next/link";
import { BtnArrow, ExLogo, Socials } from "../icons";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="p-4 items-center gap-5 sm:items-start bg-black text-white flex justify-between flex-col text-center  sm:flex-row sm:flex-wrap font-thin">
            <section className="flex flex-col items-center" >
                <ExLogo footer={true}/>
                <Link href="#" className="first:font-bold">Subscribe</Link>
                <Link href='#'>Get 10% off your first order</Link>
                <div className="relative border-white border-solid border-2 outline-1">
                    <input type="email" placeholder="Enter your email" name="email" className="w-full p-1 bg-inherit outline-none border-none"/>
                    <button className="absolute right-2 top-1">
                        <BtnArrow />
                    </button>
                </div>
            </section>
            <section className="w-40">
                <Link href="#" className="first:font-extrabold first:text-base">Support</Link>
                <p >
                    111, Ademodu close, lagbade street, Ibadan
                </p>
                <Link href="#">email@exclusive.com</Link>
                <p> +88-3459-6576-123</p>
            </section>
            <section className="flex flex-col">
                <Link href="#" className="first:font-bold first:text-base">Account</Link>
                <Link href="#">My Account</Link>
                <Link href="/login">Login</Link>
                <Link href="/Register">Register</Link>
                <Link href="/cart">Cart</Link>
                <Link href="/">Shop</Link>
            </section>
            <section className="flex flex-col">
                <Link href="#" className="first:font-bold first:text-base">Quick Link</Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Terms of use</Link>
                <Link href="#">FAQs</Link>
                <Link href="#">Contact</Link>
            </section>
            <section className="flex flex-col">
                <Link href="#" className="first:font-bold first:text-base">Download App</Link>
                <Link href="#">Save $3 with app. New user only</Link>
                <span className='grid grid-cols-2'>
                <Image src="/images/Qr Code.jpg" alt="qr code" width={100} height={30} className="row-span-2 w-auto h-auto"/>
                <Image src="/images/AppStore.jpg" alt="appstore" width={120} height={60} className="w-auto h-auto" />
                <Image src="/images/GooglePlay.jpg" alt="googleplay" width={120} height={60} className="w-auto h-auto" />
                </span>
                
                <Socials />
                
                
            </section>
        </footer>
    )    
}
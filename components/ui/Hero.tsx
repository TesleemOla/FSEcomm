import Link from "next/link"
import Image from "next/image"
export default function Hero({}) {

    const categories = ["Women's fashion", "men's fashion","Electronics", "Home & Lifestyle", "Medicine", "Sports & Outdoor", 
        "Baby's Toys", "Groceries & Pets", "Health & Beauty"]
    return  (<section className="flex flex-col sm:flex-row gap-5 relative">
        <aside className="sm:border-black sm:border-r-2 h-3/4 max-w-screen-sm sm:w-1/3">
            <div className="flex overflow-x-hidden w-80 sm:w-full hover:overflow-x-scroll sm:overflow-none sm:grid gap-4">
                {
                    categories.map((item,i)=><Link href="#" key={i}>{item}</Link>)
                }
            </div>
        </aside>
        
        <div>
            <Image src="/images/banner.jpg" alt="hero banner" width={2000} height={200} className="hidden sm:block" />
        </div>
        </section>)
}
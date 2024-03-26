import CategoryList from "@/components/frontend/CategoryList";
import CommunityList from "@/components/frontend/CommunityList";
import Hero from "@/components/frontend/Hero";
import MarketList from "@/components/frontend/MarketList";
import { getData } from "@/lib/getData";
import Link from "next/link"

export default async function Home() {
  const categories = await getData('categories')
  return (
    <div className="min-h-screen">
       <Hero/>
       <MarketList/>
        {
          categories?.map((category, i)=>{
            return(
              <div key={i} className="py-3">
                <CategoryList category={category}/>
              </div>
            )
          })
        }
       <CommunityList/>
    </div>
  );
}

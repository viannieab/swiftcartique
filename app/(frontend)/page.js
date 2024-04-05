import CategoryList from "@/components/frontend/CategoryList"
import CommunityList from "@/components/frontend/CommunityList"
import Hero from "@/components/frontend/Hero"
import MarketList from "@/components/frontend/MarketList"
import { authOptions } from "@/lib/authOptions"
import { getData } from "@/lib/getData"
import { getServerSession } from "next-auth"

export default async function Home() {
  const categoriesData = await getData('categories')
  const categories = categoriesData.filter((category)=>{
    return category.products.length > 3
  })
  const session = await getServerSession(authOptions)
  console.log(session?.user)
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

import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request, {params:{id}}){
    try {
        const categories = await db.category.findUnique({
            where: {
                id
            },
            include:{
                products:true
            }
    })
        return NextResponse.json(categories)
    } catch (error) {
        return NextResponse.json({
            message: 'Failed to fetch category',
            error
        },{status:500}
        )
    }
}

export async function DELETE(req, { params: { id } }) {
    console.log(id)
    try {
      const existingCategory = await db.category.findUnique({
        where: {
          id,
        },
      });
  
      // If the category doesn't exist, return a 404 Not Found response
      if (!existingCategory) {
        return NextResponse.json(
          {
            error: "Category not found",
            message: "Failed to delete category which doesn't exist in the database",
          },
          {
            status: 404,
          }
        );
      }
  
      // Delete the category from the database
      const deletedCategory = await db.category.delete({
        where: {
          id: existingCategory.id,
        },
      });
  
      console.log("Category deleted successfully:", deletedCategory);
      return NextResponse.json(deletedCategory);
    } catch (error) {
      console.error("Error deleting the category:", error);
      return NextResponse.json(
        {
          error,
          message: "Failed to delete the category",
        },
        {
          status: 500,
        }
      );
    }
}
  

export async function PUT(request, {params:{id}}){
    try{
        const {title, slug, imageUrl, description, isActive} = await request.json()
        const existingCategory = await db.category.findUnique({
            where:{
                id
            }
        })
        if(!existingCategory){
            return NextResponse.json({
                data: null, 
                message: 'Category not found'
            },{
                status:404
            })
        }
        const updateCategory = await db.category.update({
            where:{
                id
            },
            data: {
                title, slug, imageUrl, description, isActive
            }
        })
        return NextResponse.json(updateCategory)
    } catch(error){
        console.log(error)
        return NextResponse.json({
            message: 'Failed to update category',
            error
        },{status:500}
        )
    }
}
import { publicProcedure, privateProcedure, router } from '../trpc';
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createCloudImage, deleteCloudImage } from "@/actions/cloudImage";
import { extractPublicId } from "cloudinary-build-url";
import prisma from "@/lib/prisma"

export const postRouter = router({
    //新規投稿
    createPost: privateProcedure.input(
        z.object({
            title: z.string(),
            content: z.string(),
            base64Image: z.string().optional(),
        })
        //新規投稿はデータベースを変更するのでmutationを使用
    ).mutation(async({ input, ctx }) => {
        try{ 
            const { title, content, base64Image } = input
            const userId = ctx.user.id

            let image_url

            //画像をアップロードした場合はCloudinaryに保存
            if(base64Image){
                image_url = await createCloudImage(base64Image)
            }

            //投稿保存
            const post = await prisma.post.create({
                data: {
                    userId,
                    title,
                    content,
                    image: image_url
                } 
            })
            return post

        }catch(error){
            console.log(error)

            if(error instanceof TRPCError && error.code === "BAD_REQUEST"){
                throw new TRPCError({
                    code: "BAD_REQUEST",
                    message: error.message,
                })
            } else{
                throw new TRPCError({
                    code: "BAD_REQUEST",
                    message: "投稿に失敗しました",
                })
            }
        }

    }),
    //投稿一覧取得
    getPosts: publicProcedure
    .input(
        z.object({
            userId: z.string().optional(),
           
        })
    )
    .query(async ({ input }) => {
        try{
            // const { userId } = input
            //投稿一覧取得
            const posts = await prisma.post.findMany({
              
              
                orderBy: {
                    updatedAt: "desc",
                },
                include:{
                    user:{
                        select:{
                            id: true,
                            name: true,
                            image: true,
                        },
                    },
                   
                },
            })
            

       
            

            return posts
            

        } catch(error){
            console.log(error)
            throw new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: "投稿一覧取得に失敗しました"
            })
        }

    }),
    getPostById: publicProcedure
            .input(
             z.object({
             postId: z.string(),
                            })
                        )
            .query(async ({ input }) =>{
                try{
                    const  { postId } = input

                    //投稿詳細取得
                    const post = await prisma.post.findUnique({
                        where: {id: postId},
                        include: {
                            user: {
                                select:{
                                    id: true,
                                    name: true,
                                    image: true,
                                },
                            },
                        },
                    })
                    
                    return post

                }catch(error){
                    console.log(error)
                    throw new TRPCError({
                        code: "INTERNAL_SERVER_ERROR",
                        message: "投稿詳細取得に失敗しました"
                    })

                }


            }),

            updatePost: privateProcedure
            .input(
               z.object({
                   postId: z.string(),
                   title: z.string(),
                   content: z.string(),
                   base64Image: z.string().optional(),
               })
            ).mutation(async ({ input, ctx }) => {
               try{
                   const { postId, title, content, base64Image} = input
                   const userId = ctx.user.id
                   let image_url
   
                   if(base64Image){
                       const post = await prisma.post.findUnique({
                           where: {id: postId},
                           include: {
                               user: {
                                   select: {
                                       id: true,
                                   },
                               },
                           },
                       })
                       if(!post){
                           throw new TRPCError({
                               code: "BAD_REQUEST",
                               message: "投稿が見つかりませんでした"
                           })
                       }
                       
                       if(userId !== post.user.id){
                           throw new TRPCError({
                               code: "BAD_REQUEST",
                               message: "投稿の編集権限がありません"
                           })
   
                       }
                       //古い画像を削除
                       if(post.image){
                           const publicId = extractPublicId(post.image)
                           await deleteCloudImage(publicId)
                       }
   
                       //新しい画像をアップロード
                       image_url = await createCloudImage(base64Image)
                   }
                      //投稿更新
                   await prisma.post.update({
                       where: {
                           id: postId,
                       },
                       data: {
                           title,
                           content,
                           ...(image_url && { image: image_url}),
                       },
                   })
   
               }catch(error){
                   console.log(error)
   
                   if(error instanceof TRPCError && error.code === "BAD_REQUEST"){
                       throw new TRPCError({
                           code: "BAD_REQUEST",
                           message: error.message,
                       })
                   }else{
                       throw new TRPCError({
                           code: "INTERNAL_SERVER_ERROR",
                           message: "投稿の編集に失敗しました",
                       })
                   }
               }
   
            }),
   
            //投稿削除
            deletePost: privateProcedure
             .input(
               z.object({
                   postId: z.string(),
               })
             ).mutation(async ({ input, ctx }) => {
               try{ 
                   const { postId } = input
                   const userId = ctx.user.id
   
                   const post = await prisma.post.findUnique({
                       where: {id: postId},
                       include: {
                           user: {
                               select: {
                                   id: true,
                               },
                           },
                       },
                   })
   
   
                   if(!post){
                       throw new TRPCError({
                           code: "BAD_REQUEST",
                           message: "投稿が見つかりませんでした"
                       })
                   }
                   if(userId !== post.user.id){
                       throw new TRPCError({
                           code: "BAD_REQUEST",
                           message: "投稿の削除権限がありません"
                       })
                   }
   
                   //画像を削除
                   if(post.image){
                       const publicId = extractPublicId(post.image)
                       await deleteCloudImage(publicId)
                   }
   
                   await prisma.post.delete({
                       where: {
                           id: postId,
                       },
   
                   })
           
   
               }catch(error){
                   console.log(error)
   
                   if(error instanceof TRPCError && error.code === "BAD_REQUEST"){
                       throw new TRPCError({
                           code: "BAD_REQUEST",
                           message: error.message,
                       })
                   }else{
                       throw new TRPCError({
                           code: "INTERNAL_SERVER_ERROR",
                           message: "投稿の削除に失敗しました",
                       })
                   }
               }
   
             }),



})
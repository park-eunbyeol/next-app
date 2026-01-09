import Link from "next/link"

 export type post ={
    id: number;
    title: string;
    body:string;
    userId:number;
        
    
};

type props ={
    post:post;
};
 export  default function PostCard({post}:props){
    
    return (
        <article className="border-gray-200 rounded-X1 p-4 mb-3">
        <h3 className="mb-2 text-lg font-semibold">{post.title}</h3>
        <p className="mb-3 text-gray-700 ">{post.body}</p>
        <div className="flex gap-3 items-center">
            <Link href={`posts/${post.id}`}>
            className="text-sm text-blue-600 hover:underline"
            더보기
        </Link>
        </div>
    </article>

    ) 
};
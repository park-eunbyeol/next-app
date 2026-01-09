//클라이언트 컴포넌트 실행
"use client";
/**
 * 서버컴포넌트VS클라이언트 컴포넌트
 * 1. 서버 컴포넌트
 * -DB접근
 * 서버api호출
 * 2.클라이언트 컴포넌트
 * useState,useEffect
 * 이벤트 사용
 */
import { useMemo, useState } from "react";
import PostCard, {post} from"@/app/components/PostCard"
type props={
    posts:post[];
}


export default function PostsearchSlient ({posts}:props){
      const [keyword,setKeyword]= useState("");
      const filteredPosts = useMemo(()=>{
        const newkeyword= keyword.trim().toLowerCase();
        if(!newkeyword) return posts;
       const newPosts =  posts.filter((post)=>{return post.title.toLowerCase().includes(newkeyword)})
       return newPosts;
      },[keyword,posts]);
      //1.함수의 반환값
      //2.의존성 배열
     
    return(
        <section>
            <div className="my-4">
                <input type="text"
                className="rounded-lg border border-gray-300 w-full"
                placeholder="제목 검색" 
                onChange={(e)=>setKeyword(e.target.value)}
                />
                <div className="mt-2 text-xs text-gary-500">
                    결과:{filteredPosts.length}/{posts.length}
                </div>
            </div >
           {/* { 필터링된 포스트 출력부분} */}
           {filteredPosts.length === 0 ?  <p className="text-gary-400">검색 결과가 없습니다</p> :filteredPosts.map((post)=> <PostCard post={post} key={post.id} />)}
          
        </section>
    )
}
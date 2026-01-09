import Image from "next/image";
import PostCard, { post } from "./components/PostCard";
import PostsearchSlient from "./components/PostsearchSlient";
import MailingList from "./components/MailingList";
import Footer from "./components/Footer";

// Post 타입 선언
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("호출 실패");
  }

  const data: Post[] = await res.json();
  return data;
}

export default async function Home() {
  const posts = await getPosts();
  const topPosts = posts.slice(0, 10);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="max-w-3xl mx-auto p-6 flex-grow">
        <h1 className="mb-4 text-2xl font-bold">데모 뉴스레터 게시글</h1>
        <p className="mt-0 mb-6 text-gray-500">
          jsonPlaceholder를 사용하여 post 출력
        </p>

        <div className="grid gap-4">
          <PostsearchSlient posts={posts.slice(0, 20)} />
        </div>

        <MailingList />
      </main>
      <Footer />
    </div>
  );
}

import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import Container from "@/components/container";
import { sortPosts } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Blog Posts",
  description: "This is a list of all my blog posts.",
};

const POSTS_PER_PAGE = 6;

interface PostPageProps {
  params: {
    slug: string[];
  };
}
export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  return Array.from({ length: totalPages }, (_, i) => ({
    slug: [String(i + 1)],
  }));
}

export default async function BlogPage({ params }: PostPageProps) {
  const currentPage = Number(params?.slug) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  return (
    <Container>
      <div className="flex flex-col items-center justify-center pb-8 gap-3">
        <h1 className="text-4xl font-bold ">All blogs</h1>
        <p>See all blogs we have ever written.</p>
      </div>
      <div>
        {displayPosts?.length > 0 ? (
          <ul className="grid md:grid-cols-3 gap-6">
            {displayPosts.map((post) => {
              const { slug, date, title, description, tags } = post;
              return (
                <li key={slug}>
                  <PostItem
                    img={post.img}
                    author={post.author}
                    slug={slug}
                    date={date}
                    title={title}
                    description={description}
                    tags={tags}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Nothing to see here yet</p>
        )}
      </div>
      <QueryPagination
        totalPages={totalPages}
        currentPage={currentPage}
        className="justify-center mt-4"
      />
    </Container>
  );
}

"use client";
import client from "@/libs/apolloClient";
import { gql } from "@apollo/client";
import { Blog, BlogGraphQLResponse, PaginationInfo } from "@/types/blog";
import Image from "next/image";
import env from "@/libs/env";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import "./style.css";
import { useEffect, useState } from "react";
import { Pagination } from "antd";

const GET_BLOG = gql`
  query Query($pagination: PaginationArg, $status: PublicationStatus) {
    articles_connection(pagination: $pagination, status: $status) {
      nodes {
        author {
          name
        }
        publishedAt
        slug
        title
        description
        cover {
          url
          width
          height
        }
        category {
          slug
          name
        }
      }
      pageInfo {
        pageCount
        page
      }
    }
  }
`;

export default function BlogPage() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const paged = Number.isNaN(Number(page)) ? 1 : Number(page);
  const pageSize = 2;
  const [pagination, setPagination] = useState<PaginationInfo>({
    page: paged,
    pageCount: 1,
  });

  const [blogs, setBlog] = useState<Blog[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await client.query<{ articles_connection: BlogGraphQLResponse }>({
        query: GET_BLOG,
        fetchPolicy: "no-cache",
        variables: {
          pagination: {
            page: pagination.page,
            pageSize: pageSize,
          },
        },
      });
      setBlog(data.articles_connection.nodes);
      setPagination({
        page: data.articles_connection.pageInfo.page,
        pageCount: data.articles_connection.pageInfo.pageCount,
      });
    }

    fetchData();
  }, [pagination.page]);

  return (
    <div className="blog">
      <div className="blog-list">
        {blogs.map((item, index) => {
          return (
            <Link className="blog-item" key={index} href={`/blog/${item.slug}`} prefetch>
              <Image className="blog-thumb" src={env.strapiURL + item.cover.url} width={item.cover.width} height={item.cover.height} alt={item.title} />
              <h3 className="title">{item.title}</h3>
              <p className="description">{item.description}</p>
              <div className="addition">
                {item.author.name} | {new Date(item.publishedAt).toDateString()}
              </div>
            </Link>
          );
        })}
      </div>
      <Pagination align="center" defaultCurrent={pagination.page} total={pagination.pageCount * 10} onChange={(page)=> setPagination({...pagination, page })}/>
    </div>
  );
}

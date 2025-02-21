"use client";
import Image from "next/image";
import client from "@/libs/apolloClient";
import { gql } from "@apollo/client";
import styles from "./header.module.css";
import { Flex, Space, Dropdown } from "antd";
import type { MenuProps } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";

const GET_HEADER = gql`
  query Query {
    header {
      logo {
        url
      }
      items {
        ... on ComponentSharedHeaderSingleItem {
          link
          title
        }
        ... on ComponentSharedHeaderMultipleItem {
          title
          link
          subItems {
            title
            link
          }
        }
      }
    }
  }
`;

interface SingleMenuItem {
  title: string;
  link: string;
}

interface MultipleMenuItem extends SingleMenuItem {
  subItems: SingleMenuItem[];
}

interface Header {
  logo: { url: string };
  items: (SingleMenuItem | MultipleMenuItem)[];
}

export default function Header() {
  const [data, setData] = useState<Header>({
    logo: { url: "" },
    items: [],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await client.query<{ header: Header }>({ query: GET_HEADER });
        setData(data.header);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <header className={styles.header}>
      <div className="container">
        <Flex justify="space-between">
          {data.logo.url != "" && <Image src={process.env.STRAPI_URL + data.logo.url} alt="Logo" width={40} height={40} />}
          <Space size="middle">
            {data.items.map((item, index) => {
              if ("subItems" in item) {
                const menuItems: MenuProps["items"] = item.subItems.map((subItem) => {
                  return {
                    label: <Link href={subItem.link}>{subItem.title}</Link>,
                    key: subItem.link,
                  };
                });

                return (
                  <Dropdown key={index} menu={{ items: menuItems }} trigger={["hover"]}>
                    <Link href={item.link}>{item.title}</Link>
                  </Dropdown>
                );
              } else {
                return (
                  <Link key={index} href={item.link}>
                    {item.title}
                  </Link>
                );
              }
            })}
          </Space>
        </Flex>
      </div>
    </header>
  );
}

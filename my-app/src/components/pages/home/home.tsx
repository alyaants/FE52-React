import { useEffect, useMemo, useState } from "react";
import { PostsList, TabsTypes, Theme } from "../../../@types";
import CardsList from "../../cardsList";
import TabsList from "../../tabsList";
import Title from "../../title";
import styles from "./home.module.scss";
import SelectedPost from "./selectedPost";
const MOCK_ARRAY = [
  {
    id: 1,
    image:
      "https://skillbox.ru/upload/setka_images/14055326052022_0ed1686442ac630326a48ddcef43684fa02b904b.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum vitae facere officia, consequatur sintdsfxhvgbjknlmnjkbhvgkcfyedttghnjlkm'nj;hbiluvgy?",
    date: "2021-10-06",
    lesson_num: 123,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis saepe blanditiis voluptas quos veniam laborum harum possimus culpa quibusdam modi!",
    author: 7,
  },
  {
    id: 2,
    image:
      "https://timeweb.com/media/articles/0001/18/thumb_17628_articles_standart.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum vitae facere officia, consequatur sintdsfxhvgbjknlmnjkbhvgkcfyedttghnjlkm'nj;hbiluvgy?",
    date: "2021-10-07",
    lesson_num: 48,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nemo illo, rerum dicta esse laudantium perspiciatis error quibusdam deserunt ratione, nobis earum tempora nam quidem.",
    author: 7,
  },
  {
    id: 3,
    image:
      "https://timeweb.com/media/default/0001/12/74c0bc01b8a8dab8b2b73b649f9a1b9259282e4e.png",
    text: "Hello!",
    date: "2021-10-07",
    lesson_num: 23,
    title: "Veniam cum vitae facere officia, 'nj;hbiluvgy?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nemo illo, rerum dicta esse laudantium perspiciatis error quibusdam deserunt ratione, nobis earum tempora nam quidem.",
    author: 97,
  },
  {
    id: 4,
    image:
      "https://cdn.fishki.net/upload/post/2021/04/21/3718899/087f2dc3b7a081f6237f9a87f9eaeec4.jpg",
    text: "Hi",
    date: "2021-10-07",
    lesson_num: 22,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nemo illo, rerum dicta esse laudantium perspiciatis error quibusdam deserunt ratione, nobis earum tempora nam quidem.",
    author: 97,
  },
  {
    id: 5,
    image:
      "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed_MQSTowL.jpeg",
    text: "Test",
    date: "2021-10-07",
    lesson_num: 59,
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, impedit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nemo illo, rerum dicta esse laudantium perspiciatis error quibusdam deserunt ratione, nobis earum tempora nam quidem.",
    author: 97,
  },
  {
    id: 6,
    image:
      "https://dev.by/storage/images/31/30/82/36/derived/0628806c48ef793b7480ec9a53e8dcc1.jpg",
    text: "Hello",
    date: "2021-10-07",
    lesson_num: 44,
    title: "Ut, impedit. Lorem, ipsum dolor.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nemo illo, rerum dicta esse laudantium perspiciatis error quibusdam deserunt ratione, nobis earum tempora nam quidem.",
    author: 99,
  },
  {
    id: 7,
    image:
      "https://alex-bulychev.ru/wp-content/uploads/2022/03/screenshot_20201125-173620__01-1024x991-1.jpg",
    text: "Hello2",
    date: "2021-10-07",
    lesson_num: 441,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nemo illo, rerum dicta esse laudantium perspiciatis error quibusdam deserunt ratione, nobis earum tempora nam quidem.",
    author: 99,
  },
  {
    id: 8,
    image:
      "https://sun9-20.userapi.com/impf/lGVqtU3qbGRIea_bwKeVid0kiaZqsA3Y6OBXmw/gNt2n7weDzY.jpg?size=604x449&quality=96&sign=276b3fea3684a89d5569709533c92453&type=album",
    text: "Hello2",
    date: "2021-10-07",
    lesson_num: 441,
    title: "Tenetur ut veniam magnam facilis!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nemo illo, rerum dicta esse laudantium perspiciatis error quibusdam deserunt ratione, nobis earum tempora nam quidem.",
    author: 99,
  },
  {
    id: 9,
    image:
      "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed_MQSTowL.jpeg",
    text: "Hello2",
    date: "2021-10-07",
    lesson_num: 441,
    title: "Tenetur ut veniam magnam facilis! Lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nemo illo, rerum dicta esse laudantium perspiciatis error quibusdam deserunt ratione, nobis earum tempora nam quidem.",
    author: 99,
  },
  {
    id: 10,
    image:
      "https://cs13.pikabu.ru/post_img/big/2023/07/12/5/1689144753284012617.png",
    text: "Hello2",
    date: "2021-10-07",
    lesson_num: 441,
    title: "Quaerat ipsum dolor, sit amet consectetur, nisi officia?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nemo illo, rerum dicta esse laudantium perspiciatis error quibusdam deserunt ratione, nobis earum tempora nam quidem.",
    author: 99,
  },
  {
    id: 11,
    image:
      "https://pcpro100.info/wp-content/uploads/2019/09/post_5d845e6a687e7.png",
    text: "Hello2",
    date: "2021-10-07",
    lesson_num: 441,
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nemo illo, rerum dicta esse laudantium perspiciatis error quibusdam deserunt ratione, nobis earum tempora nam quidem.",
    author: 99,
  },
  {
    id: 12,
    image:
      "https://cs10.pikabu.ru/post_img/2019/09/13/5/1568354462147386241.jpg",
    text: "Hello2",
    date: "2021-10-07",
    lesson_num: 441,
    title: "Lorem ipsum dolor, adipisicing elit. Sit asperiores beatae.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nemo illo, rerum dicta esse laudantium perspiciatis error quibusdam deserunt ratione, nobis earum tempora nam quidem.",
    author: 99,
  },
];
const Home = () => {
  const [activeTab, setActiveTab] = useState(TabsTypes.All);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [cardsList, setCardsList] = useState<PostsList>([]);


  const tabsList = useMemo(
    () => [
      { key: TabsTypes.All, title: "All Posts", disabled: false },
      { key: TabsTypes.Popular, title: "Popular Posts", disabled: false },
      { key: TabsTypes.MyFavorites, title: "Favorite", disabled: !isLoggedIn },
    ],
    [isLoggedIn]
  );

  useEffect(() => {
    setCardsList(MOCK_ARRAY);
  }, []);

  const onTabClick = (tab: TabsTypes) => () => {
    setActiveTab(tab);
    if (tab === TabsTypes.Popular) {
      setLoggedIn(true);
    }
  };
  return (
    <div>
      <Title title={"Blog"} className={styles.pageTitle} />
      <TabsList
        tabsList={tabsList}
        activeTab={activeTab}
        onTabClick={onTabClick}
      />
      <CardsList cardsList={cardsList} />
      <SelectedPost />
    </div>
  );
};
export default Home;
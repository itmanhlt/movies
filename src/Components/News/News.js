import React, { useEffect, useState } from "react";
import { Button, Tabs } from "antd";
import { newsServ } from "../../service/newsService";
import { movieServ } from "../../service/movieService";

export default function () {
  let [check, setCheck] = useState("Xem thêm");
  let [arr, setArr] = useState([]);
  let [children0, setChildren0] = useState(<></>);
  let [children1, setChildren1] = useState(<></>);
  let [children2, setChildren2] = useState(<></>);
  const items = [
    {
      key: "1",
      label: `Điện Ảnh 24h`,
      children: children0,
      url: "https://60b9f19280400f00177b744b.mockapi.io/ArticlesDienAnh02",
    },
    {
      key: "2",
      label: `Review`,
      children: children1,
      url: "https://60babc8f42e1d0001761ff84.mockapi.io/ArticlesReview02",
    },
    {
      key: "3",
      label: `Khuyến Mãi`,
      children: children2,
      url: "https://60babc8f42e1d0001761ff84.mockapi.io/ArticlesKhuyenMai02",
    },
  ];
  let cloneArr = [];

  useEffect(() => {
    items.map((item, index) => {
      newsServ
        .news(item.url)
        .then((res) => {
          cloneArr[index] = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    });
    setArr(cloneArr);
  }, []);

  let contentChildren = (index) => {
    let contentHTML = arr[index].map((item) => {
      return (
        <div>
          <img src={item.img} />
        </div>
      );
    });
    if (index == 0) {
      setChildren0(contentHTML);
    } else if (index == 1) {
      setChildren1(contentHTML);
    } else {
      setChildren2(contentHTML);
    }
  };
  let test = () => {
    if (check == "Rút gọn") {
      setCheck("Xem thêm");
      items.map((item) => {
        return (item.children = "");
      });
    } else {
      setCheck("Rút gọn");
      items.map((item, index) => {
        return contentChildren(index);
      });
    }
  };

  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} />
      <button
        type="button"
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        onClick={test}
      >
        {check}
      </button>
    </div>
  );
}

import React from "react";
import { Button, Tabs } from "antd";

export default function () {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Điện Ảnh 24h`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: "2",
      label: `Review`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: `Khuyến Mãi`,
      children: `Content of Tab Pane 3`,
    },
  ];
  
  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
  Xem thêm
</button>

    </div>
  );
}

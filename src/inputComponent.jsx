// import React, { useState } from "react";
// import { AutoComplete, Input } from "antd";
// // const getRandomInt = (max, min = 0) =>
// //   Math.floor(Math.random() * (max - min + 1)) + min;
// // const searchResult = (query) =>
// //   new Array(getRandomInt(5))
// //     .join(".")
// //     .split(".")
// //     .map((_, idx) => {
// //       const category = `${query}${idx}`;
// //       return {
// //         value: category,
// //         label: (
// //           <div
// //             style={{
// //               display: "flex",
// //               justifyContent: "space-between",
// //             }}
// //           >
// //             <span>
// //               Found {query} on{" "}
// //               <a
// //                 href={`https://s.taobao.com/search?q=${query}`}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //               >
// //                 {category}
// //               </a>
// //             </span>
// //             <span>{getRandomInt(200, 100)} results</span>
// //           </div>
// //         ),
// //       };
// //     });
// const InputCompo = () => {
//   // const [options, setOptions] = useState([]);
//   // const handleSearch = (value) => {
//   //   setOptions(value ? searchResult(value) : []);
//   // };
//   // const onSelect = (value) => {
//   //   console.log("onSelect", value);
//   // };
//   // return (
//   //   <AutoComplete
//   //     popupMatchSelectWidth={252}
//   //     style={{
//   //       width: 300,
//   //     }}
//   //     options={options}
//   //     onSelect={onSelect}
//   //     onSearch={handleSearch}
//   //     size="large"
//   //   >
//       <Input.Search size="large" placeholder="input here" enterButton />
//     // </AutoComplete>
//   // );
// };
// export default InputCompo;
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Select, Space } from "antd";
const { Search } = Input;
const Apps = () => (
  <Space direction="vertical" size="middle">
    <Input placeholder="print ToDo List" />
  </Space>
);
export default Apps;

var express = require("express");
var router = express.Router();

/* GET home page. */

const data = [
  {
    title: "녹조 현상의 원인과 대책",
    description:
      " 함수는 시작 위치에서 종료 위치까지 문자열을 자른다. 주의할 점은 종료 위치의 -1까지 문자열을 자른다는 것이다.",
    img: "http://localhost:3006/static/images/01.webp",
    date: "2022-03-14",
    tag: ["논문_리딩", "프로젝트_시작"],
  },
  {
    title: "녹조 현상의 원인과 대책",
    description:
      " 함수는 시작 위치에서 종료 위치까지 문자열을 자른다. 주의할 점은 종료 위치의 -1까지 문자열을 자른다는 것이다.",
    img: "http://localhost:3006/static/images/01.webp",
    date: "2022-03-14",
    tag: ["논문_리딩", "프로젝트_시작"],
  },
  {
    title: "녹조 현상의 원인과 대책",
    description:
      " 함수는 시작 위치에서 종료 위치까지 문자열을 자른다. 주의할 점은 종료 위치의 -1까지 문자열을 자른다는 것이다.",
    img: "http://localhost:3006/static/images/01.webp",
    date: "2022-03-14",
    tag: ["논문_리딩", "프로젝트_시작"],
  },
  {
    title: "녹조 현상의 원인과 대책",
    description:
      " 함수는 시작 위치에서 종료 위치까지 문자열을 자른다. 주의할 점은 종료 위치의 -1까지 문자열을 자른다는 것이다.",
    img: "http://localhost:3006/static/images/01.webp",
    date: "2022-03-14",
    tag: ["논문_리딩", "프로젝트_시작"],
  },
  {
    title: "녹조 현상의 원인과 대책",
    description:
      " 함수는 시작 위치에서 종료 위치까지 문자열을 자른다. 주의할 점은 종료 위치의 -1까지 문자열을 자른다는 것이다.",
    img: "http://localhost:3006/static/images/01.webp",
    date: "2022-03-14",
    tag: ["논문_리딩", "프로젝트_시작"],
  },
  {
    title: "녹조 현상의 원인과 대책",
    description:
      " 함수는 시작 위치에서 종료 위치까지 문자열을 자른다. 주의할 점은 종료 위치의 -1까지 문자열을 자른다는 것이다.",
    img: "http://localhost:3006/static/images/01.webp",
    date: "2022-03-14",
    tag: ["논문_리딩", "프로젝트_시작"],
  },
  {
    title: "녹조 현상의 원인과 대책",
    description:
      " 함수는 시작 위치에서 종료 위치까지 문자열을 자른다. 주의할 점은 종료 위치의 -1까지 문자열을 자른다는 것이다.",
    img: "http://localhost:3006/static/images/01.webp",
    date: "2022-03-14",
    tag: ["논문_리딩", "프로젝트_시작"],
  },
  {
    title: "녹조 현상의 원인과 대책",
    description:
      " 함수는 시작 위치에서 종료 위치까지 문자열을 자른다. 주의할 점은 종료 위치의 -1까지 문자열을 자른다는 것이다.",
    img: "http://localhost:3006/static/images/01.webp",
    date: "2022-03-14",
    tag: ["논문_리딩", "프로젝트_시작"],
  },
  {
    title: "녹조 현상의 원인과 대책",
    description:
      " 함수는 시작 위치에서 종료 위치까지 문자열을 자른다. 주의할 점은 종료 위치의 -1까지 문자열을 자른다는 것이다.",
    img: "http://localhost:3006/static/images/01.webp",
    date: "2022-03-14",
    tag: ["논문_리딩", "프로젝트_시작"],
  },
  {
    title: "녹조 현상의 원인과 대책",
    description:
      " 함수는 시작 위치에서 종료 위치까지 문자열을 자른다. 주의할 점은 종료 위치의 -1까지 문자열을 자른다는 것이다.",
    img: "http://localhost:3006/static/images/01.webp",
    date: "2022-03-14",
    tag: ["논문_리딩", "프로젝트_시작"],
  },
  {
    title: "녹조 현상의 원인과 대책",
    description:
      " 함수는 시작 위치에서 종료 위치까지 문자열을 자른다. 주의할 점은 종료 위치의 -1까지 문자열을 자른다는 것이다.",
    img: "http://localhost:3006/static/images/01.webp",
    date: "2022-03-14",
    tag: ["논문_리딩", "프로젝트_시작"],
  },
];

router.get("/", function (req, res, next) {
  res.send("Blog API. GET SOME DATA FROM HERE!");
});
router.get("/list", function (req, res, next) {
  res.json({
    status: "ok",
    status_message: "Query was successful",
    data: {
      list_count: data.length,
      limit: 6,
      list: data.slice(0, 6),
    },
  });
});

module.exports = router;

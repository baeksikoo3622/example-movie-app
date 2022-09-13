import { useState, useEffect } from "react";
import styles from "./GetList.module.css";

const BlogMasonry = () => {
  const [data, setData] = useState([]);
  const getList = async () => {
    const json = await (
      await fetch(`http://localhost:3006/blog/get/list`)
    ).json();
    setData(json.data.list);
    console.log(json.data.list);
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div className={styles.imgs}>
      {data.map((item: any) => (
        <figure>
          <img src={item.img} />
          <figcaption>
            <p className={styles.date}>{item.date}</p>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.description}>
              {item.description.substring(0, 25) + "..."}
            </p>
            <p className={styles.tag}>
              {item.tag.map((item: string) => (
                <span>{`#${item} `}</span>
              ))}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default BlogMasonry;

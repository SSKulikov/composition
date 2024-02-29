/**
 * Displays news block
 */

import Currencies from "./Currencies";
import NewsHeaders from "./NewsHeader";
import { List } from "../List/List";
import { currencies } from "../../data/currencies";
import { news } from "../../data/news";
import { newsHeaders } from "../../data/newsHeaders";
import Ad from "./Ad";

const News = () => {
  return (
    <div className="news_container">
      <div className="news_item">
        <NewsHeaders headers={newsHeaders} />
        <List items={news} />
        <Currencies array={currencies} />
      </div>
      <div className="ad_item" style={{ width: "18rem" }}>
        <Ad img="https://img.freepik.com/free-photo/medium-shot-woman-wearing-headphones_23-2149818230.jpg?w=996&t=st=1709178073~exp=1709178673~hmac=28d97f229dc9f4dcbfde18b502f5fc3b300a5b000470f5846470e80055a362df">
          <h5 className="ad_header">Рекламный заголовок</h5>
          <p className="ad_text">Рекламный текст </p>
        </Ad>
      </div>
    </div>
  );
};

export default News;

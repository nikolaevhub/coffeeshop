import React, {useState} from "react";
import mockData from "../../mockData";
import GridOfCards from "../../components/GridOfCards/GridOfCards";

const Goods = () => {
    const [goods, setGoods] = useState(mockData);
    return <GridOfCards cards={goods}/>
};

export default Goods;

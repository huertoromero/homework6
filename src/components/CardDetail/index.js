import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
const { Meta } = Card;

const CardDetail =  ({title, description_full,medium_cover_image}) =>{
  console.log(title);
return ( //Card que va a renderizar los datos que traemos unicamente.
  <Card
    hoverable
    cover={<img src={medium_cover_image} />}
    style={{ width: 700}}
    
>
<Meta title={title} description={description_full} />
</Card>
)};

export default CardDetail;
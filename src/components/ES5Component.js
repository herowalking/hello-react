import React from 'react';

function Item(props) {
    return <h1>{props.flag + ''}</h1>
}

Item.defaultProps = {
    flag: '123'
}

export default Item;
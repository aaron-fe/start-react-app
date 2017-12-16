// @flow
import * as React from 'react';

const List = ({
  items,
}: {
  items: Array<{
    name: string,
    id: string
  }>
}) => <ul>{items.map(({ name, id }) => <li key={id}>{name}</li>)}</ul>;

export default List;

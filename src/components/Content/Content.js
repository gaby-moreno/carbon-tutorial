import React from 'react';
import { SelectableTile } from 'carbon-components-react';

const props = {
  selected: false,
  handleClick: () => {},
};

const ContentTile = () => {
  const selectableProps = props;

  return (
    <div role="group" aria-label="selectable tiles">
      <SelectableTile id="tile-1" name="tiles" {...selectableProps}>
        Multi-select Tile
      </SelectableTile>
    </div>
  );
};

export { ContentTile };

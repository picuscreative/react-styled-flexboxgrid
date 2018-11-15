import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import config, { DIMENSION_NAMES } from "../config";

const Grid = styled.div`
  margin-right: auto;
  margin-left: auto;

  ${p =>
    !p.noPadding &&
    css`
      ${DIMENSION_NAMES.map(
        t =>
          config(p).container[t] &&
          config(p).media[t]`
        padding-right: ${p => config(p).outerMargin + "px"};
        padding-left: ${p => config(p).outerMargin + "px"};
      `,
      )}
    `}

  ${p =>
    !p.fluid &&
    css`
      ${DIMENSION_NAMES.map(
        t =>
          config(p).container[t] &&
          config(p).media[t]`
        width: ${p => config(p).container[t]}px;
      `,
      )}
    `}
`;

Grid.displayName = "Grid";

Grid.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node,
};

export default Grid;

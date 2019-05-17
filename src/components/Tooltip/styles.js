import styled, { css } from 'styled-components'

import { get, getCss } from '../../theme/helpers'

export const Wrapper = styled.div(
  props => css`
    position: fixed;
    font-size: ${get('fontSize.xs')};
    padding: ${get('padding.xs')};
    ${getCss('tooltips')};
    top: ${`${props.top}px`};
    left: ${`${props.left}px`};
    z-index: 999;
  `
)

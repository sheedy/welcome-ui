export const getLinks = theme => {
  const { colors, fontWeights, transitions, underline } = theme

  return {
    default: {
      color: colors.dark[500],
      fontWeight: fontWeights.medium,
      transition: transitions.medium
    },
    primary: {
      default: underline.default,
      hover: underline.hover
    },
    'primary-underline-span': {
      default: {
        '> span': {
          ...underline.default
        }
      },
      hover: {
        '> span': {
          ...underline.hover
        }
      }
    },
    secondary: {
      default: '',
      hover: {
        opacity: 0.6
      }
    }
  }
}

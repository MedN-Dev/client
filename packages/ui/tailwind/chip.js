const R = require('rambdax')
const { generateBEMClasses } = require('./_helpers')

function getBaseStyle(theme) {
    return {
        // wrapping element
        default: {
            display: 'inline-flex',
            alignItems: 'center',
            verticalAlign: 'middle',
            maxWidth: '100%',
            padding: theme('spacing.1'),
            borderRadius: theme('borderRadius.full')
        },

        // elements
        decor: {
            width: theme('spacing.5'),
            height: theme('spacing.5'),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: theme('borderWidth.2'),
            borderRadius: theme('borderRadius.full')
        },
        decor_image: {
            width: theme('spacing.6'),
            height: theme('spacing.6'),
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            borderColor: 'transparent'
        },
        'decor-circle': {
            width: theme('spacing.2'),
            height: theme('spacing.2'),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: theme('borderRadius.full')
        },
        'decor-icon': {
            display: 'inline-flex'
        },
        'decor-icon_color': {
            transform: 'scale(0.5)',
            overflow: 'visible!important'
        },
        text: {
            fontSize: theme('fontSize.sm'),
            marginLeft: theme('spacing.2'),
            marginRight: theme('spacing.2'),
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            flexShrink: 1
        }
    }
}

module.exports = function({ addComponents, theme }) {
    const STYLE = R.mergeDeep(getBaseStyle(theme), theme('chip', {}))

    addComponents(generateBEMClasses('aw-chip', STYLE))
}

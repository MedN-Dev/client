import { FORM_ENTER_SKIP_ATTR } from '../assets/js/constants'
import { path } from 'rambdax'

const FIELDS = [
    { tag: 'input', exclude: ['[type="hidden"]'] },
    { tag: 'select' },
    { tag: 'textarea' }
]

const GLOBAL_EXCLUDE = [`[${FORM_ENTER_SKIP_ATTR}]`, '[disabled]']

const TAG_NAMES = FIELDS.map(({ tag }) => tag.toUpperCase())

const FIELDS_SELECTOR = FIELDS.map(({ tag, exclude = [] }) => {
    const excludeRule = GLOBAL_EXCLUDE.concat(exclude)
        .map(rule => `:not(${rule})`)
        .join('')
    return `${tag}${excludeRule}`
}).join(', ')

export default {
    methods: {
        _onEnterKeydown(e) {
            const target = path('target', e)
            const targetTag = path('target.tagName', e)
            const keyCode = path('keyCode', e)

            if (keyCode !== 13 || TAG_NAMES.indexOf(targetTag) === -1) return

            const elements = Array.from(
                this.$el.querySelectorAll(FIELDS_SELECTOR)
            )

            console.log(FIELDS_SELECTOR)

            const index = elements.indexOf(target)

            if (index < 0) return

            e.preventDefault()

            if (
                index === elements.length - 1 ||
                e.ctrlKey ||
                e.shiftKey ||
                e.metaKey
            ) {
                this._onEnterKeydownAction()
            } else {
                console.log('focus', elements[index + 1])
                elements[index + 1].focus()
            }
        },

        _onEnterKeydownAction() {
            /* overwrite this function in the component */
        }
    }
}
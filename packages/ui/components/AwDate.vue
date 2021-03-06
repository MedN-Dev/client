<template>
    <div class="aw-date" @click="onDateClick">
        <AwInput
            v-bind="{ ...$attrs, label, id }"
            :value="inputValue"
            readonly
            @focus="isOpened = true"
            @click.stop="isOpened = true"
        />
        <AwDropdown
            ref="dropdown"
            :show.sync="isOpened"
            :close-on-action="false"
            class="aw-date__dropdown"
        >
            <div
                v-for="{ key, month, year, ...view } in views"
                :key="key"
                class="aw-calendar aw-date__calendar"
            >
                <AwCalendarNav
                    :month="month"
                    :year="year"
                    :disabled-prev="view.disabledPrev"
                    :disabled-next="view.disabledNext"
                    v-on="view.navListeners"
                />
                <AwCalendarWeekdays
                    :weekday-names="$t('AwCalendar.weekdaysShort')"
                />
                <AwCalendarDays
                    :month="month"
                    :year="year"
                    :day-disabled="view.dayDisabled"
                    :day-class="view.dayClass"
                />
            </div>
        </AwDropdown>
    </div>
</template>

<script>
import fieldMixin from '../mixins/field'
import calendarMixin from '../mixins/calendar'
import AwCalendarNav from './AwCalendarNav.vue'
import AwCalendarWeekdays from './AwCalendarWeekdays.vue'
import AwCalendarDays from './AwCalendarDays.vue'

export default {
    name: 'AwDate',

    components: {
        AwCalendarNav,
        AwCalendarWeekdays,
        AwCalendarDays
    },

    mixins: [fieldMixin, calendarMixin],

    props: {
        format: {
            type: String,
            default() {
                return this.$t('AwDate.format')
            }
        }
    },

    data() {
        return {
            isOpened: false,
            maxViews: 1
        }
    },

    computed: {
        inputValue() {
            const result = []

            if (this._startDayjs) {
                result.push(this._startDayjs)
            }

            if (this._endDayjs) {
                result.push(this._endDayjs)
            }

            return result.map(dayjs => dayjs.format(this.format)).join(' - ')
        },

        views() {
            const views = []
            const maxViews = Math.min(this.maxViews, this.range ? 2 : 1)
            let index = 0

            while (index < maxViews) {
                const viewDate = this.viewDate.add(index, 'month')

                const view = {
                    key: viewDate.toString(),
                    month: viewDate.month(),
                    year: viewDate.year(),
                    navListeners: {},
                    dayDisabled: this._isDisabled,
                    dayClass: this._getDayClass
                }

                // first view
                if (index === 0) {
                    view.disabledPrev =
                        this._minDayjs &&
                        viewDate.isSame(this._minDayjs, 'month')
                    view.navListeners['click:prev'] = () => this.shiftMonth(-1)
                }

                // last view
                if (index === maxViews - 1) {
                    view.disabledNext =
                        this._maxDayjs &&
                        viewDate.isSame(this._maxDayjs, 'month')
                    view.navListeners['click:next'] = () => this.shiftMonth(+1)
                }

                views.push(view)
                index += 1
            }

            return views
        }
    },

    watch: {
        value(value) {
            if (value !== null && this.isOpened) {
                this.isOpened = false
            }
        },

        maxViews() {
            this.$nextTick(this.$refs.dropdown.update)
        },

        isOpened(isOpened) {
            this.$nextTick(() => {
                this._checkMaxViews()
                this._toggleMaxViewsListener(true)
            })

            // clear temp state
            if (!isOpened) {
                this.tempValue = null
                this.hoverValue = null
            }
        }
    },

    beforeDestroy() {
        clearTimeout(this._tmMaxViews)
        this._toggleMaxViewsListener(false)
    },

    methods: {
        _checkMaxViews() {
            const el = this.$el
            const calendar = el && el.querySelector('.aw-date__calendar')

            if (el && calendar) {
                this.maxViews =
                    Math.floor(el.clientWidth / calendar.clientWidth) || 1
            }
        },

        _checkMaxViewsOnResize() {
            clearTimeout(this._tmMaxViews)
            this._tmMaxViews = setTimeout(this._checkIsSingle, 300)
        },

        _toggleMaxViewsListener(on = false) {
            window[on ? 'addEventListener' : 'removeEventListener'](
                'resize',
                this._checkMaxViewsOnResize
            )
        }
    }
}
</script>

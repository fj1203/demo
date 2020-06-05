<template>
  <div>
    <div ref="pie" style="width: 100%;height: 400px;"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
import tdTheme from './theme.json'
import { on, off } from '@/libs/tools'
echarts.registerTheme('tdTheme', tdTheme)
export default {
    data () {
        return {
            charts: ''
        }
    },
    props: {
        xAxisData: Array,
        data1: Array,
        data2: Array,
        data3: Array
    },
    watch: {
        xAxisData: {
            handler (val) {
                this.xAxisData = val
                this.init()
            }
        },
        data1: {
            handler (val) {
                this.data1 = val
                this.init()
            }
        }
    },
    mounted () {
        this.init()
    },
    methods: {
        init () {
            this.$nextTick(() => {
                this.charts = echarts.init(this.$refs.pie, 'tdTheme')
                const option = {
                    title: {
                        zlevel: 0,
                        text: [
                            '{value|￥' + 44234 + '}',
                            '{name|Banlance}'
                        ].join('\n'),
                        rich: {
                            value: {
                                color: '#303133',
                                fontSize: 30,
                                fontWeight: 'bold',
                                lineHeight: 30
                            },
                            name: {
                                color: '#909399',
                                lineHeight: 20
                            }
                        },
                        top: 'center',
                        left: 'center',
                        textStyle: {
                            rich: {
                                value: {
                                    color: '#303133',
                                    fontSize: 40,
                                    fontWeight: 'bold',
                                    lineHeight: 40
                                },
                                name: {
                                    color: '#909399',
                                    lineHeight: 20
                                }
                            }
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} {b}: {c} ({d}%)'
                    },
                    series: [
                        {
                            name: 'Balance',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: 'center'
                            },

                            labelLine: {
                                show: false
                            },
                            data: [
                                { value: 335, name: '' },
                                { value: 310, name: '' },
                                { value: 234, name: '' },
                                { value: 135, name: '' }
                            ]
                        }
                    ],
                    color: ['#F9F9F9', '#1C2C46', '#1487A2', '#FB313D']
                }
                this.charts.setOption(option)
                on(window, 'resize', this.resize)
            })
        },
        beforeDestroy () {
            off(window, 'resize', this.resize)
        },
        resize () {
            this.charts.resize()
        }
    }
}
</script>

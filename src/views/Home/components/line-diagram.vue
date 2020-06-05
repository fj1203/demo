<template>
  <div>
    <div ref="line" style="width: 100%;height: 400px;"></div>
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
                this.charts = echarts.init(this.$refs.line, 'tdTheme')
                const option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        },
                        formatter (item) {
                            return `${item[0].value}`
                        }
                    },
                    legend: {
                        data: ['交易数量']
                    },
                    toolbox: {
                        show: false,
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: [
                        {
                            splitLine: { show: false },
                            type: 'category',
                            data: this.xAxisData,
                            axisLabel: {
                                interval: 0,
                                rotate: 15
                            }
                        }
                    ],
                    yAxis: [
                        {
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    type: 'dashed'
                                }
                            },
                            type: 'value',
                            max: 100,
                            min: 0,
                            splitNumber: 4,
                            axisLabel: {
                                show: true,
                                formatter: '{value} %'
                            }
                            // boundaryGap: [0, 0.1]
                        }
                    ],
                    grid: {
                        left: '1%',
                        right: '0',
                        bottom: '2%',
                        containLabel: true
                    },
                    series: [
                        {
                            // name: '交易数量',
                            type: 'line',
                            smooth: true,
                            symbolSize: 8,
                            itemStyle: {
                                normal: {
                                    borderColor: '#56B2CB',
                                    borderWidth: 3,
                                    color: '#000',
                                    textStyle: { color: '#000' },
                                    lineStyle: {
                                        color: '#56B2CB',
                                        width: 3
                                    }
                                }
                            },
                            data: this.data1,
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top',
                                    formatter: '{c}%'
                                }
                            }
                        }
                    ]
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

<template>
    <!-- 资源渠道选择器 -->
    <div class="roleSelectCont">
        <div>
            <a-input v-model="value" placeholder="Basic usage" />
            <svg viewBox="64 64 896 896" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
        </div>
        <div></div>
        <div></div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {},
    computed: {},
    watch: { },
    mounted: function () { },
};
</script>

<style lang="less">
.roleSelectCont {
    position: fixed;
    top: 20px;
    width: 680px;
    left: calc(50% + 130px);
    transform: translate(-50%, 0%);
    z-index: 100;

    .buttonIsSelected{
        background-color: #191a23!important;

    }

    //源选择
    .sourceOptionsCont {
        display: flex;
        justify-content: center;

        .outerwearCont {
            width: 100%;
            display: flex;
            justify-content: center;
            gap: 10px;
            border: #858699 1px solid;
            padding: 5px 20px;
            border-radius: 5px;
            background: #1d1e2b;

            .toggleSourceButtonCont {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 10px;
                width: 160px;
                min-width: 160px;
                // span{
                //     width: 97px;
                //     text-align: left;
                // }
            }
        }
    }

    //源控制
    .sourceConfigCont {
        width: 100%;
        display: flex;
        justify-content: center;
        position: relative;
        top: 10px;

        // flex-direction: column;
        .sourceConfigBorderCont {
            width: 100%;
            border: #858699 1px solid;
            border-radius: 5px;
            background: #1d1e2b;
            display: flex;
            flex-direction: column;

            // gap: 5px;
            .sourceConfigInfoCont {
                display: flex;
                flex-direction: column;
                padding: 5px 10px;
                border-bottom: #3f404f 1px solid;

                .sourceConfigInfoTitle {
                    color: #eeeffc;
                }

                .sourceConfigInfoPopular {
                    color: #858699;
                    font-size: 12px;
                }

                .configOptionsCont {
                    width: 200px;
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    border: #3f404f 1px solid;
                    padding: 4px 20px;
                    border-radius: 5px;
                    background: #1d1e2b;
                    height: 51px;
                    position: relative;
                    left: 245px;
                    top: -25px;

                    .configButtonClass {
                        span {
                            width: 58px;
                        }
                    }

                }
            }
        }
    }

    .ant-btn-primary {
        border-color: #858699 !important;
        color: #eeeffc !important;
        font-weight: bold !important;
    }

    .ant-btn-default {
        border-color: transparent !important;
        color: #858699 !important;
        font-weight: bold !important;
    }

    .ant-btn-primary:hover,
    .ant-btn-default:hover,
    .ant-btn:hover,
    .ant-btn:focus,
    .ant-btn-background-ghost.ant-btn-primary {
        color: #eeeffc !important;
        font-weight: bold !important;

    }
}</style>
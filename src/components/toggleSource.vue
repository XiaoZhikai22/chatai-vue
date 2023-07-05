<template>
    <!-- 资源渠道选择器 -->
    <div class="toggleSourceCont" @mouseenter="sourceButtonMouseenter()" @mouseleave="sourceButtonMouseleave()">
        <div class="sourceOptionsCont" @mouseleave="sourceOptionsContMouseleave()">
            <div class="outerwearCont">
                <a-button
                    :class="sourceConfig.toggleSourceValue === '2' ? 'buttonIsSelected toggleSourceButtonCont' : 'toggleSourceButtonCont'"
                    :type="sourceConfig.toggleSourceValue === '2' ? 'primary' : 'default'" ghost
                    @click.stop="sourceButtonClick('toggleSourceValue', '2')" @mouseenter="sourceButtonMouseenter('2')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none">
                        <g clip-path="url(#openai_svg__a)">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M7.385.007a4.156 4.156 0 0 0-2.978 1.568c-.24.304-.463.699-.594 1.055l-.058.156-.219.056A4.031 4.031 0 0 0 .72 5.452a3.94 3.94 0 0 0 .23 3.13c.14.271.315.535.483.729l.12.139-.039.131c-.115.392-.159.706-.159 1.133 0 .657.132 1.214.423 1.788a4.087 4.087 0 0 0 2.817 2.154c.49.1 1.106.116 1.516.039l.177-.033.214.201c.476.448.96.738 1.561.935.521.17.985.228 1.528.191 1.337-.092 2.469-.739 3.194-1.825.157-.236.244-.402.374-.718l.103-.249.111-.027a4.308 4.308 0 0 0 1.804-.94 4.082 4.082 0 0 0 1.24-2.16 3.994 3.994 0 0 0-.75-3.26c-.078-.1-.156-.2-.174-.225-.03-.042-.029-.06.03-.29.097-.378.128-.623.128-1.017 0-1.036-.386-1.985-1.132-2.78-.591-.63-1.53-1.096-2.445-1.214a5.048 5.048 0 0 0-1.183.022l-.179.034-.197-.19A4.116 4.116 0 0 0 8.645.125a4.586 4.586 0 0 0-1.26-.117Zm.872 1.098c.235.05.547.159.752.26.176.086.52.304.566.358.016.02-.373.25-1.648.975-.918.522-1.705.98-1.748 1.02a.593.593 0 0 0-.122.16c-.042.089-.043.109-.053 2.394l-.01 2.304-.64-.363c-.353-.2-.666-.379-.696-.398l-.055-.035V5.833c0-1.222.008-2.01.021-2.116.067-.536.26-1.017.588-1.466a3.82 3.82 0 0 1 .664-.642c.353-.247.856-.456 1.234-.513.09-.013.177-.027.193-.031.088-.021.815.01.954.04Zm3.819 1.232c1.554.275 2.64 1.657 2.514 3.198a2.432 2.432 0 0 1-.03.265c-.005.009-.615-.332-1.354-.756-2.133-1.222-2.065-1.185-2.171-1.2a.593.593 0 0 0-.185.01c-.051.013-.938.505-2.067 1.147a142.354 142.354 0 0 1-2.012 1.134c-.034.008-.036-.036-.036-.771 0-.718.003-.782.035-.81.068-.057 3.305-1.885 3.507-1.98.236-.11.552-.207.812-.246.285-.044.712-.04.986.01ZM3.63 7.971a.558.558 0 0 0 .133.16c.044.033.96.56 2.034 1.17 1.074.61 1.953 1.115 1.953 1.122 0 .027-1.333.77-1.38.77-.045 0-3.031-1.683-3.421-1.928a3.04 3.04 0 0 1-1.333-1.937 3.356 3.356 0 0 1 0-1.165c.095-.422.223-.728.439-1.045.36-.53.832-.905 1.452-1.154l.05-.02.011 1.963.01 1.965.052.099Zm8.7-2.226c1.896 1.08 1.735.985 1.947 1.146a2.955 2.955 0 0 1 1.169 2.35c0 .513-.097.927-.328 1.383a3.15 3.15 0 0 1-1.05 1.149c-.134.084-.54.29-.577.29-.008 0-.018-.875-.02-1.946l-.006-1.946-.047-.092a.654.654 0 0 0-.111-.153c-.036-.034-.952-.568-2.035-1.187-1.083-.62-1.98-1.137-1.995-1.15-.02-.018.123-.107.65-.406.371-.212.69-.384.708-.385.018 0 .781.426 1.695.947Zm-2.921.76.857.485V9.01l-.864.49c-.475.27-.871.494-.88.497-.009.003-.412-.219-.896-.494l-.881-.5V6.995l.873-.497c.496-.283.886-.493.903-.487.017.006.416.228.888.495Zm2.259 1.29c.318.181.613.351.655.378l.076.048v1.947c0 2.075-.003 2.143-.102 2.53-.475 1.861-2.613 2.811-4.34 1.928-.205-.105-.555-.34-.54-.362.004-.008.758-.44 1.676-.962 1.097-.623 1.698-.975 1.752-1.028.162-.157.153-.003.153-2.575v-2.28l.046.023.624.353Zm-1.4 2.845v.797l-1.66.942c-.913.518-1.733.978-1.822 1.022a3.405 3.405 0 0 1-.742.247c-.183.04-.267.047-.598.047-.29 0-.429-.01-.558-.036-.982-.202-1.779-.814-2.193-1.683a2.683 2.683 0 0 1-.278-1.163c-.01-.278.01-.574.041-.604.005-.005.748.412 1.65.925.904.514 1.674.95 1.713.97.104.052.231.067.341.04.062-.014.803-.425 2.095-1.16 1.1-.626 2.002-1.14 2.005-1.14.003-.001.005.357.005.796Z"
                                clip-rule="evenodd"></path>
                        </g>
                        <defs>
                            <clipPath id="openai_svg__a">
                                <path fill="#fff" d="M.5 0h16v16H.5z"></path>
                            </clipPath>
                        </defs>
                    </svg>
                    {{ sourceButtonInfo["2"] }}
                </a-button>
                <a-button
                    :class="sourceConfig.toggleSourceValue === '3' ? 'buttonIsSelected toggleSourceButtonCont' : 'toggleSourceButtonCont'"
                    :type="sourceConfig.toggleSourceValue === '3' ? 'primary' : 'default'" ghost
                    @click.stop="sourceButtonClick('toggleSourceValue', '3')" @mouseenter="sourceButtonMouseenter('3')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none">
                        <g clip-path="url(#openai_svg__a)">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M7.385.007a4.156 4.156 0 0 0-2.978 1.568c-.24.304-.463.699-.594 1.055l-.058.156-.219.056A4.031 4.031 0 0 0 .72 5.452a3.94 3.94 0 0 0 .23 3.13c.14.271.315.535.483.729l.12.139-.039.131c-.115.392-.159.706-.159 1.133 0 .657.132 1.214.423 1.788a4.087 4.087 0 0 0 2.817 2.154c.49.1 1.106.116 1.516.039l.177-.033.214.201c.476.448.96.738 1.561.935.521.17.985.228 1.528.191 1.337-.092 2.469-.739 3.194-1.825.157-.236.244-.402.374-.718l.103-.249.111-.027a4.308 4.308 0 0 0 1.804-.94 4.082 4.082 0 0 0 1.24-2.16 3.994 3.994 0 0 0-.75-3.26c-.078-.1-.156-.2-.174-.225-.03-.042-.029-.06.03-.29.097-.378.128-.623.128-1.017 0-1.036-.386-1.985-1.132-2.78-.591-.63-1.53-1.096-2.445-1.214a5.048 5.048 0 0 0-1.183.022l-.179.034-.197-.19A4.116 4.116 0 0 0 8.645.125a4.586 4.586 0 0 0-1.26-.117Zm.872 1.098c.235.05.547.159.752.26.176.086.52.304.566.358.016.02-.373.25-1.648.975-.918.522-1.705.98-1.748 1.02a.593.593 0 0 0-.122.16c-.042.089-.043.109-.053 2.394l-.01 2.304-.64-.363c-.353-.2-.666-.379-.696-.398l-.055-.035V5.833c0-1.222.008-2.01.021-2.116.067-.536.26-1.017.588-1.466a3.82 3.82 0 0 1 .664-.642c.353-.247.856-.456 1.234-.513.09-.013.177-.027.193-.031.088-.021.815.01.954.04Zm3.819 1.232c1.554.275 2.64 1.657 2.514 3.198a2.432 2.432 0 0 1-.03.265c-.005.009-.615-.332-1.354-.756-2.133-1.222-2.065-1.185-2.171-1.2a.593.593 0 0 0-.185.01c-.051.013-.938.505-2.067 1.147a142.354 142.354 0 0 1-2.012 1.134c-.034.008-.036-.036-.036-.771 0-.718.003-.782.035-.81.068-.057 3.305-1.885 3.507-1.98.236-.11.552-.207.812-.246.285-.044.712-.04.986.01ZM3.63 7.971a.558.558 0 0 0 .133.16c.044.033.96.56 2.034 1.17 1.074.61 1.953 1.115 1.953 1.122 0 .027-1.333.77-1.38.77-.045 0-3.031-1.683-3.421-1.928a3.04 3.04 0 0 1-1.333-1.937 3.356 3.356 0 0 1 0-1.165c.095-.422.223-.728.439-1.045.36-.53.832-.905 1.452-1.154l.05-.02.011 1.963.01 1.965.052.099Zm8.7-2.226c1.896 1.08 1.735.985 1.947 1.146a2.955 2.955 0 0 1 1.169 2.35c0 .513-.097.927-.328 1.383a3.15 3.15 0 0 1-1.05 1.149c-.134.084-.54.29-.577.29-.008 0-.018-.875-.02-1.946l-.006-1.946-.047-.092a.654.654 0 0 0-.111-.153c-.036-.034-.952-.568-2.035-1.187-1.083-.62-1.98-1.137-1.995-1.15-.02-.018.123-.107.65-.406.371-.212.69-.384.708-.385.018 0 .781.426 1.695.947Zm-2.921.76.857.485V9.01l-.864.49c-.475.27-.871.494-.88.497-.009.003-.412-.219-.896-.494l-.881-.5V6.995l.873-.497c.496-.283.886-.493.903-.487.017.006.416.228.888.495Zm2.259 1.29c.318.181.613.351.655.378l.076.048v1.947c0 2.075-.003 2.143-.102 2.53-.475 1.861-2.613 2.811-4.34 1.928-.205-.105-.555-.34-.54-.362.004-.008.758-.44 1.676-.962 1.097-.623 1.698-.975 1.752-1.028.162-.157.153-.003.153-2.575v-2.28l.046.023.624.353Zm-1.4 2.845v.797l-1.66.942c-.913.518-1.733.978-1.822 1.022a3.405 3.405 0 0 1-.742.247c-.183.04-.267.047-.598.047-.29 0-.429-.01-.558-.036-.982-.202-1.779-.814-2.193-1.683a2.683 2.683 0 0 1-.278-1.163c-.01-.278.01-.574.041-.604.005-.005.748.412 1.65.925.904.514 1.674.95 1.713.97.104.052.231.067.341.04.062-.014.803-.425 2.095-1.16 1.1-.626 2.002-1.14 2.005-1.14.003-.001.005.357.005.796Z"
                                clip-rule="evenodd"></path>
                        </g>
                        <defs>
                            <clipPath id="openai_svg__a">
                                <path fill="#fff" d="M.5 0h16v16H.5z"></path>
                            </clipPath>
                        </defs>
                    </svg>

                    {{ sourceButtonInfo["3"] }}</a-button>
                <a-button
                    :class="sourceConfig.toggleSourceValue === '4' ? 'buttonIsSelected toggleSourceButtonCont' : 'toggleSourceButtonCont'"
                    :type="sourceConfig.toggleSourceValue === '4' ? 'primary' : 'default'" ghost
                    @click.stop="sourceButtonClick('toggleSourceValue', '4')" @mouseenter="sourceButtonMouseenter('4')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none">
                        <path fill="currentColor" fill-rule="evenodd"
                            d="M3.512 6.065c-.777 1.87-1.772 4.262-2.212 5.317l-.8 1.92 1.229.017c.676.01 1.24.006 1.255-.008.015-.014.221-.505.459-1.09l.431-1.066h4.718l.117.293.44 1.089.321.797h1.258c.98 0 1.25-.018 1.224-.082a3382.243 3382.243 0 0 1-3.78-9.073l-.625-1.512H4.924L3.512 6.065ZM9.68 2.788c.018.066 1.007 2.466 2.198 5.332l2.165 5.213h1.244c.684 0 1.23-.021 1.213-.048-.047-.074-4.3-10.303-4.354-10.472-.047-.144-.061-.146-1.274-.146-1.16 0-1.224.006-1.192.12ZM6.576 6.195c.178.439.515 1.265.75 1.838l.425 1.04-.739.019c-.406.01-1.089.01-1.517 0l-.78-.019.358-.878.748-1.837c.215-.528.4-.96.41-.96.012 0 .167.36.345.797Z"
                            clip-rule="evenodd"></path>
                    </svg>
                    {{ sourceButtonInfo["4"] }}
                </a-button>
                <a-button
                    :class="sourceConfig.toggleSourceValue === '5' ? 'buttonIsSelected toggleSourceButtonCont' : 'toggleSourceButtonCont'"
                    :type="sourceConfig.toggleSourceValue === '5' ? 'primary' : 'default'" ghost
                    @click.stop="sourceButtonClick('toggleSourceValue', '5')" @mouseenter="sourceButtonMouseenter('5')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none">
                        <path fill="currentColor" fill-rule="evenodd"
                            d="M3.512 6.065c-.777 1.87-1.772 4.262-2.212 5.317l-.8 1.92 1.229.017c.676.01 1.24.006 1.255-.008.015-.014.221-.505.459-1.09l.431-1.066h4.718l.117.293.44 1.089.321.797h1.258c.98 0 1.25-.018 1.224-.082a3382.243 3382.243 0 0 1-3.78-9.073l-.625-1.512H4.924L3.512 6.065ZM9.68 2.788c.018.066 1.007 2.466 2.198 5.332l2.165 5.213h1.244c.684 0 1.23-.021 1.213-.048-.047-.074-4.3-10.303-4.354-10.472-.047-.144-.061-.146-1.274-.146-1.16 0-1.224.006-1.192.12ZM6.576 6.195c.178.439.515 1.265.75 1.838l.425 1.04-.739.019c-.406.01-1.089.01-1.517 0l-.78-.019.358-.878.748-1.837c.215-.528.4-.96.41-.96.012 0 .167.36.345.797Z"
                            clip-rule="evenodd"></path>
                    </svg>
                    {{ sourceButtonInfo["5"] }}
                </a-button>
            </div>
        </div>
        <div class="sourceConfigCont" v-show="sourceConfigContShow">
            <div class="sourceConfigBorderCont">
                <div class="sourceConfigInfoCont">
                    <div class="sourceConfigInfoTitle">
                        {{ sourceConfigInfoTitle[toggleSourceValueHover] }}
                    </div>
                    <div class="sourceConfigInfoPopular">
                        {{ sourceConfigInfoPopular[toggleSourceValueHover] }}
                    </div>
                </div>
                <div class="sourceConfigInfoCont2">
                    <div class="roleInfoCont">
                        <div class="sourceConfigInfoTitle">Enable personas</div>
                        <div class="sourceConfigInfoPopular">
                            Use the default model or apply a persona.
                        </div>
                    </div>

                    <!-- <div class="configOptionsCont2" style="position: relative; left: -15px; top: 0px; height: 40px">
                        <a-switch class="roleSwitchCont" v-model="sourceConfig.rpleChecked"/>
                    </div> -->
                </div>
                <div class="sourceConfigInfoCont"
                    style=" flex-direction: row; justify-content: space-between; align-items: center;">
                    <div class="sourceConfigInfoTitle">Access internet</div>
                    <div class="configOptionsCont" style="position: relative; left: -15px; top: 0px; height: 40px">
                        <a-button
                            :class="sourceConfig.AccessValue === '2' ? 'buttonIsSelected configButtonClass' : 'configButtonClass'"
                            :type="sourceConfig.AccessValue === '2' ? 'primary' : 'default'" ghost
                            @click.stop="sourceButtonClick('AccessValue', '2')">Disabled</a-button>
                        <a-button
                            :class="sourceConfig.AccessValue === '3' ? 'buttonIsSelected configButtonClass' : 'configButtonClass'"
                            :type="sourceConfig.AccessValue === '3' ? 'primary' : 'default'" ghost
                            @click.stop="sourceButtonClick('AccessValue', '3')">Enabled</a-button>
                    </div>
                </div>
                <div class="sourceConfigInfoCont"
                    style=" flex-direction: row; justify-content: space-between; align-items: center;">
                    <div class="sourceConfigInfoTitle">Save chats</div>
                    <div class="configOptionsCont" style="position: relative; left: -15px; top: 0px; height: 40px">
                        <a-button
                            :class="sourceConfig.SaveValue === '2' ? 'buttonIsSelected configButtonClass' : 'configButtonClass'"
                            :type="sourceConfig.SaveValue === '2' ? 'primary' : 'default'" ghost
                            @click.stop="sourceButtonClick('SaveValue', '2')">Manual</a-button>
                        <a-button
                            :class="sourceConfig.SaveValue === '3' ? 'buttonIsSelected configButtonClass' : 'configButtonClass'"
                            :type="sourceConfig.SaveValue === '3' ? 'primary' : 'default'" ghost
                            @click.stop="sourceButtonClick('SaveValue', '3')">Auto</a-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sourceConfig: {
                toggleSourceValue: "2",
                AccessValue: "2",
                SaveValue: "2",
                rpleChecked: false,
            },
            sourceButtonInfo: {
                "2": "GPT-3.5",
                "3": "GPT-4.0",
                "4": "Claude Instant",
                "5": "Claude+"
            },
            toggleSourceValueHover: "2",
            sourceConfigContShow: false,
            toggleSourceContTop: false,
            sourceConfigInfoTitle: {
                2: "Very fast, great for most everyday tasks.",
                3: "Most capable model, best for complex tasks requiring advanced reasoning.",
                4: "Very fast, great for most everyday tasks",
                5: "Balances fast responses with advanced reasoning. Best for creative andcomplex tasks.",
            },
            sourceConfigInfoPopular: {
                2: "Unlimited messages every 3 hours",
                3: "5 messages every 3 hours",
                4: "Unlimited messages every 3 hours",
                5: "5 messages every 3 hours",
            },
        };
    },
    methods: {
        sourceButtonClick(key, value) {
            this.sourceConfig[key] = value;
        },
        sourceButtonMouseenter(key) {
            if (key) {
                this.toggleSourceValueHover = key;
            }
            this.sourceConfigContShow = true;
            this.toggleSourceContTop = true;
        },
        sourceButtonMouseleave() {
            let that = this;
            this.toggleSourceContTop = false;
            setTimeout(() => {
                that.$nextTick(() => {
                    if (that.sourceConfigContShow && !that.toggleSourceContTop) {
                        that.sourceConfigContShow = false;
                    }
                });
            }, 1000);
        },
        sourceOptionsContMouseleave() {
            this.toggleSourceValueHover = JSON.parse(
                JSON.stringify(this.sourceConfig.toggleSourceValue)
            );
        },
    },
    computed: {},
    watch: {
        "sourceConfig.toggleSourceValue"() {
            // let message = "Message "+this.sourceButtonInfo[this.sourceConfig.toggleSourceValue];
            this.$emit('sourceChange', this.sourceButtonInfo[this.sourceConfig.toggleSourceValue])
        }
    },
    mounted: function () { },
};
</script>

<style lang="less">
.toggleSourceCont {
    position: fixed;
    top: 20px;
    width: 680px;
    left: calc(50% + 130px);
    transform: translate(-50%, 0%);
    z-index: 100;

    .buttonIsSelected {
        background-color: #191a23 !important;

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
                padding: 5px 0px 5px 10px;
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

            .sourceConfigInfoCont2 {
                display: flex;
                flex-direction: row;
                padding: 5px 0px 5px 10px;
                border-bottom: #3f404f 1px solid;
                align-items: center;
                justify-content: space-between;

                .roleInfoCont {
                    display: flex;
                    flex-direction: column;

                    .sourceConfigInfoTitle {
                        color: #eeeffc;
                    }

                    .sourceConfigInfoPopular {
                        color: #858699;
                        font-size: 12px;
                    }

                }

                .configOptionsCont2 {
                    width: auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    padding: 4px 20px;
                    border-radius: 5px;
                    background: #1d1e2b;
                    height: 51px;
                    position: relative;
                    left: 245px;
                    top: -25px;

                    .roleSelectCont{
                        width: 200px;
                        background-color: #1d232a!important;

                        .roleSelectOptionCont{
                            background-color: #292a35!important;
                            color: #eeeffc;
                            display: flex!important;
                            flex-direction: row!important;
                            justify-content: center;
                            align-items: center;
                        }
                        .ant-select-selection-selected-value{
                            display: flex!important;
                            flex-direction: row!important;
                            justify-content: center;
                            align-items: center;
                        }
                        .ant-select-selection--single {
                            background-color: #292a35!important;
                            color: #eeeffc;

                        }
                        .ant-select-arrow-icon{
                            color: #eeeffc;
                        }
                    } 
                    .roleSwitchCont{
                    }
                    .ant-switch {
                        border: #3f404f 2px solid;
                        background-color: #1d232a;
                    }

                    .ant-switch-checked {
                        background-color: #1d232a;
                    }
                    .roleSelectCont{} .roleSwitchCont{}


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
}
</style>
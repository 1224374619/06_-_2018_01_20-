var calculator = new Vue({
    el: '#div',
    data: {
        inputShow: {
            value: '0',
            name: ''
        },
        string: [],
        type: ''
    },
    components: {
        'input-box': {
            props: ['inputShow'],
            computed: {
                value: function () {
                    return this.inputShow.value
                }
            },
            template: '<input id="input-box" type="text" size="21" maxlength="21" v-model="value" readonly="readonly">'
        },
        'btn-list':{
            template:'<div id="btn-list"><slot></slot></div>'
        }
    },
    methods: {
        result: function (value) {
            1
        },
        typetoinput: function (event) {
        },
        operator: function (inputvalue) {
            2
        }


    }
})
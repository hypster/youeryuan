import index from './index.vue';

let globalOptions = {
    show: false,
    closable: true,
    title: {
        content: '',
        cssClass: '',
        style: {}
    },
    message: {
        content: '',
        cssClass: '',
        style: {}
    },
    buttons: []
};

let instance;

const Message = function(config = {}) {
    let Tpl = this.extend(index);
    instance = new Tpl();
    config = {
        ...globalOptions,
        ...config
    };
    for(let key in config) {
        if(config.hasOwnProperty(key)) {
            instance.$data[key] = config[key];
        }
    }
    instance.$data.show = true;
    document.body.style.overflow = 'hidden';
    document.body.appendChild(instance.$mount().$el);
}

const Alert = function(message, callback){
    let alertConfig = {
        type: 'info',
        message: {
            content: message
        }
    };

    Message.call(this, {
        ...globalOptions,
        ...alertConfig
    });
}

const Info = function(message, callback){
    let alertConfig = {
        type: 'info',
        message: {
            content: message
        }
    };

    Message.call(this, {
        ...globalOptions,
        ...alertConfig
    });
}

const Errors = function(message, callback){
    let alertConfig = {
        type: 'error',
        color: 'error',
        message: {
            content: message
        }
    };

    Message.call(this, {
        ...globalOptions,
        ...alertConfig
    });
}

const Confirm = function(message, callback){
    let confirmConfig = {
        type: 'info',
        message: {
            content: message
        },
        buttons: [{
            label: '确定',
            style: {
                margin: '0',
                padding: '3%',
                width: '50%',
                height: '40%',
                boxSizing: 'border-box',
                border: 'none',
                borderRight: '1px solid #f8f8f8',
                lineHeight: '2'
            },
            action: function(){
                callback && callback(true);
                Dismiss();
            }
        }, {
            label: '取消',
            style: {
                margin: '0',
                padding: '3%',
                width: '50%',
                height: '40%',
                boxSizing: 'border-box',
                border: 'none',
                lineHeight: '2'
            },
            action: function(){
                Dismiss();
                callback && callback(false);
            }
        }],
        msgFooter: {
            style: {
                padding: '0'
            }
        }
    };
    
    Message.call(this, {
        ...globalOptions,
        ...confirmConfig
    });
}

const Dismiss = () => {
    instance.$data.show = false;
    document.body.style.overflow = 'auto';
}

export default {
    install(Vue) {
        Vue.prototype.$Message = Message.bind(Vue);
        Vue.prototype.$Message.alert = Alert.bind(Vue);
        Vue.prototype.$Message.info = Info.bind(Vue);
        Vue.prototype.$Message.error = Errors.bind(Vue);
        Vue.prototype.$Message.confirm = Confirm.bind(Vue);
        Vue.prototype.$Message['dismiss'] = Dismiss;
    }
}
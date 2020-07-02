import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const allowOrigins = [
    "vuejs.org",
    "cli.vuejs.org"
];
// define new-link
Vue.component('new-link', {
    functional: true,
    render(h, { data, slots, props }) {
        data.props = props;
        const defaultSlots = slots().default
        const isExternalDomain = Boolean(props.href && allowOrigins.includes(new URL(props.href).origin));
        return h('a', {
            ...data,
            attrs: {
                rel: data.props.rel || 'noopener',
                target: isExternalDomain ? "_blank" : undefined,
                ...data.attrs,
            }
        }, defaultSlots);
    },
});

new Vue({
    render: h => h(App),
}).$mount('#app')

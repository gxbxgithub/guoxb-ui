import GButton from './button';

const install = function(Vue, options) {
    if (install.installed) return;

    Vue.component(GButton.name, GButton);
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    GButton
}
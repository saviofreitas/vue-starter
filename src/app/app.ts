import Vue           from 'vue';
import VueI18n       from 'vue-i18n';
import VeeValidate   from 'vee-validate';
import { Store }     from 'vuex';
import { sync }      from 'vuex-router-sync';
import { VueRouter } from 'vue-router/types/router';
import { i18n }      from './shared/plugins/i18n/i18n';
import { store }     from './store';
import { router }    from './router';
import { IState }    from './state';
import App           from './app/App/App.vue';

Vue.use(VeeValidate, { inject: false });

export interface IApp {
  app: Vue;
  router: VueRouter;
  store: Store<IState>;
  i18n: VueI18n;
}

export const createApp = (): IApp => {
  sync(store, router);
  const app: Vue = new Vue(
    {
      router,
      store,
      i18n,
      render: (h) => h(App),
    },
  );

  return { app, router, store, i18n };
};

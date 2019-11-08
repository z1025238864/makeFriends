import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'element-ui/lib/theme-chalk/index.css';
import HeadNav from './components/HeadNav.vue'
import PersonalNav from './components/PersonalNav.vue'
Vue.component("HeadNav",HeadNav)
Vue.component("PersonalNav",PersonalNav)
import { 
  Button, 
  Select,
  Container,
  Header,
  Main,
  Menu,
  MenuItem,
  Submenu,
  Input,
  Radio,
  RadioGroup,
  DatePicker,
  Carousel,
  CarouselItem,
  Card,
  Footer,
  Backtop,
  Tabs,
  TabPane,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Dialog,
  RadioButton,
  Pagination
 } from 'element-ui'; 
Vue.config.productionTip = false;
Vue.use(Button)
  .use(Select)
  .use(Container)
  .use(Header)
  .use(Main)
  .use(Menu)
  .use(MenuItem)
  .use(Submenu)
  .use(Input)
  .use(Radio)
  .use(RadioGroup)
  .use(DatePicker)
  .use(Carousel)
  .use(CarouselItem)
  .use(Card)
  .use(Footer)
  .use(Backtop)
  .use(Tabs)
  .use(TabPane)
  .use(Dropdown)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Dialog)
  .use(Radio)
  .use(RadioButton)
  .use(Pagination)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

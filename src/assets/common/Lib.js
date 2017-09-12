import Vue from 'vue'
import {Button,Loading,Dialog,MessageBox,Message,Notification} from 'element-ui'
import 'components/index'

Vue.use(Button);
Vue.use(Loading);
Vue.use(Dialog);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
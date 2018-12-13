import Vue from 'vue'
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'

Amplify.Logger.LOG_LEVEL = 'DEBUG'
Amplify.configure(process.env.Amplify)

Vue.use(AmplifyPlugin, AmplifyModules)

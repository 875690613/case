import Vue from 'vue'
import Router from 'vue-router'
import Registered from '@/components/page/Registered'
import CourseDetails from '@/components/page/CourseDetails'
import Ready from '@/components/page/Ready'
import Problem from '@/components/page/Problem'
import AnswerOver from "@/components/page/AnswerOver"
import Index from "@/components/page/Index"
import mySetting from '@/components/page/mySetting'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name: 'registered',
      component: Registered
    },
    {
      path:'/courseDetails',
      name: 'courseDetails',
      component: CourseDetails
    },
    {
      path:'/ready',
      name:'ready',
      component:Ready
    },
    {
      path:'/problem',
      name:'problem',
      component:Problem
    },
    {
      path:'/answerOver',
      name:'answerOver',
      component:AnswerOver
    },
    {
      path:'/index',
      name:'index',
      component:Index
    },
    {
      path:'/mySetting',
      name:'mySetting',
      component:mySetting

    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Registered from '@/components/page/Registered'
import CourseDetails from '@/components/page/CourseDetails'
import Ready from '@/components/page/Ready'
import Problem from '@/components/page/Problem'
import AnswerOver from "@/components/page/AnswerOver"
import Index from "@/components/page/Index"
import MySetting from '@/components/page/MySetting'
import School from "@/components/page/School"
import PositionDetails from "@/components/page/PositionDetails"
import SchoolList from '@/components/page/SchoolList'
import SchoolDetails from '@/components/page/SchoolDetails'
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
      component:MySetting

    },
    {
      path:'/SchoolDetails',
      name:'SchoolDetails',
      component:SchoolDetails
    },
    {
      path:'/positionDetails',
      name:'positionDetails',
      component:PositionDetails
      // props: true
    },
    {
      path:'/schoolList',
      name:'schoolList',
      component:SchoolList
    },
    {
      path:'/schoolDetails',
      name:'schoolDetails',
      compenent:SchoolDetails
    }
  ]
})

import Vue from 'vue';
import Router from 'vue-router';
import Personal from '@/components/personal';
import Objective from '@/components/objective';
import Education from '@/components/education';
import Skills from '@/components/skills';
import Experiences from '@/components/projectExperiences';
import errorpage from '@/components/errorpage';
import photo from '@/components/photo';
import life from '@/components/life';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'personal',
      component: Personal,
      meta:{
        index: 1
      },
      children: [{
        path:"life",
        component: life
      }]
    },
    {
      path:"/objective",
      name:"objective",
      component: Objective,
      meta:{
        index: 2
      }
    },
    {
      path:"/education",
      name:"education",
      component:Education,
      meta:{
        index: 3
      },
      children: [{
        path:"photo",
        component:photo
      }]
    },
    {
      path:"/skills",
      name:"skills",
      component:Skills,
      meta:{
        index: 4
      }
    },
    {
      path:"/projectExperiences",
      name:"experiences",
      component: Experiences,
      meta:{
        index: 5
      }
    },
    {
      path:"*",
      component: errorpage
    }
  ],
  linkActiveClass: "active"
})

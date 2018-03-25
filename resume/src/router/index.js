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
      children: [{
        path:"life",
        component: life
      }]
    },
    {
      path:"/objective",
      name:"objective",
      component: Objective
    },
    {
      path:"/education",
      name:"education",
      component:Education,
      children: [{
        path:"photo",
        component:photo
      }]
    },
    {
      path:"/skills",
      name:"skills",
      component:Skills
    },
    {
      path:"/projectExperiences",
      name:"experiences",
      component: Experiences
    },
    {
      path:"*",
      component: errorpage
    }
  ],
  linkActiveClass: "active"
})

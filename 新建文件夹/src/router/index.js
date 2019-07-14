import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home.vue'
import Subject from '../components/subject/subject.vue'
import Movie from '../components/subject/subject_two/movie.vue'
import Book from '../components/subject/subject_two/book.vue'
import TV from '../components/subject/subject_two/TV.vue'
import City from '../components/subject/subject_two/city.vue'
import Music from '../components/subject/subject_two/music.vue'
import Status from '../components/status/status.vue'
import Group from '../components/group/group.vue'
import Mine from '../components/mine/mine.vue'

// import VueAwesomeSwiper from 'vue-awesome-swiper'
// // require styles
// import 'swiper/dist/css/swiper.css'
// Vue.use(VueAwesomeSwiper)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,

    },
    {
      path: '/home',
      name: 'home',
      component: Home,
     
    },
    {
      path: '/subject',
      name: 'subject',
      component: Subject,
      children:[
        {
          path: '/',
          name: 'movie',
          component: Movie, 
        },
        {
          path: '/subject/movie',
          name: 'movie',
          component: Movie, 
        },
        {
          path: '/subject/book',
          name: 'book',
          component: Book, 
        },
        {
          path: '/subject/TV',
          name: 'TV',
          component: TV, 
        },
        {
          path: '/subject/city',
          name: 'city',
          component: City, 
        },
        {
          path: '/Subject/music',
          name: 'music',
          component: Music, 
        },
      ]
    },
    {
      path: '/status',
      name: 'status',
      component: Status,
    },
    {
      path: '/group',
      name: 'group',
      component: Group,
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
    }
  ]
})

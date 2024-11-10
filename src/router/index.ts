import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import HomePage from "@/modules/landing/pages/HomePage.vue";
import NotFound404 from "@/modules/common/pages/NotFound404.vue";
import isAuthenticatedGuard from "@/modules/auth/guards/is-authenticated.guard";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //Landing
        {
            path: '/',
            name: 'landing',
            component: () => import('@/modules/landing/layouts/LandingLayout.vue'), // carga perezosa de rutas
            children: [
                {
                    path: '/',
                    name: 'HomePage',
                    component: HomePage
                },
                {
                    path: '/features',
                    name: 'features',
                    component: () => import('@/modules/landing/pages/FeaturePage.vue'),
                },
                {
                    path: '/pricing',
                    name: 'pricing',
                    component: () => import('@/modules/landing/pages/PricingPage.vue'),
                },
                {
                    path: '/contact',
                    name: 'contact',
                    component: () => import('@/modules/landing/pages/ContacPage.vue'),
                },
                {
                    path: '/pokemon/:id', //argumentos pasados por url
                    name: 'pokemon',
                    beforeEnter: [isAuthenticatedGuard],
                    //    props: true,
                    props: (route) => {
                        const id = Number(route.params.id);
                        return isNaN(id) ? { id: 1 } : { id };
                    },
                    component: () => import('@/modules/pokemons/pages/PokemonPage.vue'),
                }

            ]
        },
        //Auth
        {
            path: '/auth',
            redirect: { name: 'login' },
            component: () => import('@/modules/auth/layouts/AuthLayout.vue'), // carga perezosa de rutas
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: () => import('@/modules/auth/pages/LoginPage.vue'),
                },
                {
                    path: '/register',
                    name: 'register',
                    component: () => import('@/modules/auth/pages/RegisterPage.vue'),
                },
            ]
        },

        //Not found
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound404,
        },
    ],
});


export default router;
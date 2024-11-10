import type { RouteLocationNormalizedGeneric, RouteLocationNormalizedLoadedGeneric, NavigationGuardNext } from "vue-router";


const isAuthenticatedGuard = (to: RouteLocationNormalizedGeneric, from: RouteLocationNormalizedLoadedGeneric, next: NavigationGuardNext) => {

    const userId = localStorage.getItem('userId');
    localStorage.setItem('lastPath', to.path);

    if (!userId) {
        return next({
            name: 'login'
        })
    }

    return next(); //controlar la ruta a la que se enviara
}

export default isAuthenticatedGuard;

import { createRouter,createWebHashHistory  } from 'vue-router'
import routers from "@/router/router";
const router = createRouter({
    history: createWebHashHistory(),
    routes: routers
})

export default router

import * as routers from "../import/import"

export const routerList = [
    {
        path:'/:days',
        Component:routers.PageDays
    },
    {
        path:'/',
        Component:routers.PageMain
    }
]
import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),

    route("swordSlash/swordSlash", "routes/swordSlash/swordSlash.tsx")
] satisfies RouteConfig;

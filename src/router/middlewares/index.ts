import { LoadLayoutMiddleware } from "./LoadLayoutMiddleware"

interface MiddlewareMap {
    [key: string]: (...args: any[]) => Promise<unknown>
}

const middlewares: MiddlewareMap = {
    LoadLayoutMiddleware: LoadLayoutMiddleware,
};

export default middlewares;
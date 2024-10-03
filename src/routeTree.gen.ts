/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as HistoryImport } from './routes/history'

// Create Virtual Routes

const RegisterLazyImport = createFileRoute('/register')()
const LoginLazyImport = createFileRoute('/login')()
const HomeLazyImport = createFileRoute('/home')()
const ExploreLazyImport = createFileRoute('/explore')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const RegisterLazyRoute = RegisterLazyImport.update({
  path: '/register',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/register.lazy').then((d) => d.Route))

const LoginLazyRoute = LoginLazyImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const HomeLazyRoute = HomeLazyImport.update({
  path: '/home',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/home.lazy').then((d) => d.Route))

const ExploreLazyRoute = ExploreLazyImport.update({
  path: '/explore',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/explore.lazy').then((d) => d.Route))

const HistoryRoute = HistoryImport.update({
  path: '/history',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/history': {
      id: '/history'
      path: '/history'
      fullPath: '/history'
      preLoaderRoute: typeof HistoryImport
      parentRoute: typeof rootRoute
    }
    '/explore': {
      id: '/explore'
      path: '/explore'
      fullPath: '/explore'
      preLoaderRoute: typeof ExploreLazyImport
      parentRoute: typeof rootRoute
    }
    '/home': {
      id: '/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof HomeLazyImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/history': typeof HistoryRoute
  '/explore': typeof ExploreLazyRoute
  '/home': typeof HomeLazyRoute
  '/login': typeof LoginLazyRoute
  '/register': typeof RegisterLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/history': typeof HistoryRoute
  '/explore': typeof ExploreLazyRoute
  '/home': typeof HomeLazyRoute
  '/login': typeof LoginLazyRoute
  '/register': typeof RegisterLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/history': typeof HistoryRoute
  '/explore': typeof ExploreLazyRoute
  '/home': typeof HomeLazyRoute
  '/login': typeof LoginLazyRoute
  '/register': typeof RegisterLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/history' | '/explore' | '/home' | '/login' | '/register'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/history' | '/explore' | '/home' | '/login' | '/register'
  id:
    | '__root__'
    | '/'
    | '/history'
    | '/explore'
    | '/home'
    | '/login'
    | '/register'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  HistoryRoute: typeof HistoryRoute
  ExploreLazyRoute: typeof ExploreLazyRoute
  HomeLazyRoute: typeof HomeLazyRoute
  LoginLazyRoute: typeof LoginLazyRoute
  RegisterLazyRoute: typeof RegisterLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  HistoryRoute: HistoryRoute,
  ExploreLazyRoute: ExploreLazyRoute,
  HomeLazyRoute: HomeLazyRoute,
  LoginLazyRoute: LoginLazyRoute,
  RegisterLazyRoute: RegisterLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/history",
        "/explore",
        "/home",
        "/login",
        "/register"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/history": {
      "filePath": "history.tsx"
    },
    "/explore": {
      "filePath": "explore.lazy.tsx"
    },
    "/home": {
      "filePath": "home.lazy.tsx"
    },
    "/login": {
      "filePath": "login.lazy.tsx"
    },
    "/register": {
      "filePath": "register.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
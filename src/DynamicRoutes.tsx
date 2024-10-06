// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './Home'
// import Apps from './Apps'
// import News from './News'
// import Blog from './Blog'
// import Contacts from './Contacts'
// import Users from './Users'
// import Chats from './Chats'
// import Notes from './Notes'
// import Ecommerce from './Ecommerce'
// // Import your icons and other components here...

// const data = [
//   {
//     title: 'Dashboard',
//     icon: <HomeIcon />,
//     badge: 'New',
//     path: '/',
//     element: <Home />, // Add the component
//   },
//   { title: 'Apps', icon: <AppsIcon />, path: '/apps', element: <Apps /> },
//   {
//     title: 'Web',
//     icon: <PublicIcon />,
//     children: [
//       {
//         title: 'News',
//         icon: <SendIcon />,
//         path: '/web/news',
//         element: <News />, // Add the component
//       },
//       {
//         title: 'Blog',
//         icon: <DraftsIcon />,
//         children: [
//           {
//             title: 'Posts',
//             icon: <StarBorder />,
//             path: '/blog',
//             element: <Blog />, // Add the component
//           },
//         ],
//       },
//     ],
//   },
//   {
//     title: 'Contacts',
//     icon: <ContactsIcon />,
//     badge: '2',
//     path: '/contacts',
//     element: <Contacts />, // Add the component
//   },
//   { title: 'Users', icon: <PeopleIcon />, path: '/users', element: <Users /> },
//   {
//     title: 'Chats',
//     icon: <MarkUnreadChatAltIcon />,
//     badge: 5,
//     path: '/chats',
//     element: <Chats />, // Add the component
//   },
//   { title: 'Notes', icon: <NoteAltIcon />, path: '/notes', element: <Notes /> },
//   {
//     title: 'eCommerce',
//     icon: <StorefrontIcon />,
//     path: '/ecommerce',
//     element: <Ecommerce />, // Add the component
//   },
// ]

// const renderRoutes = (routes) => {
//   return routes.map((route, index) => (
//     <Route key={index} path={route.path} element={route.element}>
//       {route.children && renderRoutes(route.children)}
//     </Route>
//   ))
// }

// const RouterComponent = () => {
//   return (
//     <Router>
//       <Routes>{renderRoutes(data)}</Routes>
//     </Router>
//   )
// }

// export default RouterComponent

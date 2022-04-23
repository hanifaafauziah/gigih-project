// import React from 'react';
// import Header from "../../component/header";
// // import SongComponent from "../../components/Song";
// // import PlaylistComponent from "../../components/Playlist";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// function Landing() {
//   return (
//     <Router>
//         <Header/>

//         <Switch>
//           <Route path="/create-playlist" exact={true}>
//             {token ?
//               <div className="App">

//                 <a className="logout-button" href={<Logout/>}>
//                   <Button text="Logout" className="btn-logout" />
//                 </a>
//                 {/* <Search /> */}
//               </div>
//             : <Navigate to="/" />}
//           </Route>
//           <Route path="/" exact={true}>
//             {token ?  <Navigate to="/create-playlist" /> :
//               <div className="App">
//                 <Login/>
//               </div>
//             }
//           </Route>
//         </Switch>
//     </Router>
//   )
// }

// export default Landing;

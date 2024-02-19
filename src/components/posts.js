// import React from "react";
// import axios from "axios";



// function Posts() {
//     const [posts, setPosts] = React.useState([]);
  
//     React.useEffect(() => {
//       axios
//         .get("https://jsonplaceholder.typicode.com/posts")
//         .then((response) => setPosts(response.data));
//     }, []);
  
//             return (
//             <div className="posts">
//             {posts.map((post) => (
//                 <Card style={{ width: '18rem'}} className="post" key={post.id}>
//                     <Card.Body>
//                         <Card.Title>{post.title}</Card.Title>
//                         <Card.Text>{post.body}</Card.Text>
//                     </Card.Body>
//                 </Card>
//             ))}
//         </div>
//         );
//   }
  
//   export default Posts;
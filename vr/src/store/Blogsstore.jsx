import { createContext, useState, useEffect } from "react";
import axios from 'axios';
let token = localStorage.getItem('token');
let userName = localStorage.getItem('username');

export const BlogStore = createContext({
    postList: [],
    addPost: () => {},
    delPost: () => {},
    editPost: () => {},
    goback: () => {},
    switchBetween: () => {},
    handleLogout: () => {},
    getToken: "",
    getUserName: "",
    getSwitch: "",
})


const BlogsStoreContextProvider = ({children}) => {
    const [getToken, setToken] = useState(token);
    const [getUserName, setUserName] = useState(userName);
  
    const handleLogout = () => {
      localStorage.clear();
      setToken("");
      setUserName("");
      window.location.href = '../index.html'
      window.reload();
    }
  
    const goback = () => {
      window.location.href = '../index.html'
    }
  
    const [getSwitch, setSwitch] = useState("home")
  
    const switchBetween = (content) => {
      setSwitch(content);
    }
    
    const [postList, setPostList] = useState([]);
  
    const [getAddPost, setAddPost] = useState("");  
    const [getDelPost, setDelPost] = useState("");
    const [getEditPost, setEditPost] = useState("");
    
  
    useEffect(() => {
      const controller = new AbortController();
      const {signal} = controller;
      const fetchPosts = async() => {
        try{
          const {data} = await axios.get('http://localhost:8081/posts', signal);
          setPostList(data);
        }catch(err) {
          console.log("Error", err)
        }
      }
      fetchPosts();
    }, [])
  
    useEffect(() => {
      const addPosts = async({userId,
        title,
        body,
        tags,
        reactions, id}) => {
        try{
          const {data} = await axios.post('http://localhost:8081/posts', {
          id,
          title,
          body,
          userId,
          tags,
          reactions});
          setPostList([{id: data.id, userId: data.userId, title: data.title, body: data.body, tags: data.tags, reactions: data.reactions}, ...postList])
        }catch(err) {
          console.log("Error", err)
        }
      }
      if(getAddPost.title){
        addPosts(getAddPost);
      }
    }, [getAddPost])
  
  
    useEffect(() => {
      const delPosts = async(id) => {
        try{
          await axios.delete(`http://localhost:8081/posts/${id}`);
          const findPost = postList.filter(x => x.id !== id)
          setPostList(findPost)
        }catch(err) {
          console.log("Error", err)
        }
      }
      if(getDelPost){
        delPosts(getDelPost);
      }
    }, [getDelPost])
  
    useEffect(() => {
      const editPosts = async({ UserId, Title, Body, Tags, Reactions, Id }) => {
        try{
          const {data} = await axios.put(`http://localhost:8081/posts/${Id}`, {
            id: Id,
            title: Title,
            body: Body,
            userId: UserId,
            tags: Tags,
            reactions: Reactions
          });
          const newPostList = postList.filter(x => x.id !== Id)
          setPostList([data, ...newPostList])
        }catch(err) {
          console.log("Error", err)
        }
      }
      if(getEditPost.Title){
        editPosts(getEditPost);
      }
    }, [getEditPost])
  
  
  
    const addPost = (post) => {
      setAddPost(post)
    }
  
    const delPost = (id) => {
      setDelPost(id)
    }
  
    const editPost = (post) => {
      setEditPost(post)
    }
    return (
        <BlogStore.Provider value={{postList,
            addPost,
            delPost,
            editPost,
            goback,
            switchBetween, getToken, getUserName, handleLogout, getSwitch}}>
            {children}
        </BlogStore.Provider>
    )
}

export default BlogsStoreContextProvider;
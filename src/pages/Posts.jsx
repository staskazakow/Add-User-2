import React, { useEffect, useState } from 'react';
import "./styles/style.css"
import { BrowserRouter,Route } from 'react-router-dom';
import { useFetching } from './hooks/useFetching';
import PostService from './API/PostService';
import { getPageCount } from './utils/pages';
import MyButton from './components/UI/Button/MyButton';
import MyModal from './components/UI/MyModal/MyModal';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import PostList from './components/PostList';
import Loader from './components/UI/Loader.jsx/Loader';
import Pagination from './components/UI/Pagination/Pagination';
import { usePosts } from './hooks/usePosts';
function Posts() {
    const [post,setPost] = useState([])
    const [filter,setFilter] = useState({sort:"",query:""})
    const createPost = (newPost) =>{
      setPost([...post,newPost])
      setModal(false)
    }
    const[limit,setLimit] = useState(10)
    const[page,setPage] = useState(1)
    const [totalPages,setTotalPages] = useState(0)
    const[modal,setModal] = useState(false)
    const[fetchPosts,isPostLoading,postError] = useFetching(async (limit,page) =>{
      const responce = await PostService.getAll(limit,page)
      setPost(responce.data)
      const totalCount = responce.headers['x-total-count']
      setTotalPages(getPageCount(totalCount,limit))
    })
    const removePost = (posts) => {
      setPost(post.filter(p => p.id !== posts.id))
    }
    useEffect(() => {
      fetchPosts(limit,page)
    },[])
    const changePage = (page) => {
      setPage(page)
      fetchPosts(limit,page)
    }
    const sortedAndSearchedPosts = usePosts(post,filter.sort,filter.query)
    return (
      <div className="App">
        <MyButton onClick ={() => setModal(true)} style={{marginTop:"30px"}} >Создать пользователя</MyButton>
        <hr style={{margin:"15px"}}></hr>
        <MyModal visible={modal} setVisible={setModal}><PostForm create= {createPost}/></MyModal>
        <PostFilter filter={filter} setFilter={setFilter}/>
        {postError &&
          <h1>Произошла ошибка ${postError}</h1>}
        {isPostLoading
        ? <div style={{display:"flex", justifyContent:"center", marginTop:"50px"}}><Loader/></div>
        : <PostList remove ={removePost} post = {sortedAndSearchedPosts} title="Список постов 1"/>
        }
        <Pagination changePage={changePage} page={page} totalPage={totalPages} key={page}/>
      </div>
  )
  }
export default Posts;
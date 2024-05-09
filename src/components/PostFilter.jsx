import React from "react";
import MySelect from "./UI/Select/MySelect";
import MyInput from "./UI/Input/MyInput";
const PostFilter = ({filter,setFilter}) => {
    
    return(
        <div>
          <MyInput
          value={filter.query}
          onChange={event => setFilter({...filter, query:event.target.value})}
          placeholder="Search"/>
        <MySelect 
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter,sort: selectedSort})}
        defaultValue='Сортировка'
        options={[
          {value:"title", name:"По названию"},
          {value:"body", name:"По описанию"}
        ]}/>
      </div>
    )
}
export default PostFilter
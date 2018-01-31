import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Formated from './subcomponents/Formated';
import  axios from 'axios';
// import axios

class Blog extends Component{
    constructor(){
        super();
        this.state = {
            blog: {}, 
            blogUrl: "/api/blog/"
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount(){
        axios.get( `${this.state.blogUrl}${this.props.match.params.id}`).then(result => 
        this.setState = ({
            blog:result.data
        })
    );
    }

    
    render(){
        const blog = this.state.blog;
        console.log(this.props);
        return(
            
            <div className='content blog-content' >
                    <div className="blog-img" style={{backgroundImage: `url(${blog.image})`, backgroundSize:'cover'}}>
                        <h1>{blog.title}</h1>
                    </div>
                <div className="blog-container">
                    <h2>{blog.subTitle}</h2>
                    <br/>
                    {
                        blog.name
                        ?
                        <h3>{blog.name}</h3>
                        :
                        null
                    }
                    <hr/><br/>
                    {<Formated text={blog.text}/>}
                </div>
                <Link to={`/edit/${blog.id}`} >
                <button>Edit</button>
                </Link>
                <br/>
            </div>
        )
    }
}

export default Blog;
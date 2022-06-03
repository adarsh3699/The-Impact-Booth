import React from 'react';
import '../css/blogBar.css';

function BlogBar({blogs}) {
    return (
        <div id='BlogBar'>
           {
                    blogs.map((item, index)=> (
                        <div key={index} className='BlogItem'>
                            <img src={item.img} className='blogImg' />
                            <div className='title'>{item.tilte}</div>
                            <div className='ques'>{item.ques}</div>
                            <div className='date'>{item.date}</div>
                            <div className='botmBorder'></div>
                            <div className='moreInfo'>More Info</div>
                            <div>{item.time}</div>
                        </div>
                    ))
                }

        </div>
    );
}

export default BlogBar;

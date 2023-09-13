import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleBookmark, handleMarkAsRead}) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20'>
            <div>
            <img className='w-full' src={cover} alt={`cover picture of the title ${title}`} />
             <div className='flex justify-between mt-5'>
                <div className='flex'>
                <img className='w-14' src={author_img} alt="" />
                <div className='ml-6'>
                    <h1 className='text-2xl'>{author}</h1>
                    <p>{posted_date}</p>
                </div>
                </div>
                <div>
                <span>{reading_time} min read</span>
                <button onClick={()=> handleBookmark(blog)} 
                className='ml-2'>
                    <FaBookmark></FaBookmark></button>
                </div>
             </div>
            </div>
            <h2 className='text-3xl mt-4 text-left'>{title}</h2>
            <p className='mt-4 text-left'>
                {
                    hashtags.map((hash, idx) =><span className='mr-4' key={idx}><a href=''>#{hash}</a></span>)
                }
            </p>
            <button 
            className='font-bold text-purple-800 underline mt-2 text-left' 
            onClick={() => handleMarkAsRead(reading_time)}>Mark As Read
            </button>
        </div>
        
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog;


import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-14 p-4">
            <div>
                <h1 className='text-3xl underline'>Reading Time: {readingTime}</h1>
            </div>
           <h1 className="text-2xl mt-2">Bookmarks Blog: {bookmarks.length}</h1> 
           {
            bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
           }
        </div>
    );
};
Bookmarks.propTypes= {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number
}
export default Bookmarks;

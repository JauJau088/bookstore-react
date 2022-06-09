import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './Book.css';

const Book = ({
  id, title, author, genre, currentChapter, progress,
}) => {
  const dispatch = useDispatch();

  const handleRemove = (_id) => {
    dispatch(removeBook(_id));
  };

  return (
    <div className="BookContainer Flex-Row Align-Center Just-SpaceBetween">
      <div className="GroupBookInfo">
        <div className="BookDetails">
          <div className="BookDetails-Genre">{genre}</div>
          <div className="BookDetails-Title">{title}</div>
          <div className="BookDetails-Author">{author}</div>
        </div>
        <div className="CommentRemoveEdit Flex-Row">
          <button type="button">Comments</button>
          <button
            type="button"
            onClick={() => handleRemove(id)}
          >
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="GroupProgress Flex-Row Align-Center">
        <div className="ProgressBar">
          <svg height="100" width="100" className="Circle">
            <defs>
              <linearGradient id="gradient">
                <stop offset="0%" stopColor="#379bf3" />
                <stop offset="100%" stopColor="#317dc1" />
              </linearGradient>
            </defs>
            <circle className="Circle-Base" cx="50" cy="50" r="33" stroke="#e8e8e8" strokeWidth="5" fill="none" />
            <circle className="Circle-Progress" cx="50" cy="50" r="33" stroke="url(#gradient)" strokeWidth="5" fill="none" />
          </svg>
        </div>
        <div className="ProgressPercentage">
          <div className="ProgressPercentage-Percentage">
            {progress}
            %
          </div>
          <div className="ProgressPercentage-Status">Completed</div>
        </div>
      </div>
      <div className="Separator" />
      <div className="GroupChapter">
        <div className="ChapterInfo">
          <div className="ChapterInfo-Current">CURRENT CHAPTER</div>
          <div className="ChapterInfo-Chapter">{currentChapter}</div>
        </div>
        <button className="UpdateProgressBtn" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string,
  currentChapter: PropTypes.string,
  progress: PropTypes.number,
};

Book.defaultProps = {
  genre: '',
  currentChapter: 'Chapter x',
  progress: 0,
};

export default Book;

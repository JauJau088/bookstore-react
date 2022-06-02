import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const Book = ({
  title, author, genre, currentChapter, progress,
}) => (
  <div className="BookContainer Flex-Row Align-Center Just-SpaceBetween">
    <div className="GroupBookInfo">
      <div className="BookDetails">
        <div>{genre}</div>
        <div>{title}</div>
        <div>{author}</div>
      </div>
      <div className="CommentRemoveEdit Flex-Row">
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
    <div className="GroupProgress Flex-Row Align-Center">
      <div className="ProgressBar">circle</div>
      <div className="ProgressPercentage">
        <div>
          {progress}
          %
        </div>
        <div>Completed</div>
      </div>
    </div>
    <div className="Separator" />
    <div className="GroupChapter">
      <div className="ChapterInfo">
        <div>CURRENT CHAPTER</div>
        <div>{currentChapter}</div>
      </div>
      <button className="UpdateProgressBtn" type="button">UPDATE PROGRESS</button>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  currentChapter: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};

export default Book;
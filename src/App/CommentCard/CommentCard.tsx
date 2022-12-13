import { formatDistanceToNow } from 'date-fns';
import './CommentCard.css';

type CommentCardProps = {
  name: string,
  location: string,
  comment: string,
  timePosted: Date,
  imageUrl: string
}

const CommentCard = (props: CommentCardProps) => {
  const { name, location, comment, timePosted, imageUrl } = props;

  const timeElapsed = formatDistanceToNow(timePosted);

  return (
    <div className="CommentCard">
      <img className="CommentCard-image" src={imageUrl} alt="Image of Poster" />
      <div className="CommentCard-textContainer">
        <div className="CommentCard-bio">
          <h2>{name}{' '}{location}</h2>
          <p>{comment}</p>
        </div>
        <div className="CommentCard-timeElapsed">
          {timeElapsed}{' '}
          ago
        </div>
      </div>
    </div>
  );
}

export default CommentCard;

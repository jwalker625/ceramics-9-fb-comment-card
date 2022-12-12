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
      <img src={imageUrl} alt="Image of Poster" />
      <div>
        <h1>{name}{' '}{location}</h1>
        <p>{comment}</p>
        <div>
          {timeElapsed}{' '}
          ago
        </div>
      </div>
    </div>
  );
}

export default CommentCard;

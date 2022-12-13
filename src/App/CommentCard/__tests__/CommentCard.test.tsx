import CommentCard from '../CommentCard';
import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import MockDate from 'mockdate';
import reactLogo from '../../../assets/react.svg';
import react from "@vitejs/plugin-react";

describe('CommentCard', () => {
  beforeEach(() => {
    MockDate.reset();
  });

  it('renders a name passed into it', () => {
    const mockCommentCardProps = {
      name: 'Billy Bob',
      location: '',
      comment: '',
      timePosted: new Date(),
      imageUrl: ''
    }

    render(<CommentCard {...mockCommentCardProps} />);

    const nameElement = screen.getByText(/Billy Bob/i);

    expect(nameElement).toBeInTheDocument();
  });

  it('renders a location passed into it', () => {
    const mockCommentCardProps = {
      name: '',
      location: 'Nashville, TN',
      comment: '',
      timePosted: new Date(),
      imageUrl: ''
    }

    render(<CommentCard {...mockCommentCardProps} />);

    const locationElement = screen.getByText(/Nashville, TN/i);

    expect(locationElement).toBeInTheDocument();
  });

  it('renders a comment passed into it', () => {
    const mockCommentCardProps = {
      name: '',
      location: '',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      timePosted: new Date(),
      imageUrl: ''
    }

    render(<CommentCard {...mockCommentCardProps} />);

    const commentElement = screen.getByText(/Lorem ipsum/i);

    expect(commentElement).toBeInTheDocument();
  });

  it('renders an image passed into it', () => {
    const mockCommentCardProps = {
      name: '',
      location: '',
      comment: '',
      timePosted: new Date(),
      imageUrl: reactLogo
    }

    render(<CommentCard {...mockCommentCardProps} />);

    const imageElement = screen.getByAltText(/Image of Poster/i);

    expect(imageElement).toBeInTheDocument();
  });

  it('renders the time elapsed since the post', () => {
    MockDate.set(new Date(2020, 6, 3))
    const mockCommentCardProps = {
      name: '',
      location: '',
      comment: '',
      timePosted: new Date(2020, 6, 1),
      imageUrl: ''
    };

    render(<CommentCard {...mockCommentCardProps} />);

    const timeElapsedElement = screen.getByText(/2 days ago/i);

    expect(timeElapsedElement).toBeInTheDocument();
  });
});

import React from "react"
import { useState } from 'react';
import { FormatUserName } from '../utils/FormatUserName';

interface TwitterFollowCardProps {
  userName?: string;
  name?: string;
}

export function TwitterFollowCard({userName = '', name = ''}: TwitterFollowCardProps) {
  const [isFollowing, setIsFollowing] = useState(false);

  const imageSrc = `https://unavatar.io/${userName}`;
  const bottonText = isFollowing ? 'Following' : 'Follow';
  const bottonClassName = isFollowing 
    ? 'tw-follow-button is-following' 
    : 'tw-follow-button';

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  }

	return (
		<article className="tw-followCard">
      <header className="tw-followCard-header">
        <img 
          className="tw-followCard-avatar" 
          alt={`Avatar of ${name}`} 
          src={imageSrc} 
        />
        <div className="tw-followCard-info">
          <strong className="tw-followCard-name">{name}</strong>
          <FormatUserName username={userName} />
        </div>
      </header>
      <aside>
        <button onClick={handleClick} className={bottonClassName}>
          <span className="tw-follow-button-text">{bottonText}</span>
          <span className="tw-follow-button-unfollow">Unfollow</span>
        </button>
      </aside>
    </article>
	)
}
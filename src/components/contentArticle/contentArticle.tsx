import React from 'react';
import ReactMarkdown from 'react-markdown';
import FooterArticle from '../footerArticle/footerArticle';
import { InfoItem } from '../../shared/interfaces';
import './contentArticle.scss';

function ContentArticle({ item }: InfoItem): JSX.Element {
  const {
    title, selftext, url, num_comments,
  } = item;

  const renderLink = (): JSX.Element | undefined => (!selftext.length ? (
    <a
      className="url"
      href={url}
      target="_blank"
      rel="noreferrer"
      data-testid="link"
    >
      {url}
    </a>
  ) : undefined);

  return (
    <div className="content">
      <h3 className="title">{title}</h3>
      <ReactMarkdown className="selfText">{selftext}</ReactMarkdown>
      {renderLink()}
      <FooterArticle num_comments={num_comments} />
    </div>
  );
}

export default ContentArticle;

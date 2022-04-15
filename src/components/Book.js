import React, { useState } from 'react';
import BookPages from './BookPages';
import NextPageBtn from './NextPageBtn';
import PrevPageBtn from './PrevPageBtn';

const Book = () => {
  const [bookPages, setBookPages] = useState([
    {
      id: '1',
      flipped: false,
      zIndex: 4,
      frontPageContent: {
        title: 'Flipping Book',
        text: 'Front Cover',
        cssClass: 'front-cover',
      },
      backPageContent: {
        title: 'Page 1',
        text: 'Content here',
        cssClass: 'back-content',
      },
    },
    {
      id: '2',
      flipped: false,
      zIndex: 3,
      frontPageContent: {
        title: 'Page 2',
        text: 'Content here',
        cssClass: 'front-content',
      },
      backPageContent: {
        title: 'Page 3',
        text: 'Content here',
        cssClass: 'back-content',
      },
    },
    {
      id: '3',
      flipped: false,
      zIndex: 1,
      frontPageContent: {
        title: 'Page 4',
        text: 'Content here',
        cssClass: 'front-content',
      },
      backPageContent: {
        title: 'Back Cover',
        text: 'The End',
        cssClass: 'back-cover',
      },
    },
  ]);
  const [isClosed, setIsClosed] = useState(true);
  const [isAtBeginning, setIsAtBegninning] = useState(true);
  const [currentLocation, setCurrentLocation] = useState(0);

  const openBook = () => {
    setIsClosed(false);
  };

  const closeBook = (isAtBeginning) => {
    setIsClosed(true);
    setIsAtBegninning(isAtBeginning);
  };

  const goToPrevPage = () => {
    if (currentLocation > 0) {
      if (currentLocation === 1) {
        closeBook(true);
      }

      if (currentLocation === bookPages.length) {
        openBook();
      }

      const previousBookPage = bookPages[currentLocation - 1];

      setBookPages(
        bookPages.map((bookPage, index) => {
          return {
            ...bookPage,
            flipped:
              bookPage.id === previousBookPage.id ? false : bookPage.flipped,
            zIndex:
              bookPage.id === previousBookPage.id
                ? bookPages.length - index
                : bookPage.zIndex,
          };
        })
      );

      setCurrentLocation(currentLocation - 1);
    }
  };

  const goToNextPage = () => {
    if (currentLocation < bookPages.length) {
      if (currentLocation === 0) {
        openBook();
      }

      if (currentLocation === bookPages.length - 1) {
        closeBook(false);
      }

      const currentBookPage = bookPages[currentLocation];

      setBookPages(
        bookPages.map((bookPage, index) => {
          return {
            ...bookPage,
            flipped:
              bookPage.id === currentBookPage.id ? true : bookPage.flipped,
            zIndex:
              bookPage.id === currentBookPage.id ? index : bookPage.zIndex,
          };
        })
      );

      setCurrentLocation(currentLocation + 1);
    }
  };

  const bookStyle = isClosed
    ? isAtBeginning
      ? { transform: 'translateX(0%)' }
      : { transform: 'translateX(100%)' }
    : { transform: 'translateX(50%)' };

  return (
    <>
      <PrevPageBtn goToPrevPage={goToPrevPage} isClosed={isClosed} />

      <div className='book' style={bookStyle}>
        {bookPages.map((bookPage) => (
          <BookPages
            key={bookPage.id}
            flipped={bookPage.flipped}
            zIndex={bookPage.zIndex}
            frontPageContent={bookPage.frontPageContent}
            backPageContent={bookPage.backPageContent}
          />
        ))}
      </div>

      <NextPageBtn goToNextPage={goToNextPage} isClosed={isClosed} />
    </>
  );
};

export default Book;

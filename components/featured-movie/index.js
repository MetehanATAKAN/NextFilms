import Image from 'next/image';
import React from 'react'
import styles from './styles.module.css';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';

const FeaturedMovie = ({
    movie = {},
    isCompact = false
}) => {

  const { title , overview, poster_path ,id } = movie;
  return (
    <div className={styles.movieWrapper}>
       <h1 className={styles.movieTitle}>
        {title}
        </h1> 
        <p className={`${styles.overview} ${
              isCompact ? styles.shortOverview : ""
            }`}>
            {overview}
        </p>
        <div>
        <div className={styles.actionButtons}>
            <Link className={styles.playButton} href={`/movie/${id}`}>
              Play
            </Link>
            <button className={styles.addButton}>
              <FaPlus />
            </button>
          </div>
          <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
          <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          fill
          className={styles.background_image}
          />
        </div>
        </div>
    </div>
  )
}

export default FeaturedMovie
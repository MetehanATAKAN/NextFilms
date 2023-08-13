import React from 'react'
import styles from './styles.module.css';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';
import Image from 'next/image';


const MovieDetails = ({
    movie
}) => {

    const { title, overview, poster_path, id, release_date, vote_average, vote_count } = movie;
    return (
        <div className={styles.movieWrapper}>
            <h1 className={styles.movieTitle}>
                {title}
            </h1>
            <p>
                {overview}
            </p>
            <div>
                <div>
                    <strong> RELEASE DATE</strong> : {release_date}
                </div>
                <div>
                    <strong> VOTE AVARAGE</strong> : {vote_average}
                </div>
                <div>
                    <strong> VOTE COUNT </strong> : {vote_count}
                </div>
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

export default MovieDetails
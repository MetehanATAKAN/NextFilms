import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css';

const MoviesSection = ({
    movies=[],
    head
}) => {

  return (
    <div className={styles.moviesSection}>
        <h2 className={styles.title}> {head} </h2>
        <div className={styles.movies}>
            {
                movies.map(movie =>(
                    <div className={styles.movie} key={movie.id}>
                        <Link href={`/movie/${movie.id}`} >

                        <Image
                             fill
                             unoptimized
                             alt={movie.title}
                             src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        />
                        </Link>
                    </div>
                ))
            }
            {/* <Link>
            </Link> */}
        </div>
    </div>
  )
}

export default MoviesSection
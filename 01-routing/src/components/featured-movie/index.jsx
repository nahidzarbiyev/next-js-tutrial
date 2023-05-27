import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

import styles from "./styles.module.css";
const FeaturedMovie = ({ movie = {}, isCompact = true }) => {
  const { poster_path, title, overview } = movie;
  return (
    <div className={`${styles.movieWrapper}`}>
      <h1 className={`${styles.movieTitle}`}>{title}</h1>
      <p
        className={`${styles.overview}
        ${isCompact ? styles.shortOverview : ""}`}
      >
        {overview}
      </p>
      <div className={styles.actionButtons}>
        <Link className={`${styles.playButton}`} href={`/movie/${movie.id}`}>
          Play
        </Link>
        <button className={`${styles.addButton}`}>
          <FaPlus />
        </button>
      </div>
      <div className={`${styles.moviePoster}`}>
        <div className={`${styles.moviePosterOverlay}`}></div>
        <Image
          unoptimized
          fill
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
        />
      </div>
    </div>
  );
};

export default FeaturedMovie;

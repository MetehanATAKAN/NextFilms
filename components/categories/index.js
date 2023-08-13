import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import styles from './styles.module.css';

const Categories = ({
    categories
}) => {

  return (
    <div className={styles.categories}>
        {
            categories?.map(categorie => (
                <Link key={categorie.id} href='./' >
                    {categorie.name}
                </Link>
            ))
        }
    </div>
  )
}

export default Categories
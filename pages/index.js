import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import Card from "../components/card";
import styles from "../styles/Home.module.css";
import coffeeStores from "../data/coffee-stores.json";

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("Hi");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Hayzaran</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={700} height={400} />
        </div>
        <div className={styles.cardLayout}>
          {coffeeStores.map((coffeeStore) => {
            return (
              <Card
                name={coffeeStore.name}
                imgUrl={coffeeStore.imgUrl}
                href={`/coffee-store/${coffeeStore.id}`}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

import { Container, Grid } from '@material-ui/core';
import React from 'react';
import Header from '../../Molecules/Header';
import useStyles from './styles';
import CardSubjectVertical from '../../Organisms/CardSubjectVertical';
import CardSubjectHorizontal from '../../Molecules/CardSubjectHorizontal';
import BtnSeeMore from '../../Molecules/BtnSeeMore';
import NewsGroupers from '../../Organisms/NewsGroupers';
import Divider from '../../Atoms/Divider';

type Video = {
  duration: number;
  programTitle: string;
  source: string;
};

type Content = {
  section: string;
  summary: string;
  title: string;
  url: string;
};

type SingleGroup = {
  content: Content;
  type: string;
};

type SingleNews = {
  chapeu: string;
  image: string;
  section: string;
  summary: string;
  title: string;
  url: string;
  video: Video | null;
  group: SingleGroup[] | any[];
  type: string;
  created: string;
  id: string;
};

type HomeProps = {
  news: SingleNews[];
};

const Home: React.FC<HomeProps> = ({ news }) => {
  const classes = useStyles();

  const newsFeed = Object.values(news);

  newsFeed.splice(0, 2);

  console.log(newsFeed, 'neewsss');
  return (
    <>
      <Header />
      <Container maxWidth="lg" className={classes.wrappContainer}>
        <Grid container spacing={2}>
          <Grid item sm={6}>
            {news.length > 0 && (
              <CardSubjectVertical
                title={news[0].title}
                label={news[0].chapeu}
                description={news[0].summary}
                duration={news[0].created}
                newsSource={news[0].chapeu}
              />
            )}
          </Grid>
          <Grid item sm={6}>
            {news.length > 0 && (
              <CardSubjectVertical
                title={news[1].title}
                isTextWhite
                imageURL={news[1].image}
                duration={news[1].created}
                newsSource={news[1].chapeu}
              />
            )}
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item sm={9}>
            {newsFeed.length > 0 && (
              <>
                {newsFeed.map((singleNews) => {
                  // Significa que é do tipo grupo de noticias
                  if (singleNews.group.length > 0) {
                    return (
                      <>
                        <CardSubjectHorizontal
                          subjectType="SUBJECT_GROUP"
                          duration={singleNews.created}
                          newsSource={singleNews.chapeu}
                          title={singleNews.title}
                          subjectGroup={singleNews.group}
                          link={singleNews.url}
                          imagePath={singleNews.image}
                        />
                        <Divider />
                      </>
                    );
                  }
                  if (singleNews.video) {
                    return (
                      <>
                        <CardSubjectHorizontal
                          subjectType="VIDEO"
                          title={singleNews.title}
                          description={singleNews.summary}
                          duration={singleNews.created}
                          newsSource={singleNews.chapeu}
                          videoDuration={singleNews.video.duration}
                          videoPath={singleNews.video.source}
                          imagePath={singleNews.image}
                        />
                        <Divider />
                      </>
                    );
                  }
                  return (
                    <>
                      <CardSubjectHorizontal
                        subjectType="SUBJECT"
                        link={singleNews.url}
                        title={singleNews.title}
                        duration={singleNews.created}
                        newsSource={singleNews.chapeu}
                        imagePath={singleNews.image}
                      />
                      <Divider />
                    </>
                  );
                })}
              </>
            )}
            <BtnSeeMore />
          </Grid>
          <Grid item xs={12} sm={3}>
            <NewsGroupers />
            <div className={classes.newsGroupWrapper}>
              <NewsGroupers />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;

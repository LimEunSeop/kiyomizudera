import * as React from 'react'
import * as styles from './index.module.scss'
import '../styles/index.scss'
import styled, { ThemeProvider } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitterSquare,
  faInstagramSquare,
  faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons'

import Logo from '../assets/images/logo.svg'
import spring from '../assets/images/spring.jpg'
import summer from '../assets/images/summer.jpg'
import autumn from '../assets/images/autumn.jpg'
import winter from '../assets/images/winter.jpg'

const theme = {
  spring: { logo: '#1a1a1a', link: '#F9F1F0', slogan: '#F9F1F0' },
  summer: {
    logo: '#DDFFE7',
    link: '#DDFFE7',
    slogan: '#DDFFE7',
  },
  autumn: { logo: '#1a1a1a', link: '#E7D2CC', slogan: '#E7D2CC' },
  winter: { logo: '#1a1a1a', link: '#000', slogan: '#000' },
}

const StyledLogo = styled(Logo)`
  .cls-1,
  .cls-2 {
    fill: ${({ theme }) => theme.logo};
  }
`

const StyledLink = styled.a`
  color: ${({ theme }) => theme.link};
`

const Slogan = styled.div`
  color: ${({ theme }) => theme.slogan};
`

// markup
const IndexPage = () => {
  const [background, setBackground] = React.useState(spring)
  const [currentTheme, setCurrentTheme] = React.useState('spring')

  const handleSeasonButtonClick = (season, e) => {
    setCurrentTheme(season)
    switch (season) {
      case 'spring':
        setBackground(spring)
        break
      case 'summer':
        setBackground(summer)
        break
      case 'autumn':
        setBackground(autumn)
        break
      case 'winter':
        setBackground(winter)
        break
    }
  }

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <main className={styles.main}>
        <div
          className={styles.background}
          style={{ backgroundImage: `url(${background})` }}
        ></div>

        {/* ======= Lazy Loads ======= */}
        <img src={spring} alt="" hidden />
        <img src={summer} alt="" hidden />
        <img src={autumn} alt="" hidden />
        <img src={winter} alt="" hidden />
        {/* -------------------------- */}

        <title>Home Page</title>
        <header className={styles.header}>
          <div className={styles.logo}>
            <a href="#" aria-label="로고">
              <StyledLogo width="130" />
            </a>
          </div>
          <div className={styles.links}>
            <div className={styles.menu}>
              <StyledLink href="#">ログイン</StyledLink>
              <StyledLink href="#">会員登録</StyledLink>
              <StyledLink href="#">カスタマーサービス</StyledLink>
            </div>
            <div className={styles.sns}>
              <StyledLink href="#" aria-label="트위터">
                <FontAwesomeIcon icon={faTwitterSquare} />
              </StyledLink>
              <StyledLink href="#" aria-label="인스타그램">
                <FontAwesomeIcon icon={faInstagramSquare} />
              </StyledLink>
              <StyledLink href="#" aria-lable="유튜브">
                <FontAwesomeIcon icon={faYoutubeSquare} />
              </StyledLink>
            </div>
          </div>
        </header>
        <Slogan className={styles.slogan}>
          <h2>ようこそ、清水寺へ！</h2>
          <p>四季のいろんな景色をお楽しみ下さい。</p>
        </Slogan>
        <div className={styles.timetab}>
          <button
            type="button"
            onClick={handleSeasonButtonClick.bind(null, 'spring')}
          >
            spring
          </button>
          <button
            type="button"
            onClick={handleSeasonButtonClick.bind(null, 'summer')}
          >
            summer
          </button>
          <button
            type="button"
            onClick={handleSeasonButtonClick.bind(null, 'autumn')}
          >
            autumn
          </button>
          <button
            type="button"
            onClick={handleSeasonButtonClick.bind(null, 'winter')}
          >
            winter
          </button>
        </div>
        <div className={styles.phone} aria-hidden="true">
          <div className={styles.screen}>
            <div className={styles.object1}></div>
            <div className={styles.object2}></div>
          </div>
        </div>
      </main>
    </ThemeProvider>
  )
}

export default IndexPage

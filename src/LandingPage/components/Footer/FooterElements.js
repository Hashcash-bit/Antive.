import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
  background-color: #101522;
`

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  background: transparent;
`
export const FooterLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  background: transparent;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
    background: transparent;
  }
`

export const FooterLinkWrapper = styled.div`
  display: flex;
  background: transparent;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    background: transparent;
  }
`
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  background: transparent;
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
    background: transparent;
  }
`
export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
  background: transparent;
`
export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  background: transparent;
  &:hover {
    color: #01bf71;
    transition: 0.3s ease-in-out;
    background: transparent;
  }
`
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
  background: transparent;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
  background: transparent;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    background: transparent;
  }
`

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  background: transparent;
`
export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
  background: transparent;
`
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  background: transparent;
`
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  background: transparent;
`
import React from 'react'
import PropTypes from 'prop-types'
import path from 'path'
import { withNamespaces } from 'react-i18next'
import styled, { css } from 'styled-components'
import { compact } from 'lodash'

import { _t } from '../utils'

const ResultIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 0.5ex;
  ${({ isLight }) =>
    isLight &&
    css`
      background-color: #ccc;
      border-radius: 5px;
    `}
`

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  div + div {
    margin-left: 2rem;
  }

  div {
    display: flex;
    align-items: center;
  }
`

const BATTLE_RESULT = ['SS', 'S', 'A', 'B', 'C', 'D', 'E']

const BattleInfo = withNamespaces('poi-plugin-prophet')(
  ({ result = '', eFormation = '', battleForm = '', airControl = '', t }) => (
    <Container>
      <div>
        {BATTLE_RESULT.includes(result) ? (
          <ResultIcon
            src={path.resolve(
              __dirname,
              `../assets/icons/result-${result}.svg`,
            )}
            isLight={!window.isDarkTheme}
            alt="result"
          />
        ) : (
          t(result)
        )}
      </div>

      {compact([_t(eFormation), _t(battleForm), _t(airControl)]).map((text) => (
        <div key={text}>{text}</div>
      ))}
    </Container>
  ),
)

BattleInfo.propTypes = {
  result: PropTypes.string,
  eFormation: PropTypes.string,
  battleForm: PropTypes.string,
  airControl: PropTypes.string,
  t: PropTypes.func.isRequired,
}

export default BattleInfo

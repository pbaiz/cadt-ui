import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Body, LinkIcon } from '..';
import {
  StyledDetailedViewTab,
  StyledDetailedViewTabItem,
  StyledItem,
} from '.';
import { SpanTwoColumnsContainer } from '..';

const ProjectLabelsDetails = ({ data }) => {
  // const createBrowserWindow = url => {
  //   console.log(require('electron'));
  //   const remote = require('electron').remote;
  //   const BrowserWindow = remote.BrowserWindow;
  //   const win = new BrowserWindow({
  //     height: 600,
  //     width: 800,
  //   });

  //   win.loadURL(url);
  // };

  const handleClick = event => {
    console.log(event);
  };

  // const externalLink = event => {
  //     event.preventDefault();
  //     shell.openExternal(event.target.href);
  // };
  return (
    <StyledDetailedViewTabItem>
      <div style={{ width: '60%' }}>
        <StyledDetailedViewTab>
          <StyledItem>
            <Body size="Bold" width="100%">
              <FormattedMessage id="label" />
            </Body>
            <Body>{data.label ? data.label : '---'}</Body>
          </StyledItem>
          <StyledItem>
            <Body size="Bold" width="100%">
              <FormattedMessage id="label-type" />
            </Body>
            <Body>{data.labelType ? data.labelType : '---'}</Body>
          </StyledItem>
          <SpanTwoColumnsContainer>
            <StyledItem>
              <Body size="Bold" width="100%">
                <FormattedMessage id="label-link" />
              </Body>
              <Body>
                <a
                  onClick={handleClick}
                  href={data.labelLink && data.labelLink}
                  target="_blank"
                  rel="noreferrer noopener">
                  {data.labelLink ? data.labelLink : '---'}
                  {data.labelLink && <LinkIcon height="15" width="30" />}
                </a>
              </Body>
            </StyledItem>
          </SpanTwoColumnsContainer>
          <SpanTwoColumnsContainer>
            <hr />
          </SpanTwoColumnsContainer>
          <StyledItem>
            <Body size="Bold" width="100%">
              <FormattedMessage id="validity-period-start-date" />
            </Body>
            <Body>
              {data.validityPeriodStartDate
                ? data.validityPeriodStartDate
                : '---'}
            </Body>
          </StyledItem>
          <StyledItem>
            <Body size="Bold" width="100%">
              <FormattedMessage id="validity-period-end-date" />
            </Body>
            <Body>
              {data.validityPeriodEndDate ? data.validityPeriodEndDate : '---'}
            </Body>
          </StyledItem>
          <StyledItem>
            <Body size="Bold" width="100%">
              <FormattedMessage id="crediting-period-start-date" />
            </Body>
            <Body>
              {data.creditingPeriodStartDate
                ? data.creditingPeriodStartDate
                : '---'}
            </Body>
          </StyledItem>
          <StyledItem>
            <Body size="Bold" width="100%">
              <FormattedMessage id="crediting-period-end-date" />
            </Body>
            <Body>
              {data.creditingPeriodEndDate
                ? data.creditingPeriodEndDate
                : '---'}
            </Body>
          </StyledItem>
          <SpanTwoColumnsContainer>
            <hr />
          </SpanTwoColumnsContainer>
          <StyledItem>
            <Body size="Bold" width="100%">
              <FormattedMessage id="unit-quantity" />
            </Body>
            <Body>{data.unitQuantity && data.unitQuantity}</Body>
          </StyledItem>
        </StyledDetailedViewTab>
      </div>
    </StyledDetailedViewTabItem>
  );
};

export { ProjectLabelsDetails };

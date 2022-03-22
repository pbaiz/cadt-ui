import _ from 'lodash';
import React, { useState } from 'react';
import { Tab, Tabs, TabPanel } from '..';
import styled from 'styled-components';
import { UnitsDetails, UnitsIssuanceDetails, UnitsLabelsDetails } from '.';

export const StyledDetailedViewTabItem = styled('div')`
  display: flex;
  justify-content: center;
  background: #fafafa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 16px 21px;
  margin: 20px 0px;
  gap: 20px;
`;

export const StyledDetailedViewTab = styled('div')`
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const StyledItem = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

const UnitsDetailViewTab = ({ entry, action }) => {
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  console.log(entry);

  const areThereAnyChangesForThisOriginal = key =>
    entry[key]?.changes &&
    entry[key]?.changes.length > 0 &&
    entry[key]?.changes.some(x => x !== null);

  const getOriginalColorForKey = entryProp => {
    if (areThereAnyChangesForThisOriginal(entryProp)) {
      return '#f5222d';
    }
    if (action === 'DELETE') {
      return '#f5222d';
    }
    if (action === 'INSERT') {
      return '#52C41A';
    }
    return '#000000';
  };

  const unitsTabs = _.remove(
    [_.isEmpty(entry), _.isEmpty(entry?.labels), _.isEmpty(entry?.issuance)],
    item => item,
  );

  return (
    <>
      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="Units" />
        {!_.isEmpty(entry?.issuance) && <Tab label={'Issuance'} />}
        {!_.isEmpty(entry?.labels) && <Tab label={'Labels'} />}
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        <UnitsDetails data={entry} changeColor={getOriginalColorForKey} />
      </TabPanel>
      {!_.isEmpty(entry?.issuance) && (
        <TabPanel value={tabValue} index={1}>
          <UnitsIssuanceDetails
            data={entry?.issuance}
            changeColor={getOriginalColorForKey}
          />
        </TabPanel>
      )}
      {!_.isEmpty(entry?.labels) &&
        _.map(entry?.labels, labelValue => (
          <TabPanel
            noHeight
            value={tabValue}
            index={!_.isEmpty(unitsTabs) ? 2 - unitsTabs.length : 2}>
            <UnitsLabelsDetails
              data={labelValue}
              changeColor={getOriginalColorForKey}
            />
          </TabPanel>
        ))}
    </>
  );
};
export { UnitsDetailViewTab };

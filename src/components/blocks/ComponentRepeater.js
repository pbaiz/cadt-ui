import React, { useCallback, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { Body } from '../typography';
import { FormattedMessage } from 'react-intl';

const StyledRepeatedComponentContainer = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  ${props => !props.disabled && `cursor: pointer;`};
`;

const ComponentRepeater = ({
  component,
  values,
  updateValues,
  initialValue,
  addIcon,
  removeIcon,
  maxRepetitions = 2,
  minRepetitions = 0,
}) => {
  const addNewInstance = useCallback(() => {
    if (values.length < maxRepetitions) {
      updateValues(
        values && values.length
          ? [..._.cloneDeep(values), _.cloneDeep(initialValue)]
          : [_.cloneDeep(initialValue)],
      );
    }
  }, [values]);

  useEffect(() => {
    const currentNumberOfRepetitions = values.length;
    if (currentNumberOfRepetitions < minRepetitions) {
      addNewInstance();
    }
  });

  const allInstances = useMemo(() => {
    return values.map((value, index) => {
      const onChange = value => {
        const newValues = [...values];
        newValues[index] = _.cloneDeep(value);
        updateValues(newValues);
      };
      const onRemove = () => {
        const newValues = [...values];
        newValues.splice(index, 1);
        updateValues(newValues);
      };
      const key = index;
      return (
        <StyledRepeatedComponentContainer key={key}>
          {component && React.cloneElement(component, { value, onChange })}
          {removeIcon && <div onClick={onRemove}>{removeIcon}</div>}
        </StyledRepeatedComponentContainer>
      );
    });
  }, [values]);

  return (
    <div>
      {addIcon && values.length < maxRepetitions && (
        <StyledRepeatedComponentContainer onClick={addNewInstance}>
          {addIcon}
          <Body color="#1890ff">
            <FormattedMessage id="click-to-add" />
          </Body>
        </StyledRepeatedComponentContainer>
      )}
      {addIcon && values.length >= maxRepetitions && (
        <StyledRepeatedComponentContainer disabled>
          {React.cloneElement(addIcon, { fill: '#d9d9d9' })}
          <Body color="#d9d9d9">
            <FormattedMessage id="max-number-added" />
          </Body>
        </StyledRepeatedComponentContainer>
      )}
      {allInstances}
    </div>
  );
};

export { ComponentRepeater };

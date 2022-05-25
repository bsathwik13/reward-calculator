import { render, screen } from '@testing-library/react';
import calcualteReward from '../utility/rewardCal';

test('reward should be 0 if txn amount less than 50', () => {
  const reward = calcualteReward(49)
  expect(reward).toEqual(0)
});

test('reward should be 1 mutltiple if txn amount less than 100', () => {
    const reward = calcualteReward(90)
    expect(reward).toEqual(40)
});

test('reward should be 90 if txn amount 120', () => {
    const reward = calcualteReward(120)
    expect(reward).toEqual(90)
});


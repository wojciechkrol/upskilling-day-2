import { ProfileType } from '~/types/Profile';

export const generateGradient = (type: ProfileType) => {
  if (type === 'pink') {
    return ['#DBD8FF', '#FAB8FF'];
  } else if (type === 'blue') {
    return ['#DBD8FF', '#747ffd'];
  }

  return ['#FFFFFF', '#FFFFFF'];
};

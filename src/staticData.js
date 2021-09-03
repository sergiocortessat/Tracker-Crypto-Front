/* eslint-disable import/prefer-default-export */
export const userData = (user) => ({
  sub: user.sub,
  email: user.email,
  name: user.name,
  given_name: user.given_name,
  family_name: user.family_name,
  picture: user.picture,
});

import { faker } from "@faker-js/faker";

export function getAvatarSource(): Array<object> {
  return [
    {
      uri: faker.image.avatar()
      // height: 75,
      // width: 75
    }
  ];
}

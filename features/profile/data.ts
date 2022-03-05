import { faker } from "@faker-js/faker";

export function getName(): string {
  return faker.name.firstName();
}

export function getAvatarSource(): Array<object> {
  return [
    {
      uri: faker.image.avatar()
    }
  ];
}

import { faker } from "@faker-js/faker";
import { getRandomInt } from "../../libraries/utlilities";

export function getData(): Array<{
  id: string;
  body: string;
  isFinished: boolean;
  isReaded: boolean;
}> {
  const count = getRandomInt(5, 20);
  const data = [];

  for (let i = 0; i < count; i += 1) {
    data.push({
      id: faker.datatype.uuid(),
      body: faker.lorem.sentence(),
      isFinished: faker.datatype.boolean(),
      isReaded: faker.datatype.boolean()
    });
  }

  return data;
}

import { faker } from "@faker-js/faker";
import { getRandomInt } from "../../libraries/utlilities";

export function getTasksProgress(): Array<{
  id: string;
  variant: string;
  date: Date;
  name: string;
  progress: number;
  users: Array<{
    id: string;
    source: Array<{
      uri: string;
    }>;
  }>;
  daysLeft: number;
}> {
  const count = getRandomInt(3, 10);
  const data = [];

  for (let i = 0; i < count; i += 1) {
    data.push({
      id: faker.datatype.uuid(),
      variant: getRandomInt(1, 5).toString(),
      date: faker.date.recent(500),
      name: faker.lorem.sentence(),
      progress: faker.datatype.number({ min: 0, max: 100, precision: 5 }),
      users: [
        {
          id: "1",
          source: [
            {
              uri: faker.image.avatar()
            }
          ]
        },
        {
          id: "2",
          source: [
            {
              uri: faker.image.avatar()
            }
          ]
        },
        {
          id: "3",
          source: [
            {
              uri: faker.image.avatar()
            }
          ]
        }
      ],
      daysLeft: getRandomInt(0, 9)
    });
  }

  return data;
}

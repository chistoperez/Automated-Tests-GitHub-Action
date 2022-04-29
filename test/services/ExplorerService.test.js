const ExplorerService = require("../../lib/services/ExplorerService");

describe("Test para ExplorerService", () => {
  test("Requerimiento 1: Calcular explorers en una misión", () => {
    const explorer = [{ mission: "node" }];
    const explorersInNode = ExplorerService.getAmountOfExplorersByMission(
      explorer,
      "node"
    );
    expect(explorersInNode).toBe(1);
  });
  test("Requerimiento 2: Get github User", () => {
    const explorer = [{ githubUsername: "user1", mission: "node" }];
    const explorersInNode = ExplorerService.getExplorersUsernamesByMission(
      explorer,
      "node"
    );
    expect(explorersInNode[0]).toBe("user1");
  });
  test("Requerimiento 3: Explorers en stack", () => {
    const explorer = [
      {
        name: "Woopa1",
        githubUsername: "ajolonauta1",
        score: 1,
        mission: "node",
        stacks: ["reasonML", "elm"],
      },
      {
        name: "Woopa2",
        githubUsername: "ajolonauta2",
        score: 2,
        mission: "node",
        stacks: ["javascript", "groovy", "elm"],
      },
    ];
    const explorersInNode = ExplorerService.filterByStack(
      explorer,
      "javascript"
    );
    expect(explorersInNode).toStrictEqual([
      {
        githubUsername: "ajolonauta2",
        mission: "node",
        name: "Woopa2",
        score: 2,
        stacks: ["javascript", "groovy", "elm"],
      },
    ]);
  });
});

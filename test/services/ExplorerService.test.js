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
});

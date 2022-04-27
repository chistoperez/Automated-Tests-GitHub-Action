const ExplorerService = require("../../lib/services/ExplorerService");

describe("Test para ExplorerService", () => {
  test("Requerimiento 1: Calcular explorers en una misión", () => {
    const explorer = [{ mission: "node" }];
    const explorersInNode = ExplorerService.filterByMission(explorer, "node");
    expect(explorersInNode.length).toBe(1);
  });
  test("Requerimiento 1: Calcular explorers en una misión", () => {
    const explorer = [{ githubUsername: "user1", mission: "node" }];
    const explorersInNode = ExplorerService.getExplorersUsernamesByMission(
      explorer,
      "node"
    );
    expect(explorersInNode[0]).toBe("user1");
  });
});
